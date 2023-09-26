import React from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Paw Bhaji',
      description: 'Finest veggies and soft paw',
      price: 50.99,
    },
    {
      id: 'm2',
      name: 'Masala Dosa',
      description: 'An South-Indian specialty!',
      price: 40.5,
    },
    {
      id: 'm3',
      name: 'Aaloo Paratha',
      description: 'Potato wheat bun recipie',
      price: 60.99,
    },
    {
      id: 'm4',
      name: 'Palak Paneer',
      description: 'Healthy...and green...',
      price: 90.99,
    },
  ]; 
const AvailableMeals = () => {
    const mealsList=DUMMY_MEALS.map(meal=><MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);
  return (
    <section className={classes.meals}>
      <Card>
      <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
