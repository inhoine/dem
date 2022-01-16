import { useState } from "react";
import Login from "./components/Login/Login";
import Navmenu from "./components/QLHP/Navmenu";
function App() {
  const adminUser = {
    email: "thanh@gmail.com",
    password: "thanh123"
  }

  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");
  return (
    <div className="App">
          <Login />
          {/* <Navmenu /> */}
    </div>
   
  );
   
}

export default App;
