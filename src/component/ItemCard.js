import React from 'react'
import { useState } from 'react';
const ItemCard = ({prod, onAdd}) => {

  
    
    return (
    
             <div className="col-12 col-md-2 col-lg-2 mx-0 mb-6">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={prod.img} className="card-img-top img-fluid" alt="..." />
                <div className ="card-body text-center">
                <h5 className ="card-title">{prod.title}</h5>
                <h5 className ="card-text">₹ {prod.price}</h5>
                <button className ="btn btn-success" >Add to Cart</button>
                </div>
            </div>
        </div>
    
       
    )
}

export default ItemCard
