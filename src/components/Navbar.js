import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Home from "../pages/Home"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="blog-title">Vano's Blog</Link>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}