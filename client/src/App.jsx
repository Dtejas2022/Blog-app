import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/LogIn";
import Register from "./pages/Register";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import SingleBlog from "./pages/SingleBlog";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Home/>}
        />

        <Route 
          path="/login" 
          element={<LogIn/>}
        />

        <Route 
          path="/register" 
          element={<Register/>}
        />

        <Route 
          path="/create-blog" 
          element={<CreateBlog/>}
        />

        <Route 
          path="/edit-blog/:id" 
          element={<EditBlog/>}
        />

        <Route 
          path="/blog/:id" 
          element={<SingleBlog/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
