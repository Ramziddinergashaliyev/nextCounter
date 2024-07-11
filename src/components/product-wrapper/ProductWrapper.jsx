"use client";
import { useGetProductsQuery } from "@/lib/api/productApi";
import { toggleHeart } from "@/lib/features/wishlist/wishlistSlice";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductWrapper = () => {
  const { data, isLoading } = useGetProductsQuery({ skip: 10, limit: 5 });
  const dispatch = useDispatch();
  return (
    <div>
      {data?.products?.map((el) => (
        <div key={el.id} className="product__card">
          <div className="product__card__img">
            <Image width={200} height={200} src={el?.images[0]} />
          </div>
          <div className="product__card__info">
            <h3>{el?.title}</h3>
            <p>{el?.price}</p>
          </div>
          <button onClick={() => dispatch(toggleHeart(el))}>like</button>
        </div>
      ))}
    </div>
  );
};

export default ProductWrapper;
