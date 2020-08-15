// write your custom hook here to control your checkout form
import React, { useState } from 'react';


const useForm = (initialValue) => {
const [value, setValue] = useState(initialValue);
const [showSuccessMessage, setShowSuccessMessage] = useState(false);
const handleChanges = e => {
    setValue({...value, [e.target.name]: e.target.value})
}
const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };
 return [value, showSuccessMessage, handleChanges, handleSubmit]
};

export default useForm;