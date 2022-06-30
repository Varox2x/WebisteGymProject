import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import VisitPage from "./pages/visitPage";
import UserPage from "./pages/userPage";
import LoginPage from "./loginpage/LoginPage";
import {AuthProvider} from "./context/AuthContext";
import PrivateRout from "./context/PrivateRout";

function App() {
  return (
      <Router>
          <AuthProvider>
          <Routes>
              <Route path="/" element={<VisitPage/>}/>
              <Route path="/strefauzytkownika/*" element={<UserPage/>}/>
              <Route path="/signin" element={<LoginPage/>}/>
          </Routes>
          </AuthProvider>
      </Router>
  );
}


export default App;
