import "./Products.css"
import { Link } from "react-router-dom"



function Products(props) {
    return (
        <div>
            <Link to={`/${props.products.id}`} >{props.products.title}</Link>
            <img src={props.products.thumbnail} alt="" />
        </div>
    )
}
export default Products