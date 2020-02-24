import React from 'react';

export const getTotalExpenses = (expenses) => {
    return expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);
    //return total;
};

export const getExpensesCount = (expenses) => expenses.length;