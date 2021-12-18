import React from 'react'
import ItemCard from './ItemCard'


const Home = ({product,onAdd}) => {
    return (
        <>
            <h1 className='text-center'>All items</h1>

            <section className='py-4 container'>
                <div className='row justify-content-center'>
                {product.map((prod) => (

                      <ItemCard 
                      key={prod.id}
                      prod={prod}
                      />   

                ))}
                   
                </div>
            </section>
        </>
    )
}

export default Home
