import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export class ExpenseList extends React.Component {
  
  /*
  componentDidMount(){
    this.props.updateCount(this.props.expenses);
    this.props.updateTotal(this.props.expenses);
  }
  */

  render(){
    return (
    <div>
      {
        this.props.expenses.length === 0 ? (
          <p>No expenses</p>
        ) : (
          this.props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )
      }
    </div>
  )};
}

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

/*
const mapDispatchToProps = (dispatch) => {
  return {
    updateCount : (expenses) => dispatch(setSummaryCount(getExpensesCount(expenses))),
    updateTotal : (expenses) => dispatch(setSummaryTotal(getTotalExpenses(expenses)))
  }
};
*/

export default connect(mapStateToProps)(ExpenseList);
