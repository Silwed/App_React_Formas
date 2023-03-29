import { useContext } from "react";
import { LibroContext } from "./LibroContext";

export const useLibro = ()=>{
    return useContext(LibroContext);
}
