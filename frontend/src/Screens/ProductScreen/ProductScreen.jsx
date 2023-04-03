import axios from 'axios';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToCart } from '../../features/cartSlice';
import './ProductScreen.css'
import { addProduct, removeItem } from '../../features/wishlistSlice';


const ProductScreen = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [product , setProduct] = useState();
  const wishlist = useSelector((state)=>state.wishList);
  const [slectedType,setSelectedType] = useState({
    size:"",price:""
  });
  const params = useParams();
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }
// console.log(params.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getProduct = () =>{
    axios.get(`http://localhost:3001/api/product/${params.id}`)
    .then((res)=>{
      // console.log(res.data.product)
      setProduct(res.data.product[0]);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  useEffect(()=>{
    getProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleTypeChange = (size,price) =>{
    setSelectedType({size,price})
  }
  
  
  const handleAddToCart = (product) =>{
    // setProduct({
    //   ...product,
    //   SelectedSize: slectedType
    // })
    if(product.Types.length === 1){
      // setSelectedType(product.Types[0].size)
      product.SelectedSize = product.Types[0].size
      product.price = product.Types[0].price
      // console.log("type clicked")
    }else{

      product.SelectedSize = slectedType.size;
      product.price = slectedType.price
    }

    if(product.SelectedSize){
      if(product.price>400){
        product.points = product.price * (2/100)
      }else{
        product.points = 0
      }
      // console.log(product);
      dispatch(addToCart(product))
      navigate("/cart");
    }else{
      toast.error("select size")
      // alert("select size")
    }
  }
  // console.log(wishlist)
  return (
    
    <div className="container my-3">
      <ScrollToTopOnMount />
      {
        product ? 

        <div className="card details-card p-0">
            <div className="row">

                <div className="col-md-6 col-sm-12">
                    <img className="img-fluid details-img" src={product.Image.url} alt="" />
                </div>
                <div className="col-md-6 col-sm-12 description-container p-5">
                    <div className="main-description">
                        <p className="product-category mb-0">{product.ProductBrand}</p>
                        <h3>{product.ProductName}</h3>
                        <hr />
                        <div className='product-types'>
                          {
                            
                            product.Types.map((type) =>(
                              <div className='product-type' key={type.size} onClick={()=>{handleTypeChange(type.size,type.price)}}>
                                <p>{type.size}{type.unit}</p>
                                <p>Rs. {type.price}</p>
                              </div>
                            ))
                          }
                        </div>
                        {
                          product.Types.length >1 ?
                          product.Types.map((type)=>(
                            (type.size) === slectedType.size ?<p key={type.size} className='product-price'>Rs. {type.price} /-</p> : <></>
                          )) :
                          <p className='product-price'>Rs. {product.Types[0].price} /-</p>
                        }
                        {/* <p className="product-price">Rs. {product.Types[0].price}  /-</p> */}
                        <div className="add-inputs">
                            {/* <input type="number" className="form-control" id="cart_quantity" name="cart_quantity" value="1"  /> */}
                            
                            <button name="add_to_cart" type="submit" className="btn btn-dark btn-lg" onClick={()=>{handleAddToCart(product)}}>Add to cart</button>
                        </div>
                        <div className="add-inputs">
                          {
                            wishlist.wishlist.length >0 ?(

                            <>
                            {
                              (wishlist.wishlist.some((obj)=>obj._id===product._id))? 
                              <button name="add_to_cart" type="submit" className="btn btn-outline-dark btn-lg"onClick={()=>dispatch(removeItem(product))}>Remove from Wishlist</button>
                              :<button name="add_to_cart" type="submit" className="btn btn-outline-dark btn-lg"onClick={()=>dispatch(addProduct(product))}>Add to Wishlist</button> 

                            }
                            </>
                            ):<button name="add_to_cart" type="submit" className="btn btn-outline-dark btn-lg"onClick={()=>dispatch(addProduct(product))}>Add to Wishlist</button> 

                            //   wishlist.wishlist?.map((list)=>(
                            //     (list._id===product._id)? <button name="add_to_cart" type="submit" className="btn btn-outline-dark btn-lg"onClick={()=>dispatch(removeItem(product))}>Remove from Wishlist</button>:<button name="add_to_cart" type="submit" className="btn btn-outline-dark btn-lg"onClick={()=>dispatch(addProduct(product))}>Add to Wishlist</button>
                            //     ))
                            //     ):
                            // <button name="add_to_cart" type="submit" className="btn btn-outline-dark btn-lg"onClick={()=>dispatch(addProduct(product))}>Add to Wishlist</button> 
                          }
                        </div>
                        <div style={{clear:"both"}}></div>
                        <hr/>


                        <p className="product-title mt-4 mb-1">About this product</p>
                        <p className="product-description mb-4">
                            {product.Description}
                        </p>

                        <hr/>

                        {/* <p className="product-title mt-4 mb-1">Share this product</p>
                        <ul className="social-list">
                            <li><a href="/"><i className="fa-brands fa-facebook" /></a></li>
                            <li><a href="/"><i className="fa-brands fa-twitter" /></a></li>
                            <li><a href="/"><i className="fa-brands fa-square-instagram" /></a></li>

                        </ul> */}






                    </div>



</ div>
                </div>
            </div>
        :
        <h1>No such product available</h1>
      }

        </div>
  )
}

export default ProductScreen
