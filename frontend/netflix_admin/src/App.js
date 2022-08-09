// Compoents
import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";

// Pages
import Home from "./Pages/Home/Home";
import UsersList from "./Pages/UserList/UsersList";
import User from "./Pages/User/User";
import NewUser from "./Pages/NewUser/NewUser";
import ProductList from "./Pages/ProductList/ProductList";
import Product from "./Pages/Product/Product";
import NewProduct from "./Pages/NewProduct/NewProduct";
import Login from "./Pages/Login/Login";

import "./app.css";

// Router
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      {/* <Router className="App">
        <header className="App-header"></header>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/users" element={<UsersList />} />
            <Route exact path="/user" element={<User />} />
            <Route exact path="/newuser" element={<NewUser />} />
            <Route exact path="/products" element={<ProductList />} />
            <Route exact path="/product" element={<Product />} />
            <Route exactpath="/newproduct" element={<NewProduct />} />
          </Routes>
        </div>
      </Router> */}
    </>
  );
}

export default App;
