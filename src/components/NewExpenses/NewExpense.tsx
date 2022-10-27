import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props: any) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData: any) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
    }

    const onStartEditing = (event: any) => {
        return setIsEditing(true)
    }

    const onCancelHandler = (event: any) => {
        return setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={onStartEditing}>Add New Expense</button>}
            {isEditing && <ExpenseForm onCancel={onCancelHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    )
}

export default NewExpense