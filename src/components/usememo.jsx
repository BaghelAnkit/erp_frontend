import React, { useState, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { increment,decrement } from "../redux/slices/counter";
import Usememo2 from "./usememo2";

function Usememo() {
  const count = useAppSelector((state) => state.counter);
  const dispatch= useAppDispatch()

  const [number, setnumber] = useState(0);
  const [dark, setdark] = useState(false);
  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  const theme2 = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  function slowfunction(val) {
    console.log("jdfhjfhkj", theme == theme2);

    // for (let i = 0; i <= 100000000; i++) {}
    return val * 2;
  }
  let havyfuntion = useMemo(() => {
    return slowfunction(number);
  }, [number]);
  return (
    
    <div>
      <Usememo2/>
      <input
        value={number}
        onChange={(e) => {
          setnumber(parseInt(e.target.value));
        }}
      ></input>
      <button
        onClick={() => {
          setdark(!dark);
        }}
      >
        new nutton{" "}
      </button>
      <div style={theme}>{havyfuntion}</div>

      <div>
        <h1>count is {count}</h1>
        <button onClick={()=>{dispatch(increment())}}>redux++</button>
        <br></br>
        <button onClick={()=>{dispatch(decrement())}}>redux--</button>

      </div>
    </div>
  );
}

export default Usememo;
