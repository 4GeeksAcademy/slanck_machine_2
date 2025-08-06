import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const getApi = async () => {
    const response = await fetch("https://friendly-fishstick-q76r95vpjqj7h6w5w-5000.app.github.dev/products" )

    const data = await response.json()
    console.log(data);

  }
  const post_product= async() =>{
    const response =await fetch("https://friendly-fishstick-q76r95vpjqj7h6w5w-5000.app.github.dev/",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify()
    })
  }

  useEffect(() => {
    getApi()
  }, [])


  return (
    <>

    </>
  )
}

export default App
