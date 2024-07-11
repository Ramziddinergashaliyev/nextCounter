"use client";
import { increment } from "@/lib/features/counter/counterSlice";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count {count} </h1>
      <button onClick={() => dispatch(increment())}>Inc</button>
    </div>
  );
};

export default Header;
