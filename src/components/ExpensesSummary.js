import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import expensesSelector from '../selectors/expenses';
import { getTotalExpenses } from '../selectors/expenses-total';

export const ExpensesSummary = ({expensesCount, expensesTotal, totalCount, overallTotal}) => {

    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses' ;
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
    const remaining = totalCount - expensesCount;
    const remainingExpenseWord = remaining === 1 ? 'expense' : 'expenses';
    const remainingTotal = numeral((overallTotal - expensesTotal)/100).format('$0,0.00');

    return (
        <div className="page-header">
            <div className='content-container'>
                <h1 className='page-header__title'>Viewing <span>{expensesCount}</span> {expenseWord} for <span>{formattedExpensesTotal}</span></h1>
                <div className='page-header__actions'>
                    <Link className="button" to='/create'>Add Expense</Link>
                    <span> {remaining} {remainingExpenseWord} not being viewed for {remainingTotal}</span>
                </div>
            </div> 
        </div> 
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = expensesSelector(state.expenses, state.filters);
    const total = getTotalExpenses(visibleExpenses);
    const overallTotal = getTotalExpenses(state.expenses);

    return {
        expensesTotal : total,
        expensesCount : visibleExpenses.length,
        totalCount: state.expenses.length,
        overallTotal
    };
};

export default connect(mapStateToProps)(ExpensesSummary);