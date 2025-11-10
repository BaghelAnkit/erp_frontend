import React, { useState, useEffect } from "react";

import Modal_profile from "./Modal_profile";
import Modal_settings from "./Modal_settings";
import Modal_dashboard from "./Modal_dashboard";
import axios from "axios";

function Testmodal(props) {
  // const [isopenModal, setisopenModal] = useState(false);
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  ``;
  const [data, setdata] = useState({});

  const [controltab, setcontroltab] = useState("profile");

  const handlaChange = (key, value) => {
    data[key] = value;
    setdata({ ...data, data });
    console.log(data);
  };

  const handlecontraltab = (values) => {
    console.log(values);
    setcontroltab(values);
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    props.objprop(data);

    let a = {
      fName: "",
      lName: "",
      Lead_Owner: "",
      Lead_Status: "",
      Title: "",
      Email: "",
      Phone_type: "",
      Code: "",
      Phone_number: "",
      Source: "",
      Custom_fname: "",
      Custom_fValue: "",
    };
    setdata(a);
  };

  return (
    <div>
      {/* {ApiConsole()}
       */}
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="false"
        className={`${props.nameProps} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="">
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-#CFCFCF  w-[940px]">
            <div>
              <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                  <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a
                      href="https://flowbite.com"
                      className="flex items-center"
                    >
                      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Add Lead
                      </span>
                    </a>
                    <div className="flex items-center lg:order-2">
                      <button
                        className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                        onClick={() => {
                          props.closeprops();
                        }}
                      >
                        close
                      </button>

                      <button
                        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                        onClick={handlesubmit}
                      >
                        Save
                      </button>

                      <button
                        data-collapse-toggle="mobile-menu-2"
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2"
                        aria-expanded="false"
                      >
                        <span className="sr-only">Open main menu</span>
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <svg
                          className="hidden w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                      id="mobile-menu-2"
                    ></div>
                  </div>
                </nav>
              </header>
            </div>

            <div className="  p-4 md:p-5 space-y-4">
              <div className="max-w-4xl mx-auto mt-10 bg-white dark:bg-white shadow-lg rounded-lg">
                {/* <!-- Tabs --> */}
                <ul
                  className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                  role="tablist"
                >
                  <li
                    className="me-2"
                    onClick={() => {
                      handlecontraltab("profile");
                    }}
                  >
                    <a
                      href="#profile"
                      className={`inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg 
                        ${
                          controltab == "profile"
                            ? "active dark:bg-gray-800 dark:text-blue-500"
                            : "hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                        } `}
                    >
                      Profile
                    </a>
                  </li>
                  <li
                    className="me-2"
                    onClick={() => {
                      handlecontraltab("Dashboard");
                    }}
                  >
                    <a
                      href="#dashboard"
                      className={`inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg 
                        ${
                          controltab == "Dashboard"
                            ? "active dark:bg-gray-800 dark:text-blue-500"
                            : "hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                        } `}
                    >
                      Dashboard
                    </a>
                  </li>
                  <li
                    className="me-2"
                    onClick={() => {
                      handlecontraltab("Settings");
                    }}
                  >
                    <a
                      href="#settings"
                      className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                    >
                      Settings
                    </a>
                  </li>
                  <li className="me-2">
                    <a
                      href="#contacts"
                      className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                    >
                      Contacts
                    </a>
                  </li>
                  <li>
                    <span className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
                      Disabled
                    </span>
                  </li>
                </ul>

                {controltab == "profile" ? (
                  <Modal_profile
                    propdata={data}
                    prophandlaChange={handlaChange}
                  />
                ) : (
                  ""
                )}

                {controltab == "Dashboard" ? (
                  <Modal_dashboard dashboardprop={data} />
                ) : (
                  ""
                )}
                {controltab == "Settings" ? (
                  <Modal_settings settingsprop={data} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testmodal;
