import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const usersData = [
  {
    id: 1,
    name: "홍길동",
    age: 35,
  },
  {
    id: 2,
    name: "김코드",
    age: 40,
  },
];

function Users() {
  const params = useParams();
  // console.log("params", params);
  const [user, setUser] = React.useState({
    id: 0,
    name: "없음",
    age: 0,
  });

  useEffect(() => {
    // api 호출하는 것을 흉내내는 코드
    const result = usersData.find((user) => String(user.id) === params.id);
    // console.log("result", result);
    setUser(
      result
        ? result
        : {
            id: 0,
            name: "없음",
            age: 0,
          }
    );
  }, []);

  return (
    <>
      {user.id} {user.name} {user.age}
    </>
  );
}

export default Users;
