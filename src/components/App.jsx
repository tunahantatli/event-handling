import React, {useState} from 'react'

export default function App() {
    const [headingText, setHeadingText] = useState('Hello');
    const [isMousedover, setIsMousedover] = useState(false)
    function handleClick() {
        setHeadingText('Event & Handling in React')
    }
    function handleMouseOver(){
        setIsMousedover(true)
    }
    function handleMouseOut(){
        setIsMousedover(false)
    }
    
  return (
    <div className='container'>
        <div className="heading">
           <h1>{headingText} <i className="fa-brands fa-react fa-spin"></i></h1>
           <input type="text" placeholder="What's your name?" />
           <button style={{backgroundColor: isMousedover ?  '#000' : '#ffff'}} onClick={handleClick}
           onMouseOver={handleMouseOver} 
           onMouseOut={handleMouseOut}
           >Submit</button>
        </div>
    </div>
  )
}
