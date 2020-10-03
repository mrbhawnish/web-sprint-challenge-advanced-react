import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
afterEach(cleanup)
test("form header renders", () => { 
    //Arrange
    const { getByTestId } = render(<CheckoutForm />)

     //Act and Assert
    const formHeader = getByTestId(/formHeader/i)
    expect(formHeader).toHaveTextContent(/Checkout Form/i)
});

test("form shows success message on submit with form details", () => {
    //Arranging
    const { getByLabelText, getByTestId, queryByTestId} = render(<CheckoutForm />)
    const input = getByLabelText(/First Name:/i)
    const submitButton = getByTestId(/submitButton/i)
    
    //Some actions
    fireEvent.change(input, { target: { value: "something"}})
    fireEvent.click(submitButton)
    //Once the submit is clicked it renders our successMessage:
    const successMessage = screen.getByTestId(/successMessage/i)
    //Our Assertion for the expected test value
    expect(successMessage).toHaveTextContent(/something/i)
    
});
