import { Component } from "react";
import Card from "./Card";
class ProductDetails extends Component {
    render() {
        console.log("received:::",this.props.products)
        return(
            <div>
                    <Card data={this.props.products} />
                
            </div>
        )
    }
}
export default ProductDetails;






