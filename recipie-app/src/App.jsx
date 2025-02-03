import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './main.css'
import ClaudeRecepie from './ClaudeRecepie'
import IngredientsList from './IngredientsList'




export default function App() {
  const [ingredient, setIngredient] = React.useState([])

  const recepie = ingredient.map(thing => (
    <ul key={thing}>  
    <li>{thing}</li>
    </ul> 
    ))  


const [recepieShown, setRecepieShown] = React.useState(false)

//change button text dynamicaly
let btnText
recepieShown ? btnText="Hide recepie" : btnText="Get recepie";

function showRecepie(){
  setRecepieShown(prevstate => !prevstate)
}

function handleSubmit(event){  
 event.preventDefault()
   const formEl = event.currentTarget
    const formData = new FormData(formEl)  
    const spice = formData.get("ingredientName")

     setIngredient(prevIngredient => [...prevIngredient, spice])           
    }


  return (
    <>
    <main>
    <section>
      <div className='header'>
        <img className='headerIcon' src="./src/assets/react.svg"/>
        <h2>Chef's co-pilot</h2>
      </div>
    <form className='entry' onSubmit={handleSubmit} >
      <div className='entryEl'>
      <input name="ingredientName" type='text' placeholder='e.g capcicum' required/>
      <button type='submit' >Add ingredient</button>
      </div>
    </form>

    <IngredientsList 
    list={recepie}/>
   

     {recepie.length > 3 ? 
    <div className='getRecipie'>
      <div>
      <h3>Are you ready to get a recepie?</h3>
      <p>Click the button to generate a recepie.</p>
    </div>
    <button type='submit' onClick={showRecepie}>{btnText}</button>
    </div> : null }
    

    </section>
    {recepieShown && <ClaudeRecepie/>}

</main>
    </>
  )
}



//other alternative functions and practices 


 /*
  const [isFavourite, setIsFavourite] = React.useState(false)
  let likeicon = isFavourite? "./public/red.png" : "./public/white.png"

function handleLike(){
        setIsFavourite(prevfav =>{
          return (
            !prevfav
     //isFavourite? !isFavourite : !prevfav.isFavourite
          
    )}
  )
 }       

 
const [favouriteItems, setFavouriteItems] = React.useState([])

const myItems = favouriteItems.map(item => <p key={item}>{item} </p>)

function additems(){
 
  setFavouriteItems(prevItem => [...prevItem, "added item!"]) 
  
}


  const [ingredient, setIngredient] = React.useState([])
  const recepie = ingredient.map(spice => <p key={spice}>{spice}</p>)

function addIngredient(){
  setIngredient(prevIngredient => [...prevIngredient, "added!!"])
}

*/



/*
const [ingredient, setIngredient] = React.useState(["chicken","papper"])
const recepie = ingredient.map(thing => (
                                  <ul key={thing}>  
                                  <li>{thing}</li>
                                  </ul> 
                                  ))
/*
function signup(formData){
 /*
  const spice = formData.get("ingredientName")

  setIngredient(prevIngredient => [...prevIngredient, spice])
  
  console.log("function is being excecuted!!")
  
}
  */   


 
