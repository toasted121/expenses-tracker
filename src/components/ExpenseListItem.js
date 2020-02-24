import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


//need an expense list item header that takes in filtered expenses and 
//sends back the number of epxenses being shown and their total sum.
//need getExpensesTotal function from expenses-total.js
//should return 0 if no expenses
//should correctly add up a single expense
//should correctly add up multiple expenses
//the header will sit in between the navbar and the expense form
//Need to test these functionalities

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount / 100).format('$0,0.00')} 
      - 
      {moment(createdAt).format('Do MMMM, YYYY')}
    </p>
  </div>
);

export default ExpenseListItem;
