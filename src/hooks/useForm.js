// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = () =>{
    //1. gather all stateful logic
    //2. return data need in component
    //3. connect our hook to our component
    const [values, setValues] = useLocalStorage("form", initialValues);
  
    const handleChanges = e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    };
    
    const clearForm = e => {
      e.preventDefault();
      setValues(initialValues);
    };
  
    return([values, handleChanges, clearForm]);
}

export default useForm;