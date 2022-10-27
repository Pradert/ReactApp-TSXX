import React from 'react'
import ExpenseItem from './ExpenseItem'

function ExpensesList(props: any) {
    const labelStyle = {
        color: 'white'
    }

    if (props.items.length === 0) {
        return <h2 style={labelStyle}>No expenses found.</h2>
    }

    return (
        <div>
            {props.items.map((item: any) =>
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            )}
        </div>
    );
}

export default ExpensesList