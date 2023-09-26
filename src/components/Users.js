import { useState } from "react"
import axios from "axios"
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Users() {
    const [name, setName] = useState("")
    const [mfgCompany, setMfgCompany] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const updateName = (e) => {
        setName(e.target.value)
    }
    const updateMfgCompany = (e) => {
        setMfgCompany(e.target.value)
    }
    const updatePrice = (e) => {
        setPrice(e.target.value)
    }
    const updateQty = (e) => {
        setQuantity(e.target.value)
    }
    const handleSubmit = () => {
        let id = new Date().getTime();
        console.log("data:::",mfgCompany, price, quantity)
        const product = {
            id: id+1,
            name : name,
            mfgCompany : mfgCompany,
            price : price,
            quantity : quantity
        }
        axios.post('http://localhost:3000/products',product)
        .then(result => {
            console.log(result.data)
            alert("Product saved successfully!!!")
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
          Add a Product
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            required
            fullWidth
            onChange={updateName}
            id="pname"
            label="Product Name"
            name="pname"
            autoComplete="pname"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={updateMfgCompany}
            id="mfgcompany"
            label="Manufacturer"
            name="mfgCompany"
            autoComplete="mfgcompany"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={updatePrice}
            name="price"
            label="Price per Unit"
            id="price"
            autoComplete="price"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={updateQty}
            name="qty"
            label="Quantity"
            id="qty"
            autoComplete="qty"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Product
          </Button>
         
        </Box>
      </Box>
    </Container>
  );
}
















