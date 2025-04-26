import React from "react"
import { useNavigate } from "react-router-dom"

function App() {
  const navigate = useNavigate();

  return (
     <div className="flex items-center justify-center  h-screen bg-gray-100 ">
       <div className="w-4/5 lg:w-1/5 h-4/5 text-center bg-white  shadow-xl  p-4 flex flex-col justify-end">
         <div className="text-left mb-2 ">
          <h1 className="font-bold text-3xl ">
              Welcome to PopX
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipising elit.
          </p>
         </div>
          <button className="bg-blue-700 rounded-xl p-4 w-full text-white mt-2 mb-2 cursor-pointer" onClick={() => navigate("/create_account")}>Create Account</button>
          <button className="bg-purple-200 rounded-xl p-4 w-full  cursor-pointer" onClick={()=> navigate("/signInUser")}>Already Registered? Login</button>
       </div>
     </div>
  )
}

export default App
