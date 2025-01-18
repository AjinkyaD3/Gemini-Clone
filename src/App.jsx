import { Route, Routes } from "react-router-dom";
import Error from "./components/login/Error";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Sidebar />
      <Main />
    </>
  );
};

export default App;
