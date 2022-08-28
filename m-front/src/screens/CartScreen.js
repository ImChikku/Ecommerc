import React from "react";

import { useParams } from 'react-router-dom';

function CartScreen(props){
    const {id,qty}= useParams()
    const productId = id;
    console.log(useParams());
    console.log(productId);
    
    return(
        <div>
            <h1>CartScreen</h1>
            <p>AddTo Cart:ProductId{productId} Qty:{qty}</p>
        </div>
    );
}
export default CartScreen;