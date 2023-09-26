import axios from "axios"
import { useState } from "react"
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Dashboard from "./Dashboard";

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loggedin, setLoggedin] = useState(false)
    const handleEmail = (e)=> {
        setEmail(e.target.value)
    }
    const handlePassword = (e)=> {
        setPassword(e.target.value)
    }
    const handleSubmit = async () => {
        console.log("Login details",email, password)
        await axios.get('http://localhost:3000/users')
        .then(result => {
            console.log(result.data)
            result.data.map(login => {
                  if(email && password && login.email === email && login.password === password) {
                    alert("Logged in successfully")
                    setLoggedin(true)
                  } else {
                    setLoggedin(false)
                    alert("Please enter the valid credentials")
                  }
            })
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={handleEmail}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Click on Sign Up from Menu"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}















