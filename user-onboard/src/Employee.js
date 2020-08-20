import React from 'react'

function Employee(props){
   const { details } = props 

   if (!details) {
       return <h3>Working....</h3>
   }
    return (
        <div className='employee-container'>
            <h2>{details.first_name}</h2>
            <p>ID:{details.id}</p>
            <p>Email:{details.email}</p>
            <p>Password:{details.password}</p>
            <p>Terms:</p> 

            
      {
        !!details.terms && !!details.terms.length &&
        <div>
          Terms:
          <ul>
            {details.terms.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
            
           </div>
            )
}

export default Employee