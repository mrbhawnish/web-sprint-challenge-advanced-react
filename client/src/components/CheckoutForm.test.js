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

test("form shows success message on submit with form details", () => {
    
    //Arranging the component and the corresponding utlity functions that match to get the elements
    const {getByLabelText, getByTestId, getByText} = render(<CheckoutForm />)
    const nameInput = getByLabelText("First Name:");
    const submitButton = getByText(/check-out/i)

    //Some actions here to simulate typing of the data and clicking submit
    fireEvent.change(nameInput, { target: { value: "usertesting"}})
    fireEvent.click(submitButton)


   // the expected results to contain the simulated data and the successmessage
  
      expect(getByTestId(/successMessage/i)).toHaveTextContent("usertesting")
      expect(getByTestId(/successMessage/i)).toHaveTextContent("You have ordered some plants")
 
});
