import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SignInUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/allreadyUser");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-4/5 lg:w-1/5 h-4/5 text-center bg-white shadow-xl p-4 flex flex-col justify-start">
        <div className="text-left mb-2">
          <h1 className="font-bold text-3xl">
            Sign in to your
            <p>PopX account</p>
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet,
            <p>consectetur adipiscing elit.</p>
          </p>

          <Box component="form" noValidate autoComplete="off" className="flex flex-col mt-4">
            <TextField
              required
              fullWidth
              id="email-address"
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
              id="password"
              label="Password"
              type="password"
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
          </Box>

          <button
            className="bg-blue-700 rounded-xl p-4 w-full text-white mt-4 cursor-pointer"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignInUser;
