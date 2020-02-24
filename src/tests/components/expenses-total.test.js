import React from 'react';
import { shallow } from 'enzyme';
import { getTotalExpenses as selectExpensesTotal } from '../../selectors/expenses-total';
import expenses from '../fixutres/expenses';

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(4500);
});

test('should correctly add up multiple expenses', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(114000);
})