import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import React from 'react'



export default function App() {
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
function handleSubmit(event){  
event.preventDefault()
  const formEl = event.currentTarget
  const formData = new FormData(formEl)


   setIngredient(prevIngredient => [...prevIngredient, spice])
}





const [ingredient, setIngredient] = React.useState([])
const recepie = ingredient.map(thing => <ul key={thing}><li>{thing}</li></ul>)
*/
function submition(formData){
  
  const spice = formData.get("ingredientName")
  console.log(spice)

/*
  setIngredient(prevIngredient => [...prevIngredient, spice])
  console.log(recepie)
*/  
}
     
  return (
    <>
    <main>
      <div className='header'>
        <img className='headerIcon' src="./src/assets/react.svg"/>
        <h2>Chef's co-pilot</h2>
      </div>
    <form action={submition} >
      <input name="ingredientName" type='text' placeholder='e.g capcicum'/>
      <button type='submit'  name='Add'>Add ingredient</button>
    </form>
    

    </main>



    
    </>
  )
}

