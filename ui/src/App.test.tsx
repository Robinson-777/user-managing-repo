import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import reducers from './redux/reducers';

test('reducers', () => {
  let state;
  let users: any = [];
  state = reducers.reducer(users, { type: 'users/addUser', payload: { firstName: 'test', lastName: 'dfa', emailId: 'abc@gmail.com' } });
  expect(state).toEqual({ users: [{ firstName: 'test', lastName: 'dfa', emailId: 'abc@gmail.com' }] });
});