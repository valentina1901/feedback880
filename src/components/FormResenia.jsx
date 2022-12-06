// import '../index.css';
import Rating from './Rating';
import { useState } from "react"

const FormResenia=({addResenia})=>{

    //ESTADOS PARA RATING Y TEXTO
    const[rating, setRating]=useState(10)
    const[text, setText]=useState('')

    //metodo para cambiar estado del texto
    const cambiarTexto= (e) => {
        setText(e.target.value)
    }

    //console.log(cambiarTexto)

    //METODO PARA CONTROLAR EL SUBMIT
    const controlSubmit = (e)=>{
        e.preventDefault()
        //CREAR OBJETO RESEÑA
        let newResenia = {
            rating,
            text
        }
        
        //AÑADIR NUEVA RESEÑA AL ARREGLO
        // console.log(newResenia)
        addResenia(newResenia)
    }


    return(
        <div className='card'>
            <form onSubmit={ controlSubmit } >
                <h1>Registrar Nueva Reseña</h1>
                <h2>Cómo calificarias este cursillo?</h2>

                <h4>Comentario *</h4>
                <br></br>
                <div className="input-group">
                    <input
                        type="text" 
                        placeholder="Escriba aqui su comentario" 
                        onChange={ cambiarTexto }
                        />   
                </div>

                <br></br>
                <h4>Calificación *</h4>
                <Rating 
                       setRating={setRating} />
                       
                <button className='btn' type="submit">
                    Registrar
                </button>

            </form>
        </div>
    )
}

export default FormResenia