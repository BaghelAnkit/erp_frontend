import React, { useState } from "react";

function Test2() {
  const [val, setval] = useState({});

  const handlechange = (key, value) => {
    console.log(key,value)
    val[key] = value;
    setval(val);
    console.log(val)
  };

  return (
    <div>
      <input
        type="checkbox"
        //   checked={true}
        onChange={(e) => {
          handlechange("sjask", e.target.checked);
          
        }}
      />{" "}
      kjyunbmnbmbnm
      <p>kjfhsdfkjsdkjfsdkjfdkjfkjsdfhdskj</p>
    </div>
  );
}

export default Test2;
