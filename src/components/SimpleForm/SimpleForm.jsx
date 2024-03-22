import React from 'react';

const SimpleForm = () => {

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log(e.target.name.value);

            e.target.name.value = '';
      }
      return (
            <div>
                  <form onSubmit={handleSubmit}>
                        <input type="text" name='name'/>
                        <br />
                        <input type="text" email='email'/>
                        <br />
                        <input type="submit" value="Submit" />
                  </form>
            </div>
      );
};

export default SimpleForm;
