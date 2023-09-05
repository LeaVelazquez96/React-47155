import {useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = ()=>{

    const [item,setItem] = useState(null);
    const [isLoading, setIsLoading] = useEffect(true);
    const {id} =useParams();


    useEffect(()=>{
        getProduct(id).then((response)=>{
            setItem(response);
        })
        .catch((error)=> {
            console.error(error);
            setItem(null);
        })
        .finally(()=>{
            setIsLoading(false);
        } )
    },[id]);

    return <ItemDetail item={item} isLoading={isLoading} />;
};
export default ItemDetailContainer;