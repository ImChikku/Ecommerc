import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../data';
import "./ProductScreen.css";
export default function ProductScreen(props){
  
  
  const {id}= useParams()
  

  console.log(data)
  const productId = id;

  const [qty,setQty] =useState(1);
   
    const product = data.products.find((x) => {return x.id === id});
    if(!product){
      return <div>Product Not Found</div>;
    }
   
      
    

    return (<div className='single-prod'>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li><Rating ratings={product.ratings}
            numReviews={product.numReviews}></Rating>
            </li>
            <li>Price : ${product.price}</li>
            <li>Description:<p>{product.description}</p></li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
          <ul>
            <li>
              <div className="row">
                <div>Price</div>
                <h2 className="price">${product.price}</h2>
              </div>
            </li>
            <li>
              <div className="row">
                <div>Status</div>
                <div>{product.countInStock > 0 ? (
                  <span className="success">In Stock</span>
                ) : ( 
                  <span className="error">Unavailable</span>
                )}
                </div>

              </div>
            </li>
            {
              product.countInStock> 0 &&(
                <>
            <li>
              <div className="row">
                <div>Qty</div>
                <div><select value={qty} onChange={e=>setQty(e.target.value)}>
                  {
                    [...Array(product.countInStock).keys()].map (x=>(
                      <option key={x+1}value={x+1}>{x+1}</option>
                    ))
                  }</select>
                </div>
              </div>
            </li>
              <li>
              <Link to={`/cart/${productId}/${qty}`} className="btn nav-reg" >Place your order</Link>
            </li>
            </>
              )
            }
            
          </ul>
        </div>
        </div>
      </div>
  </div>
    );
}