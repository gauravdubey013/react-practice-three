import React from 'react'
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className='home' style={{ backgroundImage: 'url(https://www.cypressgreen.in/blog/wp-content/uploads/2021/03/food.jpg)' }}>
      <div className="headerContainer">
        <h2>Indian Food</h2>
        <h1>Hey!</h1>
        <p>Get Spicy Indian Food!</p>
        <Link to="/menu">
            <button> ORDER NOW! </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
