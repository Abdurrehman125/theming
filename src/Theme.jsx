import React, { useEffect, useState } from 'react'
import "./App.css"

function Theme() {
    const [theme, setTheme] = useState("");

    const mode= ()=>{
        theme === "darktheme"? setTheme("lighttheme"):setTheme("darktheme")
    }
    useEffect(()=>{
        document.body.className=theme
    },[theme])
  return (
    <>
    <nav>
        {
            theme=== "darktheme"?
            <button onClick={mode}>change Theme</button>
            :<button onClick={mode}>dark Theme</button>

           
        }

        
        <div><h1>BOOKFOLIO</h1></div>

    </nav>
    <main>
        <div><img src="./img/book-5.jpg" alt="" /></div>
        <div><img src="./img/book-6.jpg" alt="" /></div>
        <div><img src="./img/book-7.jpg" alt="" /></div>
    </main>
    </>
  )
}

export default Theme
