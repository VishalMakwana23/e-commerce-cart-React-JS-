import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Product from './component/Product'
import Cart from './component/Cart'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([
    {
      id: 3,
      img: "https://i.ibb.co/YLrm7px/img3.jpg" ,
      title: 'Apple 12',
      qty: 1,
      price: 69000,

  },
  
  ])
  const [product, setProduct] = useState([

      {
          id: 1,
          img:"https://i.ibb.co/WgXXdJz/img1.jpg",
          title: 'Apple 11 Pro',
          qty: 0,
          price: 49000,

      },
      {
          id: 2,
          img: "https://i.ibb.co/NLDds7d/img2.jpg",
          title: 'Apple 12 Mini',
          qty: 0,
          price: 59000,

      },
      {
          id: 3,
          img: "https://i.ibb.co/YLrm7px/img3.jpg" ,
          title: 'Apple 12',
          qty: 0,
          price: 69000,

      },
      {
          id: 4,
          img:"https://i.ibb.co/QPJsGRy/img4.jpg" ,
          title: 'Apple 12 pro',
          qty: 0,
          price: 79000,

      },
      {
          id: 5,
          img:"https://i.ibb.co/9tnZzKF/img5.jpg",
          title: 'Apple 13 Mini ',
          qty: 0,
          price:  89000,

      }
  ]);

// Add product

const addCart = (prod) => {
  const id = Math.floor(Math.random() * 10000) + 1;
  const newProd = {id, ...prod };
  setCart([...prod,newProd])

}


  return (
    <>
      <Product product={product} onAdd={addCart}/>
      {cart.length > 0 ? (
        <Cart cart={cart} />
      ) : (
        "No Product in Cart"
      )}
      
      
    </>
  );
}

export default App;
