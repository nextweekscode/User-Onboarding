import React from 'react'

function Form(props) {

    const {} = props

    const onSubmit = evt => {
        
    }

    const onCheckboxChange = evt => {

    }

    const onInputChange = evt => {

    }

    

    return (
    
        <form className='form-container' onSubmit={[]}>
            <div className='form-group submit'>
                <h2>Add Employee</h2>
                <button disabled={[]}>Submit</button>

                <div className='errors'>
                    <div>{[]}</div>
                    <div>{[]}</div>
                    <div>{[]}</div>
                    <div>{[]}</div>
                </div>
            </div>


            <div className='form-group inputs'>
                <h4>General Info</h4>
                <label>Name:
                    <input
                    value={[]}
                    onChange={[]}
                    name='name'
                    type='text'/>
                </label>
            </div>


        </form>
        
    )

    
}

export default Form