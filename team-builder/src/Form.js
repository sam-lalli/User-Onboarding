import React from 'react'



const From = props => {
    const { values, errors, disabled, change, submit } = props

    const onChange = e => {
        const { name, value, type, checked } = e.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
    }


    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    return(
        <form className="form-container" onSubmit={onSubmit}>
            <div className='form'>
                <h2>Sign Up here</h2>
                <div className='form inputs'>
                    <label>Name
                        <input 
                        type='text'
                        name='name'
                        onChange={onChange}
                        value={values.name}
                        maxLength="16"
                        placeholder="Enter Username"
                        />
                    </label>
                    <label>Email
                        <input 
                        type='email'
                        name='email'
                        onChange={onChange}
                        value={values.email}
                        maxLength="30"
                        placeholder="Email"
                        />
                    </label>
                    <label>Password
                        <input 
                        type='password'
                        name='password'
                        onChange={onChange}
                        value={values.password}
                        maxLength='16'
                        />
                    </label>
                    <div className="checkbox">
                        <label>Click here to agree to the terms and conditions
                            <input 
                            type='checkbox'
                            onChange={onChange}
                            name='terms'
                            checked={values.terms}
                            />
                        </label>
                    </div>
                    <button disabled={disabled}>Submit</button>
                    <div className='errors'>
                        <div>{errors.name}</div>
                        <div>{errors.email}</div>
                        <div>{errors.password}</div>
                        <div>{errors.terms}</div>
                    </div>
                </div>
            </div>
        </form>
    )
}



export default From