import React from 'react'
import "./Products.css"
import data from '../data'
import {Link} from 'react-router-dom'
function Products() {

  return (
    <div className="prod">
      {data.products.map((d) => (
        <div className="prod-card">
          <img src={d.image} alt="#" />
          <h3>{d.name}</h3>
          <h2>Rs.{d.price}/-</h2>
          <p>{d.description}</p>
          <Link className="btn nav-reg" to={`/product/${d.id}`}>
            Buy the Product
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products