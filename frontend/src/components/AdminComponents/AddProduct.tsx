import React, {useRef, useState} from 'react';
import axios from "axios";
import classes from './AddProduct.module.css'


// todo walidacja lepsza produktów


const AddProduct = () => {

    const [formValidated, setFormValidated] = useState(true)
    const nameRef = useRef<HTMLInputElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)
    const dateRef = useRef<HTMLInputElement>(null)


    const formSubmited = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const name = nameRef.current!.value;
        const price = priceRef.current!.value;
        const date = dateRef.current!.value;
        if(name.trim() === '' || price.trim() === '' || date.trim() === ''){
            setFormValidated(false)
        }
        else{
            axios.post('http://localhost:3001/api/insert', {
                name,
                price,
                date
            }).catch((error) => {
                console.log(error)
            })

        }
        nameRef.current!.value = ''
        priceRef.current!.value = ''
        dateRef.current!.value = ''

    }

    return (
        <div className={classes.form}>
            <form onSubmit={formSubmited}>
                <label htmlFor="name">Nazwa produktu</label><br />
                <input ref={nameRef} id="name" type="text"/><br />
                <label htmlFor="price">Cena</label><br />
                <input ref={priceRef} id="price" type="number"/><br />
                <label htmlFor="date">Data</label><br />
                <input ref={dateRef} id="date" type="date"/><br />
                <button>Prześlij</button>
                {!formValidated && <p>Podano nieprawidłowe wartości!</p>}
            </form>
        </div>

    );
};

export default AddProduct;