import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props: any) => {
    // const [enteredTitle, setEnteredTitle] = useState('')
    const [UserInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (event: any) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value }
        })
    }

    const AmountChangeHandler = (event: any) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: event.target.value }
        })
    }

    const DateChangeHandler = (event: any) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value }
        })
    }

    const SubmitHandler = (event: any) => {
        event.preventDefault();

        const ExpenseData = {
            title: UserInput.enteredTitle,
            amount: +UserInput.enteredAmount,
            date: new Date(UserInput.enteredDate)
        }

        props.onSaveExpenseData(ExpenseData);

        setUserInput(() => {
            return {
                enteredTitle: '',
                enteredAmount: '',
                enteredDate: ''
            }
        })
    }

    return <form onSubmit={SubmitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={UserInput.enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={UserInput.enteredAmount} min='0' step='1' onChange={AmountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={UserInput.enteredDate} onChange={DateChangeHandler} />
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm