
import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [items, settItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 2000);
        })
        promesa.then(data => {
            settItems(data);
        })
    }, [id]);

    return (
        <>
        <ItemList items={items} />
        </>
        
       

    )

}

export default ItemListContainer;