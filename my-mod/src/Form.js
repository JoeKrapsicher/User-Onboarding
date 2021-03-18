import React, {useEffect, useState} from 'react';
import * as yup from 'yup';
import axios from 'axios'


const schema = yup.object().shape({
    user: yup.string().required('user is required').min(6, 'user needs to be 6 chars min'),
    email: yup.string().required('email is required'),
    password: yup.string().required('you need a password'),
    tosCheck: yup.boolean().oneOf([true], 'you must Sell your SOul!'),
})

export default function Form () {

    const [form, setForm] = useState({ user: '', email: '', password: '', tosCheck: false });
    const [errors, setErrors] = useState({ user: '', email: '', password: '', tosCheck: false });
    const [disabled, setDisabled] = useState(true)

    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => {setErrors({...errors, [name]: ''}) })
            .catch(err => setErrors({...errors, [name]: err.errors[0]}))
    }

    const change = event => {
        const { checked, value, name, type } = event.target;
        const valuetoUse = type === 'checkbox' ? checked : value
        setFormErrors(name, valuetoUse)
        setForm({ ...form, [name]: valuetoUse})
    }

    useEffect(() => {
        schema.isValid(form).then(valid => setDisabled(!valid))
    }, [form])

    const submit = event => {
        event.preventDefault();
        const newUser = { user: form.user.trim(), email: form.email, password: form.password, tosCheck: form.tosCheck }
        axios.post('https://reqres.in/api/users', newUser)
            .then(res => {
                setForm({user: '', email: '', password: '', tosCheck: false})
            })
            .catch(err => {
                console.log("this was a post error", err)
            })

    }
    

    return (
        <div className="Form">
                <div style={{color: 'red'}}>
                    <div>{errors.user}</div><div>{errors.email}</div><div>{errors.password}</div><div>{errors.tosCheck}</div>
                </div>
            <form onSubmit={submit}>E
                <label>Name :
                    <input
                    onChange={change}
                    value={form.user} 
                    name="user" 
                    type='text'
                    placeholder="Lady Gaga"
                    />
                </label>

                <label>Email :
                    <input 
                    onChange={change}
                    value={form.email} 
                    name="email" 
                    type='text'
                    placeholder='E@E.com'
                    />
                </label>

                <lable>password
                    <input 
                    onChange={change}
                    value={form.password} 
                    name="password"
                    type='text'
                    placeholder='Funky '
                    />
                </lable>

                <label> Terms of Service
                    <input  
                    onChange={change}
                    checked={form.tosCheck}
                    name="tosCheck" 
                    type='checkbox'
                    />
                </label>

                <button disabled={disabled}>Submit</button>



            </form>
        </div>
    )
}