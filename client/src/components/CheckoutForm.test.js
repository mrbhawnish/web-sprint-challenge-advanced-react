import React from "react";
import { fireEvent, render, cleanup, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
afterEach(cleanup)
test("form header renders", () => {

    const {getByText} = render(<CheckoutForm />)
   
    //Find the form header
    getByText(/Checkout Form/i)

});

test("form shows success message on submit with form details", async() => {
    
    const {getByTestId, getByText} = render(<CheckoutForm />)

    
    const submitButton = getByText(/check-out/i)

    
    fireEvent.click(submitButton)

    await waitFor(() => expect(getByTestId(/successMessage/i)).toHaveTextContent("You have ordered some plants"))
 
});
