import React from 'react';
import useInputState from '../../../Hook/useInputState';

const HookForm = () => {
      // const [name, handleChange] = useInputState('Rojoni hook')
      const emailState = useInputState("Rojoni@gmail.com")

      const handleSubmit = (event) => {
            event.preventDefault();
            console.log("form data changed", emailState.value);
      }
      return (
            <div>
                  <form onSubmit={handleSubmit}>
                        {/* <input value={name} onChange={handleChange} type="text" name='name'/> */}
                        <br />
                        <input {...emailState}
                              type="email" email='email'/>
                        <br />
                        <input type="password" password='password'/>
                        <br />
                        <input type="submit" value="Submit" />
                  </form>
                  
            </div>
      );
};

export default HookForm;