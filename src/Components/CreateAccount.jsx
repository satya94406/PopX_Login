import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-4/5 lg:w-1/5 bg-white shadow-xl p-6">
        <div className="text-left mb-4">
          <h1 className="font-bold text-3xl">
            Create your <p>PopX account</p>
          </h1>
        </div>

        <Box component="form" noValidate autoComplete="off">
          <TextField
            required
            fullWidth
            id="full-name"
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Marry Doe"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ 
              shrink: true,
              classes: { asterisk: 'Mui-error' },
            }}
          />

          <TextField
            required
            fullWidth
            id="phone-no"
            label="Phone Number"
            value={phone_no}
            onChange={(e) => setPhone_no(e.target.value)}
            placeholder="9876543210"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ 
              shrink: true,
              classes: { asterisk: 'Mui-error' },
            }}
          />

          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ 
              shrink: true,
              classes: { asterisk: 'Mui-error' },
            }}
          />

          <TextField
            required
            fullWidth
            type="password"
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ 
              shrink: true,
              classes: { asterisk: 'Mui-error' },
            }}        
            />

          <TextField
            fullWidth
            id="company"
            label="Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="PopX"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ 
              shrink: true,
              classes: { asterisk: 'Mui-error' },
            }}          

            />
        </Box>

        <div className="flex flex-col w-full mt-4">
          <label className="text-sm font-medium text-purple-600 mb-2">
            Are you Agency? <span className="text-red-500">*</span>
          </label>
          <div className='flex'>
            <label className="flex mr-8">
              <input
                type="radio"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex">
              <input
                type="radio"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

        <button
          className="bg-blue-700 rounded-xl p-4 w-full mt-8 text-white mb-2 cursor-pointer"
          onClick={handleSubmit}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default CreateAccount;
