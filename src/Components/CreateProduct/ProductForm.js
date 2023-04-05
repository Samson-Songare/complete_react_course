import React,{ useState } from "react"
// this is the Component function
function ProductForm(props){

let[pName,updateName] =useState('');
let[pPrice,updatePrice] =useState('');
let[pAvailable,updateAvailability] =useState('');
let[pImage,updateImage] =useState('');
let[pDescription,updateDescription] =useState('');

//    let[userInput,updateUserInput] =useState({
//     pName:'',
//     pPrice:'',
//     pAvailable:'',
//     pImage:'',
//     pDescription:''
// });
    function nameInputHandler(event){
        // updateUserInput({  ...userInput,    pName:event.target.value });
        // updateUserInput((prevState)=>{
            //     return {...prevState,pName:event.target.value}
            // })
            updateName(event.target.value);
    }
    
    function priceInputHandler(event){
        // updateUserInput({  ...userInput,    pPrice:event.target.value });
        updatePrice(event.target.value);
    }
    function availabilityInputHandler(event){
        // updateUserInput({  ...userInput,    pAvailable:event.target.value });
        updateAvailability(event.target.checked);
    }
    function imageInputHandler(event){
        // updateUserInput({  ...userInput,    pImage:event.target.value });
        updateImage(event.target.value);
    }
    function descriptionInputHandler(event){
        // updateUserInput({  ...userInput,    pDescription:event.target.value });
        updateDescription(event.target.value)
    }

    function createProductEventHandler(event){
event.preventDefault();
let product={
    pID: 1, 
    pName: pName, 
    desc:pDescription,
    isAvailable: pAvailable,
    image: pImage,
    price: Number(pPrice)
}
//    console.log(product);
// call the the createProduct function from CreateProduct Component
props.createProduct(product);
   updateName('');
   updateDescription('');
   updateImage('');
   updatePrice('');
   updateAvailability("")
    }
    return (
<form className="row g-3" onSubmit={createProductEventHandler}>
        <div className="col-md-6">
            <label for="name">Product Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Product Name" 
                    onChange={nameInputHandler}
                    value={pName}
                   />
        </div>
        <div className="col-md-6">
            <label for="price">Product Price</label>
            <input type="number" 
                    min="0.01" step="0.01" 
                    className="form-control" 
                    id="price" 
                    placeholder="Product Price" 
                    onChange={priceInputHandler}
                    value={pPrice}
                    />
        </div>

        <div className="form-group">
            <label for="description">Product Description</label>
            <input type="text" 
                    className="form-control" 
                    id="description" 
                    placeholder="Product Description" 
                    onChange={descriptionInputHandler}
                    value={pDescription}
                    />
        </div>

        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="isAvailable"  onChange={availabilityInputHandler} checked={pAvailable} />
            <label class="form-check-label" for="isAvailable">Is product available in stock?</label>
        </div>

        <div className="form-group">
            <label for="select-image">Select product image</label>
            <input type="file" className="form-control" id="select-image"   onChange={imageInputHandler} value={pImage} />
        </div>
        

        <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
    );
}

export default ProductForm;