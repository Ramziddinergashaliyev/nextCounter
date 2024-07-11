import { defaultCounter } from "@/lib/features/counter/counterSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const DefaultValues = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(defaultCounter(+localStorage.getItem("count")));
  });
  return null;
};

export default DefaultValues;
