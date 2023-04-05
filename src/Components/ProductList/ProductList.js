import { useState } from 'react';
import Products from './Products'



function ProductList(props){
  
    return(
        <div className='row'>
    <div className='col-lg-8 mx-auto'>
    <ul className="list-group shadow mb-3">

        {props.newList.map((product)=>
        {
    return    <Products
 id={product.pID}
 pName={product.pName}
 desc={product.desc}
 isAvailable={product.isAvailable}
 image={product.image}
 price={product.price}
 ></Products>
        })
        }
       
    </ul>
    </div>
        </div>);
    
}

export default ProductList;