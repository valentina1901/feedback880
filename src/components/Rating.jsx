import { useState } from "react"

const Rating = ({ setRating }) =>{

    //ESTADO DE LA NOTA
    const[nota, setNota] = useState(1)

    const cambiarNota = (e) => {
        setNota( +e.currentTarget.value )
        setRating( +e.currentTarget.value )
    }

    //console.log(nota)

    return(
        <ul className="rating">
            {[1,2,3,4,5,6,7,8,9,10].map((numero)=>(
                  <li key={numero} >
                  <input  
                          id={numero} 
                          type="radio"
                          name="rating" 
                          value={numero}
                          onChange={ cambiarNota }
                          checked={ numero === nota }
                          />

                         <label htmlFor={numero} >
                            {numero}
                         </label>
                 </li>
                ))
            }
         
        </ul>
    )
}

export default Rating