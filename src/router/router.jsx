import { Routes, Route } from "react-router-dom";
import LoginPage from "../components/login/LoginPage";
import Dashboard from "../components/Dashboard/Dashboard";
import Demo from "../components/elements/Demo";
import AppLayout from "../Config/Default";
import Test from "../components/test";
import Testmodal from "../components/elements/Modal";
// import Test2 from "../components/test2";
import Dummy from "../components/Dummy";
import Usememo from "../components/usememo";



const AppRouter = () => {
  return (
    <Routes>
     <Route path="/Demo" element={<AppLayout><Demo/></AppLayout>} />
     {/* <Route path="/Dashboard" element={<AppLayout><Dashboard/></AppLayout>} /> */}
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/Testmodal" element={<Testmodal/>} />
      {/* <Route path="/Test2" element={<Test2/>} /> */}
      <Route path="/Dummy" element={<Dummy/>} />
      <Route path="/22" element={<Usememo/>} />


    </Routes>
  );
};

export default AppRouter;
