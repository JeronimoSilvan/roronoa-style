
//import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, settItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();


    //llamada desde JSON
    /*  useEffect(() => {
          const promesa = new Promise(resolve => {
              setTimeout(() => {
                  resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
              }, 2000);
          })
          promesa.then(data => {
              settItems(data);
          })
      }, [id]);*/


    // subimos los productos a "items"
    /*useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        arrayProductos.forEach(producto => {
            addDoc(itemsCollection, producto);
        });
        console.log("proceso finalizado")
    }, []) */

    // llamamos a los productos desde firestore
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const consulta = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(consulta).then(resultado => {
            setLoading(false);
            settItems(resultado.docs.map(producto => ({ id: producto.id, ...producto.data() })));
        })

    }, [id]);

    return (
        <>
            {loading ? <Loading /> : <ItemList items={items} />}
        </>



    )

}

export default ItemListContainer;