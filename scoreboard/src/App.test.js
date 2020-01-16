import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';
import Display from './Display';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders word score', ()=>{
// const {getByText} = render(<App/>);
// const h2element=getByText(/score/i);
// expect(h2element).toBeInTheDocument();

// });

test('balls button rendered', ()=>{

const app = render(<App />)
const strikeBtn = app.getByTestId('balls-btn');
const strikes = app.getByTestId('balls-btn');
fireEvent.click(strikeBtn)
expect(strikes.textContent).toBe('Balls');
})