import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './main.css'




export default function App() {

  const [ingredient, setIngredient] = React.useState([])
  const recepie = ingredient.map(thing => (
                                    <ul key={thing}>  
                                    <li>{thing}</li>
                                    </ul> 
                                    ))
  
  function handleSubmit(event){  
  event.preventDefault()
    const formEl = event.currentTarget
    const formData = new FormData(formEl)  
    const spice = formData.get("ingredientName")

     setIngredient(prevIngredient => [...prevIngredient, spice])
  }
  

const [recepieShown, setRecepieShown] = React.useState(false)
//change button text dynamicaly
let btnText
recepieShown ? btnText="Hide recepie" : btnText="Get recepie";

function showRecepie(){
  setRecepieShown(prevstate => !prevstate)
  
 

}

  return (
    <>
    <main>
    <section>
      <div className='header'>
        <img className='headerIcon' src="./src/assets/react.svg"/>
        <h2>Chef's co-pilot</h2>
      </div>
    <form className='entry' onSubmit={handleSubmit}>
      <div className='entryEl'>
      <input name="ingredientName" type='text' placeholder='e.g capcicum' required/>
      <button type='submit' >Add ingredient</button>
      </div>
    </form>
    {recepie.length === 0 ? <h2>Enter a minimum of 4 ingredients for a recepie!</h2> : null}
    {recepie.length > 0 ? <div>
     <div className='ingredients'>
      <h3>These are your ingredients:</h3>
    {recepie}
    </div>

      {recepie.length > 3 ?
    <div className='getRecipie'>
      <div>
      <h3>Are you ready to get a recepie?</h3>
      <p>Click the button to generate a recepie.</p>
    </div>
    <button type='submit' onClick={showRecepie}>{btnText}</button>
    </div> :null}
    </div> :null}

    </section>

    {recepieShown && <section>
    <h2>Chef Claude Recommends:</h2>
    <article className="suggested-recipe-container" aria-live="polite">
        <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
        <h3>Beef Bolognese Pasta</h3>
        <strong>Ingredients:</strong>
        <ul>
            <li>1 lb. ground beef</li>
            <li>1 onion, diced</li>
            <li>3 cloves garlic, minced</li>
            <li>2 tablespoons tomato paste</li>
            <li>1 (28 oz) can crushed tomatoes</li>
            <li>1 cup beef broth</li>
            <li>1 teaspoon dried oregano</li>
            <li>1 teaspoon dried basil</li>
            <li>Salt and pepper to taste</li>
            <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
        </ul>
        <strong>Instructions:</strong>
        <ol>
            <li>Bring a large pot of salted water to a boil for the pasta.</li>
            <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
            <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
            <li>Stir in the tomato paste and cook for 1 minute.</li>
            <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
            <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
            <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
            <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
            <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
        </ol>
    </article>
</section>}

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


 
