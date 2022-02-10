import React from 'react';
import {Link} from "react-router-dom";



const ProductsList: React.FC<{id: Number, text: String, price: Number, date: Date}> = (props) => {



    return (
        <li><Link to={`/products/${props.id}`}>{props.text} {props.date} {props.price}
        </Link></li>
    );
};

export default ProductsList;