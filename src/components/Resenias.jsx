import { useState } from 'react'
//Dependecia Icons
import { FaTimesCircle } from "@react-icons/all-files/fa/FaTimesCircle";

const Resenia = ({ resenia, deleteResenia }) => {
    const [rating, setRating]=useState(resenia.rating)
    const [comments,
           setCommets]=useState(resenia.text)

    // //Sumar el estado de la Calificación
    // const agregarNota=()=>{
    //     setRating((prev)=>{
    //         return prev +1
    //     })
    // }

    // //Restar el estado de la Calificación
    // const restarNota=()=>{
    //     setRating((prev)=>{
    //         return prev -1
    //     })
    // }

    return (
        <div className="card">
            <div className="num-display">
               {rating}
            </div>
            <div className="text-display">
                {comments}
            </div>
            {/* <button className='btn' onClick={agregarNota}>
                Sumar Calificación
            </button>
            <button className='btn' onClick={restarNota}>
               Restar Calificación
            </button> */}
            <button onClick={()=> deleteResenia(resenia.id) } className='close'>
               <FaTimesCircle />
            </button>

            
        </div>
    )
}

export default Resenia