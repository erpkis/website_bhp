import React, {useEffect, useState} from 'react';
import ProductsList from "../components/ProductsList";
import axios from "axios";

interface productsI  {
    id: number;
    name: String;
    price: Number;
    date: Date
}



const Products= () => {
    const [products, setProducts] = useState<productsI[]>([])


    useEffect(() => {

        axios.get('http://localhost:3001/products').then((response) => {
            const productsFetched = []
            for(const key in response.data){
                productsFetched.push({
                    id: +key,
                    name: response.data[key].name,
                    price: response.data[key].price,
                    date: response.data[key].date
                })
            }

            setProducts(productsFetched)

        })
    }, [])

   const displayProducts = products.map(product => (
        <ProductsList key={product.id} id={product.id} text={product.name} price={product.price} date={product.date}/>
    ))

    return (
        <ul>
            {displayProducts}
        </ul>
    );
};

export default Products;