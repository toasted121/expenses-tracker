import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import Modal from 'react-modal';

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

  state = {
    openState : false
  }

  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }

  doNothing = () => {
    this.props.history.push('/');
  }

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  onClick = () => {
    this.setState((prevState) => ({
      openState: !prevState.openState
    }));
  }


  render() {
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Edit expense</h1>
          </div>
        </div>
        <div className='content-container'>
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button className='button button--remove' onClick={this.onClick}>Remove Expense</button>
        </div>
        <Modal isOpen={this.state.openState}
              contentLabel = "remove expense modal"
              closeTimeoutMS={200}
              className="modal"
              shouldCloseOnEsc={false}  >
                <h3 className='modal__title'>Do you really want to remove this expense?</h3>
                <div className="modal__buttonbox">
                  <button className="button button--modal" onClick={this.onRemove}>Yes</button>
                  <button className="button button--modal" onClick={this.doNothing}>No</button>
                </div>
        </Modal>
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
  startEditExpense : (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense : (expense) => dispatch(startRemoveExpense({ id: expense.id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
