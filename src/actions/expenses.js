import uuid from 'uuid';
import database from '../firebase/firebase';

// Including a database design the action generators will return functions instead of
// objects. Redux does not have usually allow this functionality so we use redux thunk middleware
// to add support for redux to execute the function e.g. firebase push to add object.

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    database.ref(`expenses/${id}`).remove()
    .then(() => {
      dispatch(removeExpense({ id }));
    });
  }
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});


export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    database.ref(`expenses/${id}`).update(updates)
    .then(() => {
      dispatch(editExpense(id,updates));
    });
  }
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

//SET_EXPENSES

export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});


export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];
      
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setExpenses(expenses));

    });
  };
};

