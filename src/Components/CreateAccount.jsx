import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
      navigate("/allreadyUser");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 ">
      <div className="w-4/5 lg:w-1/5 bg-white shadow-xl p-4">
        <div className="text-left mb-2">
          <h1 className="font-bold text-3xl ">
            Create your <p>PopX account</p>
          </h1>
        </div>

        <div className="flex flex-col w-full mt-4">
          <label className="text-sm font-medium text-purple-600 mb-1">
            Full Name<span className="text-red-500 text-left">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Marry Doe"
          />
        </div>

        <div className="flex flex-col w-full mt-4">
          <label className="text-sm font-medium text-purple-600 mb-1">
            Phone number<span className="text-red-500 text-left">*</span>
          </label>
          <input
            type="text"
            value={phone_no}
            onChange={(e) => setPhone_no(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="9876543210"
          />
        </div>

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

        <div className="flex flex-col w-full mt-4">
          <label className="text-sm font-medium text-purple-600 mb-1">
            Company name<span className="text-red-500 text-left">*</span>
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="PopX"
          />
        </div>

        <div className="flex flex-col w-full mt-4">
          <label className="text-sm font-medium text-purple-600 mb-1">
            Are you Agency?<span className="text-red-500 text-left">*</span>
          </label>
          <div>
            <label>
              <input
                type='radio'
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleChange}
                className='mr-2'
              />
              Yes
            </label>
            <label className='ml-6'>
              <input
                type='radio'
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleChange}
                className='mr-2'
              />
              No
            </label>
          </div>
        </div>

        <button
          className="bg-blue-700 rounded-xl p-4 w-full mt-8 text-white  mb-2 cursor-pointer "
          onClick={handleSubmit}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default CreateAccount;
