import React, { useState } from 'react';

const StateFullForm = () => {
      const [email, setEmail] = useState(null)
      const handleSubmit = (e) => {
      //       e.preventDefault();
      //       console.log(e.target.name.value);

      //       e.target.name.value = '';
      }

      const handleEmailChange = (e) => {
            console.log(e.target.value);
            setEmail(e.target.value)
      }
      return (
            <div>
                  <form onSubmit={handleSubmit}>
                        <input type="text" name='name'/>
                        <br />
                        <input 
                              onChange={handleEmailChange}
                              type="email" email='email'/>
                        <br />
                        <input type="password" password='password'/>
                        <br />
                        <input type="submit" value="Submit" />
                  </form>
                  
            </div>
      );
};

export default StateFullForm;