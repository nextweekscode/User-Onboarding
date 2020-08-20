import React from 'react'

function Form(props) {

    const { values, 
        inputChange, 
        checkboxChange, 
        submit,
        disabled,
        errors} = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked)
        
    }

    const onInputChange = evt => {
        const { name, value} = evt.target
        inputChange(name, value)
    }

    

    return (
    
        <form className='form-container' >
            <div className='form-group submit'>
                <h2>Add Employee</h2>
                <button onClick={onSubmit} disabled={disabled}>Submit</button>

                <div className='errors'>
                    <div>{errors.first_name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>


            <div className='form-group inputs'>
                <h4>General Info</h4>
                <label>Name:
                    <input
                    value={values.first_name}
                    onChange={onInputChange}
                    name='first_name'
                    type='text'/>
                </label>
                <br/>
                <label>Email:
                    <input
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='text'/>
                </label>
                <br/>
                <label>Password:
                    <input
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='text'/>
                </label>

                <div className='form-group checkboxes'>
                    <label>Terms of Service:
                        <input
                        type="checkbox"
                        name="yes"
                        checked={values.terms.yes}
                        onChange={onCheckboxChange}/>
                    </label>
                </div>

            </div>


        </form>
        
    )

    
}

export default Form