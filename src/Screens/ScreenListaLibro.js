import "bootstrap/dist/css/bootstrap.min.css"; 
import { Container,  Button} from 'reactstrap';
import Table from "react-bootstrap/Table";
import { useLibro } from "../Hooks/useLibro";
import "../Style.css";


export function ScreenListaLibros(){

    //const {lsLibros, setLsLibros} = props.lista;
    const {lsLibros, setLsLibros, abrirDialogo, eliminarLibro} = useLibro();

    //const {estadoDialogo, setEstadoDialogo} = props.estado;
     
    return(
    
        <Container>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Autor</th>
                        <th>Existencia</th>
                        <th>Precio</th>
                        <th>
                            <Button color="primary" onClick={()=>abrirDialogo(1,null)}>Agregar</Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (lsLibros.length > 0) ? (
                            lsLibros.map((it, idx) => (
                                <tr key={idx}>
                                    <td>{it.Data.titulo}</td>
                                    <td>{it.Data.autor}</td>
                                    <td>{it.Data.existencia}</td>
                                    <td>{it.Data.precio}</td>
                                    <td><Button color="secondary" onClick={()=>abrirDialogo(2,it)}>Editar</Button></td>
                                    <td><Button color="danger" onClick={()=>eliminarLibro(it.Id)} >Eliminar</Button></td>      
                                </tr>
                            ))
                        ) : (
                            <tr><td colSpan={3}>No hay registro</td></tr>
                        )
                    }
                </tbody>
            </Table>
        </Container>
    );



}