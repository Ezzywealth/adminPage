import React from "react";
import ToolBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Main from "./components/body/main.jsx";
import userData from "./components/body/chart/userData";
import UsersLists from "./components/UserList/UserLists.jsx";
import { Routes, Route } from "react-router-dom";
import User from "./components/UserList/User";
import NewUser from "./components/UserList/newUser";
import ProductList from "./components/UserList/ProductList/ProductList";
import Product from "./components/Product/Product";
import NewProduct from "./components/Product/newProduct";
function App() {
  return (
    <>
      <SideBar />
      <ToolBar />
      <ToolBar />
      <Routes>
        <Route path='/' element={<Main Data={userData} />} />
        <Route path='/users/' element={<UsersLists />} />
        <Route path='/newUser' element={<NewUser />} />
        <Route path='/users/:id' element={<User />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/newProduct' element={<NewProduct />} />
      </Routes>
    </>
  );
}

export default App;
