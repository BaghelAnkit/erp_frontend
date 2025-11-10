import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Test() {
     const navigate = useNavigate();

  const [value, setvalue] = useState(0);
  const [value2, setvalue2] = useState(10);
  const handleClick = () => {
    setvalue(value + 1);
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        console.log(response.data.users);
      })
      .catch((error) => {
        console.log("hello");
      });
  }, []);

  useEffect(() => {
    setvalue2(value2 - 1);
  }, [value]);

  useEffect(() => {
    return () => {
      console.log("ankit");
    };
  }, []);

  return (
    <div>
      <button onClick={handleClick}> click</button>
      <button onClick=
        {() => {
          navigate("/Dashboard")
        }}>
        
        submit
      </button>
      <label>{value2}</label>
      <p>{value}</p>
    </div>
  );
}

export default Test;
