import axios from "axios";
import React, { useEffect, useState } from "react";
import useGetApi from "../hooks/useGetApi";

const ListingProduct = () => {
  const data = useGetApi("https://fakestoreapi.com/products");
  console.log(data);
  return <div>Listingprodct</div>;
};

export default ListingProduct;
