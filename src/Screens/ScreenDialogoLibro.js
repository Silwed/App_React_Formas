import { FormGroup, Modal, ModalBody, ModalFooter, ModalHeader,Button } from "reactstrap";
import { useForm } from "react-hook-form";
import { useLibro } from "../Hooks/useLibro";

export function ScreenDialogoLibro() {

    const {lsLibros, setLsLibros, Guardar, libroSeleccionado} = useLibro();
    const {estadoDialogo, setEstadoDialogo} = useLibro();

    console.log(libroSeleccionado);

   

    const {register, handleSubmit, setValue} = useForm({
        shouldUseNativeValidation : true,
        defaultValues: libroSeleccionado,
    });

    if (libroSeleccionado != null) {
        setValue("autor", libroSeleccionado.Data.autor);
        setValue("categoria", libroSeleccionado.Data.categoria);
        setValue("codigo", libroSeleccionado.Data.codigo);
        setValue("existencia", libroSeleccionado.Data.existencia);
        setValue("precio", libroSeleccionado.Data.precio);
        setValue("titulo", libroSeleccionado.Data.titulo);
    }  
const onSubmit = (data, e) =>{
    Guardar(data, libroSeleccionado.Id);
}

let codigolib = ''
codigolib = (lsLibros.length < 9) ?  `LB-0${lsLibros.length+1}` : `LB-${lsLibros.length+1}`

return(
    <Modal isOpen={estadoDialogo}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>
            <div>
                <h2>Dialogo Libro</h2>
            </div>
        </ModalHeader>
        <ModalBody>
            <FormGroup>
                <label >Codigo : </label>
                <input type="text"  className="form-control" placeholder="ej: LB-00;" {...register('codigo',{required:true})}/>
            </FormGroup>
            <FormGroup>
                <label >Titulo : </label>
                <input type="text" className="form-control" placeholder="ej: La Carrosa;" {...register('titulo',{required:true})}/>
            </FormGroup>
            <FormGroup>
                <label >Autor : </label>
                <input type="text" className="form-control" placeholder="ej: Clark ken;" {...register('autor',{required:true})}/>
            </FormGroup>
            <FormGroup>
                <label >Categoria : </label>
                <input type="text" className="form-control" placeholder="ej: Novela" {...register('categoria',{required:true})}/>
            </FormGroup>
            <FormGroup>
                <label >Existencia : </label>
                <input type="number" className="form-control" placeholder="ej: 00" {...register('existencia',{required:true})}/>
            </FormGroup>
            <FormGroup>
                <label >Precio : </label>
                <input type="number" className="form-control" placeholder="ej: 0.00" {...register('precio',{required:true})}/>
            </FormGroup>
        </ModalBody>
        <ModalFooter>
        <Button type="submit">Aceptar</Button>    
        <Button onClick={() => Guardar(null)}>Cerrar</Button>
        </ModalFooter>
        </form>
    </Modal>
);
}