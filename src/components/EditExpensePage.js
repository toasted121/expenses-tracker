import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

//1) Refactor edit expense page to be a class based component this allows us to pull out the inline 
//method definitions and define them before render within the class definition. This saves them 
//redefining each time the component renders.

//2) Setup mapDispatchToProps with two attributes - editExpense and removeExpense and pass the data through

//At this point start the app in development mode to see if it's all working

//3) 3 total test cases:
//  should render EditExpensePage - snapshot
//  should handle editExpense using spies and make sure spies get called
//  should handle removeExpense also using spies similar to the last test in addExpensePage.

export class EditExpensePage extends React.Component{

  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }

  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => ({
  editExpense : (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense : (expense) => dispatch(removeExpense({ id: expense.id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
