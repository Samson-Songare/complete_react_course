import ProductForm from "./ProductForm";

function CreateProduct(props){

  function  createProductHandler(product){
    //   console.log(product)
    props.createProduct(product);
    }

    return (
<div className="row">
    <div className="col-lg-8 mx-auto  mb-4 p-3" style={{background:'white'}}>
      <ProductForm createProduct={createProductHandler}></ProductForm>
    </div>
</div>
    );
}

export default CreateProduct;
