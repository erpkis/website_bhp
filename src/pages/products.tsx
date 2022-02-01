import React from 'react';
import ProductsList from "../components/ProductsList";


const DUMMY_PRODUCTS = [{
    id: '1',
    text: 'BHP',
    price: '20 zł',
    date: '01.02.2022'
},{
    id: '2',
    text: 'Księgoznastwo',
    price: '15 zł',
    date: '04.04.2022'
},{
    id: '3',
    text: 'RODO',
    price: '10 zł',
    date: '03.03.2022'
},{
    id: '4',
    text: 'Test',
    price: '40 zł',
    date: '05.05.2022',
},

]

const products = DUMMY_PRODUCTS.map(product => (
    <ProductsList key={product.id} id={product.id} text={product.text} price={product.price} date={product.date}/>
))

const Products = () => {
    return (
        <ul>
            {products}
        </ul>
    );
};

export default Products;