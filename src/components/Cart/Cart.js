import React from 'react'

import classes from './Cart.module.css'
import Modal from '../UI/Modal'
const Cart = (props) => {
    const cartItem=<ul className={classes['cart-items']}>{[{id:1, name:'paw Bhaji', amount:2, price:50.99}].map((item)=><li>{item.name}</li>)}</ul>
  return <Modal>
      {cartItem}
      <div className={classes.total}>
        <span>Total</span>
        <span>₹90.8</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button-alt']}>close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal> 
}

export default Cart

