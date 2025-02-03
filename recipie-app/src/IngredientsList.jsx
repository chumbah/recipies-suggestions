import React from "react"

export default function IngredientsList(props){
  
     return( 
         <div className='ingredients'>
         
         {props.list.length===0 ? <h2>Enter a minimum of 4 ingredients for a recepie!</h2>: null}
         {props.list.length > 0 ? <h3>These are your ingredients:{props.list}</h3> :null }
              </div> 
   
    )
}