import React from 'react'
import AvailableMeals from './AvailableMeals'
import MealSummery from './MealSummery'

const Meal = () => {
  return <React.Fragment>
    <MealSummery/>
    <AvailableMeals/>
  </React.Fragment>
}

export default Meal
