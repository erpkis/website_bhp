import React from 'react';
import {Link} from "react-router-dom";
import classes from './ProductItem.module.css'

//Funkcja zmieniająca date z formatu YY-MM_DD na DD-MM-YY
const formatDate = (date: Array<String>) => {
    const days = date[date.length-2].toString() + date[date.length-1].toString();
    const months = date[date.length-5].toString() + date[date.length-4].toString();
    const year = date[0].toString() + date[1].toString() + date[2].toString() + date[3].toString()
    const fullDate = days + '-' + months + '-' + year
    return fullDate
}


const ProductItem: React.FC<{id: Number, text: String, price: Number, date: Date}> = (props) => {

    const formatedDateArray = props.date.toString().substring(0,10).split('')
    const date = formatDate(formatedDateArray)
    const formatedPrice = props.price.toFixed(2)


    return (
        <div className={classes.list}>
            <li className={classes.product}><Link to={`/products/${props.id}`}>
                <div>x</div>
                    <h2>Nazwa: {props.text}</h2>
                    <h3>Cena: {formatedPrice}zł</h3>
                    <h4>Data publikacji: {date}</h4>

            </Link></li>
        </div>

    );
};

export default ProductItem;