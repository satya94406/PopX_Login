import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignInUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/allreadyUser");
  };

  return (
    <div className="flex items-center justify-center  h-screen bg-gray-100 ">
       <div className="w-4/5 lg:w-1/5 h-4/5 text-center bg-white  shadow-xl  p-4 flex flex-col justify-start">
         <div className="text-left mb-2 ">
          <h1 className="font-bold text-3xl ">
              Signin to your<p>PopX account</p>
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet,<p>consectetur adipising elit.</p> 
          </p>
          <div className="flex flex-col w-full mt-4">
          <label className="text-sm font-medium text-purple-600 mb-1">
            Email address<span className="text-red-500 text-left">*</span>
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="example@gmail.com"
          />
        </div>

        <div className="flex flex-col w-full mt-4">
          <label className="text-sm font-medium text-purple-600 mb-1">
            Password<span className="text-red-500 text-left">*</span>
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="******"
          />
        </div>
         </div>
          <button className="bg-blue-700 rounded-xl p-4 w-full text-white mt-2 mb-2 cursor-pointer" onClick={handleSubmit}>Login</button>
       </div>
     </div>
  )
}

export default SignInUser