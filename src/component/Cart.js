import React from 'react'
import { useState } from 'react';
const Cart = ({cart}) => {

    






    const isEmpty = true;
    const totalUniqueItems = 0;
    const items = 0;
    const totalItems = 0;
    const carttotal = 0;

    const updateItemQuantity = 0;
    const removeItem = 0;
    const emptyCart = 0;
    return (
        
        <section className="py-4 container">
            <div className='row justify-content-center'>
                <div className="col-12">
                    <h5>Cart ({totalUniqueItems})  total Items: ({totalItems})</h5>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                        {cart.map((c) => (
                        <tr>
                        <td>
                            <img src={c.img} style={{height: '6rem'}}></img>
                        </td>
                        <td>{c.title}</td>
                        <td>{c.price}</td>
                        <td>{c.qty} </td>
                        <td>
                            <button className="btn btn-success ms-2">-</button>
                            <button className="btn btn-warning ms-2">+</button>
                            <button className="btn btn-danger ms-2">Remove Item</button>
                        </td>
                        </tr>  
                        ))}
                            
                            </tbody>
                    </table>
                </div>

                <div className="col-auto ms-auto  ">
                        <h2>Total Price: {carttotal}</h2>
                </div>
                <div className="col-auto">
                    <button className="btn btn-danger m-2">Clear</button>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>


        </section>
    )
}

export default Cart
