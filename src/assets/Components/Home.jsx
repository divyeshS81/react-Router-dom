import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {

    const navigate = useNavigate()

    function handleClick() {
        navigate('/about')
    }

  return (
    <>
        <div>Home</div>

        <div>
            <button
                className='border-2 border-black p-2 bg-blue-500 hover:bg-blue-800 hover:text-white'
            onClick={handleClick}> go to the about page</button>
        </div>
    </>
  )
}

export default Home