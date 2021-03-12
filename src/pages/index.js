import React from "react"
import {Link} from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
  <div>
    <Link to="/contact/">Contact</Link><br></br>
    <Link to="/about-css-modules/">About CSS Modules</Link>
    <Header text="Hello Gatsby"/>
    <p>CSS Practice</p>
    <p>testy testy</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
  );
}
