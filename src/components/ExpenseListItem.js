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
  <Link className='list-item' to={`/edit/${id}`}>
    <div>
      <h3 className='list-item__title'>{description}</h3>
      <span className='list-item__sub-title'>{moment(createdAt).format('Do MMMM, YYYY')}</span>
    </div>
    <h3 className='list-item__data'>{numeral(amount / 100).format('$0,0.00')}</h3>
  </Link>
);

export default ExpenseListItem;
