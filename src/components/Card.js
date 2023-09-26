import './Card.css';

const Card = (props) => {

    console.log("props:::",props.data)
    return(
        <div>
            {props.data.map(product => {
               return ( 
                    <div id='card'>
                        <p>Name: {product.name}</p>
                        <p>Manufacturer: {product.mfgCompany}</p>
                        <p>Price: {product.price}</p>
                        <p>Quantity: {product.quantity}</p>
                    </div>
               )
            })} 
        </div>
    )
}

export default Card