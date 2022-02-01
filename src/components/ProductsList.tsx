import React from 'react';
import classes from './Product.module.css'
import {Link} from "react-router-dom";



const ProductsList: React.FC<{id: string, text: string, price: string, date: string}> = (props) => {



    return (
        <Link to={`/products/${props.id}`}>{props.text} {props.date} {props.price}
        </Link>
    );
};

export default ProductsList;