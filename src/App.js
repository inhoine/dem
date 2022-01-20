import LoginForm from "./components/Login/LoginForm";
import ForgotPw from "./components/Login/ForgotPw";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppPage from "./components/QLHP/AppPage";

function App() {
  
  return (
    <BrowserRouter> 
             <div className="App">
                 <Routes>  
                    <Route path="/home" element={<AppPage/>} />
                    <Route exact path="/login" element={<LoginForm/>} />
                    <Route exact path="/forgot" element={<ForgotPw/>} />
                </Routes>
            </div>
        </BrowserRouter>
   
  );
   
}

export default App;
