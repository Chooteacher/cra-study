import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

function Products() {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [categoryId, setCategoryId] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const [products, setProducts] = useState([
    {
      id: 0,
      title: "상품제목",
      price: 1000,
    },
  ]);

  // console.log("location", location);
  // console.log("pathname", location.pathname);
  // console.log("search", location.search);

  useEffect(() => {
    const products = getFakeAPI(location.search);
    setProducts(products);
  }, [location.search]);

  function onFetchClick() {
    navigate(`?limit=${limit}&offset=${offset}&category=${1}`);
  }

  return (
    <>
      <div>
        <select onChange={(e) => setCategoryId(e.target.value)}>
          <option value="1">가전제품</option>
          <option value="2">생활용품</option>
          <option value="3">식료품</option>
          <option value="4">취미</option>
        </select>
      </div>
      <div>
        limit :{" "}
        <input value={limit} onChange={(e) => setLimit(e.target.value)} />
      </div>
      <div>
        offset :{" "}
        <input value={offset} onChange={(e) => setOffset(e.target.value)} />
      </div>
      <button onClick={onFetchClick}>가져오기</button>
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <div>
            {product.id} {product.title} {product.price}
          </div>
        </Link>
      ))}
    </>
  );
}

export default Products;

// 백엔드 흉내내는 코드
function getFakeAPI(search) {
  const urlSerachParams = new URLSearchParams(search);
  const offset = urlSerachParams.get("offset");
  const limit = urlSerachParams.get("limit");
  // 백엔드에서는 req.query.offset, req.query.limit

  let index = offset;
  const fakeProducts = [];

  for (let i = 0; i < limit; i += 1) {
    const fakeProduct = {
      id: index,
      title: `상품제목${index}`,
      price: 1000 * Number(index),
    };
    index++;
    fakeProducts.push(fakeProduct);
  }

  return fakeProducts;
}
