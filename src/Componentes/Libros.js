import { useState, useEffect, Fragment } from "react";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import { ScreenListaLibros } from "../Screens/ScreenListaLibro";
import { ScreenDialogoLibro } from "../Screens/ScreenDialogoLibro";
import { LibroContext } from "../Hooks/LibroContext";


export function Libros(){
    
    const [lsLibros, setLsLibros] = useState([]);
    const [estadoDialogo, setEstadoDialogo] = useState(false);
    const [accion, setAccion] = useState(null);
    const [libroSeleccionado, setLibroSeleccionado] = useState(null);
  
  useEffect(()=>{
    const coleccionLibros = collection(db, "Libros") 
    console.log(coleccionLibros);
    getDocs(coleccionLibros).then(response =>{
      const ob =response.docs.map((doc)=>({
        Id : doc.id,
        Data : doc.data(),
      }))
      setLsLibros(ob);
    })
  }, []);
 
  const agregarLibro = (nuevoLibro) => {
    
    
    
    const coleccionLibros = collection(db, "Libros");
    addDoc(coleccionLibros, nuevoLibro)
    .then(response => {
      console.log(response);
      const nuevoOb = {
        Id : response._key.path.segments[1],
        Data : nuevoLibro,
      }
      setLsLibros([...lsLibros, nuevoOb]);
    })
    .catch(err => console.log(err));

    }
  
    const modificarLibro = (tmpLibro, id) => {

        const Item = {
          Id : id,
          Data : tmpLibro
        }
      const refLibros = doc(db, "Libros",id);
      updateDoc(refLibros, tmpLibro, id)
      .then(response => {
        console.log(response)
        setLsLibros(lsLibros.map((it) => (it.Id === id) ? Item : it ));
      })
      .catch(err => console.log(err));
      }  

      const eliminarLibro = (id)=> {
       
        const refLibro = doc(db, "Libros",id);
        deleteDoc(refLibro)
        .then(response => {
          console.log(response)
          setLsLibros(lsLibros.filter((it) => (it.Id !== id)  ));
        })
          .catch(err => console.log(err))
        alert("Registro eliminado");
      }

      const abrirDialogo = (accion, ob)=>{
        if (accion === 1) {
          setAccion(1)
          const objeto = { Id : "",
          Data : {
            autor :  "",
            categoria : "",
            codigo :  "",
            existencia : "",
            precio : "",
            titulo : ""
          }
           }
          setLibroSeleccionado(objeto);    

        } else {
          setAccion(2)
          setLibroSeleccionado(ob);
        }
        setEstadoDialogo(true)
      }

      const Guardar = (obj,id) => {
        if (obj === null) {
          // hizo cancelar
         
        } else {
          if (accion === 1) {
            agregarLibro(obj)  
          } else {
            modificarLibro(obj, id)
          }
          
        }
        setEstadoDialogo(false)
      }
      

  

  return (
    <div>
      <LibroContext.Provider value={{lsLibros, setLsLibros,
         estadoDialogo, setEstadoDialogo,
         abrirDialogo,
         Guardar,
         libroSeleccionado, setLibroSeleccionado,
         eliminarLibro}}>
      <ScreenListaLibros/>
      <ScreenDialogoLibro/>
      </LibroContext.Provider>
   
      
    </div>  
  );
}