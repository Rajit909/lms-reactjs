import React from "react";
import Price from "./Price";

function Product({ title, desc, idx }) {
  // const list = features ? features.map((feature, index) =>
  //   <li key={index}>{feature}</li>) : null;

  let titleName = [
    "Oppo realme 10",
    "Oppo realme 9",
    "Oppo realme 7",
    "Oppo realme 8",
  ];
  let oldPrice = [
    "2999",
    "3999",
    "1599",
    "2099"
  ];
  let newPrice = [
    "2399",
    "3000",
    "1299",
    "1599"
  ];
  let desciption = [
    ["6 GB RAM", "128 GB ROM"],
    ["6 GB RAM", "128 GB ROM"],
    ["6 GB RAM", "64 GB ROM"],
    ["4 GB RAM", "64 GB ROM"],
  ];
  return (
    <>
      <div className="card">
        <div className="head">
          <h4>{titleName[idx]}</h4>
          <p>{desciption[idx][0]}</p>
          <p>{desciption[idx][1]}</p>
        </div>
        <div className="price">
          <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
      </div>
    </>
  );
}

export default Product;
