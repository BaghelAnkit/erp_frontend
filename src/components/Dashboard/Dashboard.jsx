import React, { useState ,useEffect} from "react";
import Header from "../elements/Header";
import MenuBar from "../elements/Sidebar";
import Testmodal from "../elements/Modal";
import axios from "axios"

function Dashboard() {
  const [userdata, setuserdata] = useState([]);
  const [isopenModal1, setisopenModal1] = useState("block");

  const [arr, setarr] = useState([]);

  const openmodal = () => {

    setisopenModal1("block");
  };
  const closeB = () => {
    setisopenModal1("hidden");
  };

  const fobjet = (obj) => {
    setarr([...arr, obj]);
  };


  useEffect(()=>{
    axios
    .get("http://localhost:3000/dnfkjdsfbhjas")
      .then((response)=>{
        console.log(response)
      })
      .catch((error)=>{
        console.log("ghsafhaj")
      })
    
  },[])



  return (
    <div>
      <Header />
      <MenuBar />
      <Testmodal
        nameProps={isopenModal1}
        newprops={openmodal}
        closeprops={closeB}
        objprop={fobjet}
      />

      <div className="absolute right-px w-[1400px]">
        <section className=" items-center  bg-gray-50 dark:bg-gray-900">
          <div className="w-full max-w-screen-xl px-4 mx-auto lg:px-12">
            <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800  my-0 mx-[1px] ml-[-47px] mr-[-47px] ">
              <div className="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
                <div>
                  <h5 className="mr-3 font-semibold dark:text-white">
                    Flowbite Users
                  </h5>
                  <p className="text-gray-500 dark:text-gray-400">
                    Manage all your existing users or add a new one
                  </p>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                  onClick={() => {
                    setisopenModal1();
                  }}
                >
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg> */}
                  New Lead
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className=" overflow-x-auto shadow-md ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  fName
                </th>
               
                <th scope="col" className="px-6 py-3">
                  Lead_Owner
                </th>
                <th scope="col" className="px-6 py-3">
                  Lead_Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone_type
                </th>
                <th scope="col" className="px-6 py-3">
                  Code
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone_number
                </th>
                <th scope="col" className="px-6 py-3">
                  Source
                </th>
                <th scope="col" className="px-6 py-3">
                  Custom_fname
                </th>
                <th scope="col" className="px-6 py-3">
                  Custom_fValue
                </th>
                 <th scope="col" className="px-6 py-3">
                  prof_mail
                </th>
              </tr>
            </thead>
            <tbody>
              {arr.map((item ,index) => {
                  
                return (
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                    <td className="px-6 py-4">{item.fName
                      +" "+item.lName}</td>
                   
                    <td className="px-6 py-4" key={index}>{item.Lead_Owner}</td>
                    <td className="px-6 py-4" key={index}>{item.Lead_Status}</td>
                    <td className="px-6 py-4" key={index}>{item.Title}</td>
                    <td className="px-6 py-4" key={index}>{item.Email}</td>
                    <td className="px-6 py-4"key={index} >{item.Phone_type}</td>
                    <td className="px-6 py-4"key={index}>{item.Code}</td>
                    <td className="px-6 py-4"key={index}>{item.Phone_number}</td>
                    <td className="px-6 py-4"key={index}>{item.Source}</td>
                    <td className="px-6 py-4"key={index}>{item.Custom_fname}</td>
                    <td className="px-6 py-4"key={index}>{item.Custom_fValue}</td>
                     <td className="px-6 py-4"key={index}>{item.professional_mail}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
