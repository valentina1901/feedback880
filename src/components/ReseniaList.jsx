import Resenia from "./Resenias"

const ListR = ( { listaresenias, deleteResenia } ) => {
    
    //CONDICIONAL EN CASO DE QUE NO LLEGUE EL ARREGLO
    if(!listaresenias || listaresenias.length === 0 ){
      return <h2>No hay reseñas para listar</h2>
    }else{
                return (
                    <div className="feedback-list">
                        { /*RECORRER LISTADO DE RESEÑAS*/ }
                        { listaresenias.map((resenia)=>
                            (
                            /*<div className="card">
                                {resenia.id}
                                {resenia.rating}
                                {resenia.text}
                            </div>*/
                            <Resenia 
                                deleteResenia={ deleteResenia }
                                key={ resenia.id }
                                resenia={ resenia } />
                            )
                        )
                        }
                    </div>
                )
            }
         }

export default ListR