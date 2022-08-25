import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// charges: [
//   {
//     id: 1,
//     name: "배송비",
//     price: 2500,
//   }
// ]

// review: [
//   {
//     id: 0,
//     comment: "상품이 좋아요",
//     star: 4.5,
//   }
// ]

function ProductDetail() {
  const [product, setProduct] = useState({});

  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    // api 호출
    // const fakeProduct = getFakeAPI(params.id);
    // setProduct(fakeProduct);
  }, [productId]);

  if (!product) return <>상품 정보를 찾을 수 없습니다.</>;

  return (
    <>
      {product.id}
      {product.title}
      {product.price}
    </>
  );
}

export default ProductDetail;
