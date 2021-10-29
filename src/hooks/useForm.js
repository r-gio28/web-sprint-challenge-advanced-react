// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = (initialValue) =>{
    //1. gather all stateful logic
    //2. return data need in component
    //3. connect our hook to our component
    const [values, setValues] = useState(initialValue);
  
    const handleChanges = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   setShowSuccessMessage(true)
    };
    return[values, handleChanges];
}

export default useForm