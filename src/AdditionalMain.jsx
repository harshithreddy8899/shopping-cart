import Checkout from "./Checkout";
import React from "react";
import ReactDom from 'react-dom/client';
import App from './App';
import { useState } from "react";

const AdditionalMain=({value})=>{
    const [quanityImageArray, setQuanityImageArray] = useState(Array(12).fill([]));

    const updateQuantityImageArray = (index, data) => {
        setQuanityImageArray((prevArray) => {
        const newArray = [...prevArray];
        newArray[index] = data;
        return newArray;
        });
    };
    if(value==0){
        console.log(quanityImageArray);
        return(<App quanityImageArray={quanityImageArray} updateQuantityImageArray={updateQuantityImageArray}/>);
    }
    else if(value==1){
        console.log(quanityImageArray);
        return(<Checkout quanityImageArray={quanityImageArray}/>)
    }
    else{
        return (<></>);
    }

}

export default AdditionalMain;