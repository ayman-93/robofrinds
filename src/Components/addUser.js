import React from 'react';
 

const addUser = ({handler,add}) => {
    return(
      
        <div className='pa2' >
        
          <input
            className='pa3 ba b--green bg-lightest-blue'
            type='text'
            id='name'
            placeholder='Name'
                onChange={handler}
          />

          <input
            className='pa3 ba b--green bg-lightest-blue'
            type='text'
            id='userName'
            placeholder='User Name'
            onChange={handler} 
          />

          <input
            className='pa3 ba b--green bg-lightest-blue'
            type='email'
            id='email'
            placeholder='Email'
            onChange={handler}
          />
          <br />
          <button className='br-pill pa2 ma2 w-10' onClick={add}>Sumbet</button>

         </div>
    );
}

export default addUser;