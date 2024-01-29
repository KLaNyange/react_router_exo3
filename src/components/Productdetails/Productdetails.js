import { useParams, Link } from "react-router-dom"
import "./Productdetails.css"

function Productdetails(props) {
    const params = useParams()
    let product = props.products.find(produit => produit.id == params.id) // 
    return (
        <div>
            <Link to="/">Home</Link>
            <p>{product.title}</p>
            <p>{product.description}</p>
            {
                product.images.map((img, index)=>(
                    <img key={index} src={img} alt="" />
                )) 
            }
        </div>
    )
}
export default Productdetails
