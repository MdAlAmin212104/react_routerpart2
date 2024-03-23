import React from 'react';

const ReUseAbleForm = ({FormTitle,handleSubmit, submitBtnText= 'submit'}) => {

      const handleLocalSubmit = (e) => {
            e.preventDefault();
            const data ={
                  name: e.target.name.value,
                  email: e.target.email.value,
                  password: e.target.password.value,
            }
            handleSubmit(data);
      }
      return (
            <div>
                  {FormTitle}
                  <form onSubmit={handleLocalSubmit}>
                        <input type="text" name='name'/>
                        <br />
                        <input 
                              type="email" name='email'/>
                        <br />
                        <input type="password" name='password'/>
                        <br />
                        <input type="submit" value={submitBtnText} />
                  </form>
            </div>
      );
};

export default ReUseAbleForm;