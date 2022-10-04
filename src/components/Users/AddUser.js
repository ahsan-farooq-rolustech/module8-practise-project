import React from 'react'
import Card from './../Ui/Card';
import classes  from './AddUser.module.css'


const AddUser = (props) => {

  const addUserHandler=(event)=>
  {
    event.preventDefault()
  }

  return (
    <Card className={classes.input}>
        <form  onSubmit={addUserHandler} className='input'>
        <label htmlFor='username'>UserName</label>
            <input id='username' type='text'/>
            <label htmlFor='age'>Age (Years)</label>
            <input id='age' type='number'/>
            <button type='submit'>Add User</button>
        </form>
    </Card>
  )
}

export default AddUser