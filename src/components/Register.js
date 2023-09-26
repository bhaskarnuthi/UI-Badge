import { useState } from "react"
import axios from "axios"
// function Register() {
//    const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//    const [confirmpassword, setConfirmPassword] = useState('')
//     const handlename = (e) => {
//         setName(e.target.value)
//     }
//     const handleEmail = (e)=> {
//         setEmail(e.target.value)
//     }
//     const handlePassword = (e)=> {
//         setPassword(e.target.value)
//     }
//     const handleConfirmPassword = (e)=> {
//         setConfirmPassword(e.target.value)
//     }
//     const handleApi = () => {
//         console.log(name,email, password, confirmpassword)
//         let id = new Date().getTime();
//         const user = {
//             id: id+1,
//             name : name,
//             email : email,
//             password : password,
//             confirmpassword : confirmpassword
//         }
//         axios.post('http://localhost:3000/users',user)
//         .then(result => {
//             console.log(result.data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     }
//     return (
//         <div>

//            <h1>SIGN UP page </h1>
//            Name: <input onChange={handlename} value ={name} type="name" /> <br/>
//            Email: <input onChange={handleEmail} value ={email} type="text" /> <br/>
//            Password: <input onChange={handlePassword} value={password} type="text" /> <br/>
//            ConfirmPassword: <input onChange={handleConfirmPassword} value={confirmpassword} type="text" /> <br/>
//            <button onClick={handleApi}> Register </button>
//         </div>
//     )
// }
// export default Register

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { redirect } from "react-router-dom";

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const handlename = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e)=> {
        setEmail(e.target.value)
    }
    const handlePassword = (e)=> {
        setPassword(e.target.value)
    }
    const handleConfirmPassword = (e)=> {
        setConfirmPassword(e.target.value)
    }
    const handleSubmit = () => {
        console.log(name,email, password, confirmpassword)
        let id = new Date().getTime();
        const user = {
            id: id+1,
            name : name,
            email : email,
            password : password,
            confirmpassword : confirmpassword
        }
        axios.post('http://localhost:3000/users',user)
        .then(result => {
            console.log(result.data)
            redirect('/login')
        })
        .catch(err => {
            console.log(err)
        })
    }

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            required
            fullWidth
            onChange={handlename}
            id="name"
            label="Full Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={handleEmail}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={handlePassword}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={handleConfirmPassword}
            name="confirm password"
            label="Confirm Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
         
        </Box>
      </Box>
    </Container>
  );
}







