import { useEffect, useState } from "react";
//import arrayProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {  getFirestore, doc,  getDoc } from "firebase/firestore";
import Loading from "./Loading";


const ItemDetailContainer = () => {
    const [item, settItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    /* useEffect(() => {
         const promesa = new Promise(resolve => {
             setTimeout(() => {
                 let producto = arrayProductos.find(item => item.id === id);
 
                 resolve(producto);
             }, 2000);
         })
         promesa.then(data => {
             settItem(data);
             console.log(data);
         })
     }, [id]);*/


    // llamamos al producto desde firestore
    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "items", id);
        getDoc(producto).then(resultado => {
            setLoading(false);
            settItem({ id: resultado.id, ...resultado.data()});
        })

    }, [id]);


    return (
        <>
        {loading ? <Loading /> : 
        <ItemDetail item={item} /> }
        </>
    )
}

export default ItemDetailContainer;