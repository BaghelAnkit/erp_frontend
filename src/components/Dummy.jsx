import axios from "axios";
import React, { useState, useEffect } from "react";

function Dummy() {
  const [user, setuser] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        console.log( response.data.results[0]);
        setuser(response.data.results)
      })
      .catch((error) => {
        console.log("kjjhka", error);
      });
  }, []);

  //   useEffect(() => {
  //     fetch("https://randomuser.me/api/")
  //       .then((response) => {
  //         response.json();
  //       })
  //       .then(( response) => {
  //         console.log("sdaskjdaskdj",response);
  //       })
  //       .catch((error) => {
  //         console.log("asdsdas", error);
  //       });
  //   }, []);
  return (
    <div>
      {user.map((item)=>{
        return(
            <>
            <label>gender:</label>
            <label> {item.gender}</label>
            <br/>
            <label>Name:</label>
            
            <label>{item.name.title+" "+item.name.first+" "+item.name.last}</label>
            <br/>
            <label>address: </label>
          
            <label>
                {item.location.street.number+" "+item.location.street.name+" "+item.location.city+" "+item.location.state+" "+item.location.country}
            </label>

               
            
            </>
            
        
        )
      })}
      
    </div>
  );
}
export default Dummy;
