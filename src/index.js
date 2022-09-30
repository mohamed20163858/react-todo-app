import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from "./functionBased/components/TodoContainer"
import About from "./functionBased/pages/About"
import NotMatch from "./functionBased/pages/NotMatch"
import Navbar from "./functionBased/components/Navbar"
import "./functionBased/App.css"
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router"

ReactDOM.render(
<React.StrictMode>
<BrowserRouter>
<Navbar />
<Routes>
    <Route path="/" element={<TodoContainer />}/>
    <Route path="/about" element={<About />}/>
    <Route path="*" element={<NotMatch />}/>
</Routes>
</BrowserRouter>
</React.StrictMode>
, document.getElementById("root"));