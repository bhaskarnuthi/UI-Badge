import { Link } from "react-router-dom"

const Dashboard = () => {
    return(
        <div>
          <Link to="/users"> Add Product | </Link> 
          <Link to="/products"> Products |</Link> 
          <Link to="/login"> Logout </Link> 
        </div>
    )
}

export default Dashboard