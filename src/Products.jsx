import React from "react";
import { RiRam2Fill } from "react-icons/ri";
import { HiOutlineCpuChip } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";
import { TiCloudStorage } from "react-icons/ti";
import { ProductList } from "./ProductsData.jsx";
function Products({ Data }) {
  console.log(ProductList);
  return (
    <div
      style={{ backgroundColor: "whitesmoke" }}
      className="card w-275 h-350 d-flex justify-content-center align-items-center border border-5 border-dark"
    >
      <h5 className="mt-4">{Data.name}</h5>
      <div className="mt-2 d-flex flex-column align-items-center">
        <img
          style={{
            width: "100px",
          }}
          src={`src/assets/images/${Data.image}`}
          className="card-img-top"
        ></img>

        {/* Sistem Bilgileri */}

        <div className="mt-4">
          <div>
            <RiRam2Fill className="fs-4 text-dark me-1" />
            <span className="me-3">{Data.ram}</span>
            <TiCloudStorage className="fs-4 text-dark me-1" />
            <span>{Data.disk}</span>
          </div>
          <div>
            <HiOutlineCpuChip className="fs-4 text-dark me-1" />
            <span className="me-3">{Data.cpu}</span>
            <SlLocationPin className="fs-5 text-dark me-1" />
            <span>{Data.location}</span>
          </div>
          <div></div>
        </div>
      </div>

      {/* Ödeme Bölümü */}

      <div className="d-flex flex-column card-body p-0 mt-3">
        <h5 className="card-title align-self-center text-dark">
          {Data.price} / <span className="text-black">Monthly</span>
        </h5>

        <button className="btn btn-success">Sipariş Et</button>
      </div>
    </div>
  );
}

export default Products;
