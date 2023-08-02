import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { useMutation, useQuery } from "react-query";

function App() {
  // const [data, setData] = useState("");
  // useEffect(() => {
  //   const getApi = async () => {
  //     const res = await axios.get("https://fakestoreapi.com/products");
  //     setData(res.data);
  //   };
  //   getApi();
  // }, []);
  // console.log(data);

  const getApi = async () => {
    const res = await axios.get("http://localhost:3000/blogs");
    // setData(res.data);
    return res.data;
  };

  const PostApi = async () => {
    await axios({
      title: "30/4/1975 ",
      content: "La ngay giai phong mien nam cua Viet Nam",
      description: "La ngay giai phong mien nam",
      image: "",
      id: 3,
    });
  };

  // use Call Api with react query
  const { isLoading, data, isError } = useQuery("get-roduct", getApi);

  const { mutate } = useMutation({
    mutation: PostApi,
  });

  const handleAddPost = () => {
    mutate({
      onSuccess: () => {
        alert("tao bài viết thành công");
      },
      onError: () => {
        alert("tao khong thanh cong");
      },
    });
  };

  //quan ly trạng thái dữ liệu
  if (isLoading === true) {
    return <p>loading....</p>;
  }

  if (isError === true) {
    return <p> Loaddingg</p>;
  }

  // console.log(query);
  return (
    <React.Fragment>
      {data &&
        data.map((item) => {
          return <h4 key={item.id}>{item.title}</h4>;
        })}

      <hr />

      <button onClick={handleAddPost}>Add Post</button>
    </React.Fragment>
  );
}

export default App;
