import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import expensesSelector from '../selectors/expenses';
import { getTotalExpenses } from '../selectors/expenses-total';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {

    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses' ;
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');

    return (
        <div> 
            <p>Viewing {expensesCount} {expenseWord} totalling {formattedExpensesTotal}</p>
        </div> 
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = expensesSelector(state.expenses, state.filters);
    const total = getTotalExpenses(visibleExpenses);

    return {
        expensesTotal : total,
        expensesCount : visibleExpenses.length
    };
};

export default connect(mapStateToProps)(ExpensesSummary);