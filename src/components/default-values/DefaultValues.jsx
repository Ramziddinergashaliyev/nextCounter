"use client";
import { defaultCounter } from "@/lib/features/counter/counterSlice";
import { wishlistLocal } from "@/lib/features/wishlist/wishlistSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const DefaultValues = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(defaultCounter(+localStorage.getItem("count")));
    dispatch(wishlistLocal(JSON.parse(localStorage.getItem("wishlist")) || []));
  });
  return null;
};

export default DefaultValues;
