import React, { useState } from "react";
import Button from "./Button";




function ProductDetails(props){

//    the useState hook


let [productCount,updateCount]=useState(0)
    

    function displayFormatedCount(){
        return productCount>0?productCount:"zero";
    }

    let badgeClass='badge badge-margin-left-240 ';
    badgeClass+=props.isAvailable?'bg-success':'bg-danger';

    // decrement event handler
     let decrementFunc=function(){
        // productCount--;
        // console.log(productCount);
        updateCount(--productCount);
    };

    // increment event handler
    let incrementFunc=function(){
        // productCount++;
        // console.log(productCount);
        updateCount(++productCount);

    };
    return(
        <div  className="d-flex align-items-center justify-content-start mt-1" >
        <h6 className="font-weight-bold my-2" style={{marginRight:30}}>${props.price}</h6>
     <Button eventHandler={decrementFunc} >-</Button>
        <span style={{padding:'0px 20px','font-size':13}}> {displayFormatedCount()}</span>
      <Button eventHandler={incrementFunc} >+</Button>
        <span className={badgeClass}>{props.isAvailable?"Availablee":"Unavailable"}</span>
    

    </div>
    );

    // return(
    //     React.createElement('div',{className:'d-flex align-items-center justify-content-start mt-1'},
    //     React.createElement('h6',{className:'font-weight-bold my-2',style:{marginRight:30}},'$'+props.price),
    //     React.createElement(Button,{},'-'),
    //     React.createElement('span',{style:{padding:'0px 20px',fontSize:13}},displayFormatedCount()),
    //     React.createElement(Button,{},'+'),
    //     React.createElement('span',{className:badgeClass},''+props.isAvailable?"Availablee":"Unavailable")
    //     )
    // );
}

export default ProductDetails;