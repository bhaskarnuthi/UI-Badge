import axios from "axios"
import { Component } from "react"
import ProductDetails from "./ProductDetails"
class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[]
        }
    }
    componentWillMount() {
        axios.get('http://localhost:3000/products')
        .then(result => {
            console.log(result.data)
            this.setState({data: result.data})
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <h1>Products</h1>
                <ProductDetails products={this.state.data} />
            </div>
        )
    }
}
export default Products










