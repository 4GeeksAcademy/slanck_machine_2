import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import './Home.css'

function Home() {
  
  return (
    <>
     <Link to="/machine">
        <button className="llamativo">Ir a la Vending Machine</button>
      </Link>
    </>
  )
}

export default Home
