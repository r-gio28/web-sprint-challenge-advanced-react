import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";
// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>);
    const first = screen.getByLabelText(/first name/i)
    const last = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/Address:/i)
    const city = screen.getByLabelText(/City:/i)
    const state = screen.getByLabelText(/State:/i)
    const zip = screen.getByLabelText(/Zip:/i)

    
    userEvent.type(first, 'gio');
    userEvent.type(last, 'rosales')
    userEvent.type(address, '123 main street')
    userEvent.type(city, 'Los Angeles')
    userEvent.type(state, 'California')
    userEvent.type(zip, '6582')
});
    
test("shows success message on submit with form details", () => {
   render(<CheckoutForm/>);
    const first = screen.getByLabelText(/First Name:/i)
    const last = screen.getByLabelText(/Last Name:/i)
    const address = screen.getByLabelText(/Address:/i)
    const city = screen.getByLabelText(/City:/i)
    const zip = screen.getByLabelText(/Zip:/i)
    const state = screen.getByLabelText(/State:/i)
    const button = screen.getByRole('button')

    userEvent.type(first, 'Giovanni')
    userEvent.type(last, 'Rosales')
    userEvent.type(address, '123 Main Street')
    userEvent.type(city, 'Los Angeles')
    userEvent.type(zip, '6582')
    userEvent.type(state, 'California')
    userEvent.click(button)

    

  expect(screen.getByTestId('successMessage')).toHaveTextContent('You have ordered some plants! Woo-hoo!')
});
