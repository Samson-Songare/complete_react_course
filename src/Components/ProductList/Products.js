
// const ImageUrl=require("../../public/images/fresh-milk.png");

import ProductDetails from "./ProductDetails";






// let style1={
//     padding:'0px 20px',
//    ' font-size':14
// };
function Products(props) {
  
    return(
       
            <li className="list-group-item mb-3">
                <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
                    <div className="media-body order-2 order-lg-1">

                    <h5 className="mt-0 font-weight-bold mb-2"> {props.pName}</h5>
                    <p className="font-italic text-muted mb-0 small">  {props.desc}</p>
                   <ProductDetails price={props.price} isAvailable={props.isAvailable} />
                  
                </div><img src={require("../../"+props.image)} alt="Generric Placeholder Image" width='200' height='200' className="ml-lg-5  order-1 order-lg-2"/>
            </div>
        </li>
        
    )
}

export default Products;