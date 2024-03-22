import React, { useEffect, useRef } from 'react';

const RefForm = () => {

      const nameRef = useRef(null)

      useEffect(()=>{
            nameRef.current.focus();
      } ,[])
      const handleSubmit = e => {
            e.preventDefault();
            console.log(nameRef.current.value);
      }
      return (
            <div>
                  <form onSubmit={handleSubmit}>
                        <input ref={nameRef} type="text" name='name'/>
                        <br />
                        <input 
                              
                              type="email" name='email'/>
                        <br />
                        <input type="password" name='password'/>
                        <br />
                        <input type="submit" value="Submit" />
                  </form>
            </div>
      );
};

export default RefForm;