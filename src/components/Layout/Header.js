import React from 'react'
import classes from './Header.module.css'
import mealimg from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => 
{
  return <React.Fragment>

    <header className={classes.header}>
        <h1>Anam Restaurent</h1>
        <HeaderCartButton/>
    </header>

    <div className={classes['main-image']}>
        <img src={mealimg} alt="Food background" />
    </div>

  </React.Fragment>
}

export default Header
