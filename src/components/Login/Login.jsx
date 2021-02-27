import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/FormsControls/FormsControls';
import { login } from '../../Reduce/authReducer';
import { maxLength, required } from '../../utils/validators';
import s from '../../common/FormsControls/FormsControls.module.css'

const maxLength20 = maxLength(20);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='email' placeholder="email" component={Input} type='input' validate={[required, maxLength20]} />
            </div>
            <div>
                <Field name='password' placeholder="Password" component={Input} type='password' validate={[required, maxLength20]} />
            </div>
            <div>
                <Field name='rememberMe' component='input' type='checkbox' /> remember me
            </div>
            {props.error ? <span className={s.required}>{props.error}</span> : null}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)
const Login = (props) => {
    if (props.isAuth) return <Redirect to='/profile' />
    const onSubmit = ({ email, password, rememberMe }) => { props.login(email, password, rememberMe) }
    return (<div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit} />
    </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);

// export default function Counter() {
//     const [count, setCount] = useState(0);

//     function increment() {
//         setCount(count + 1);
//         setCount(count => count + 1);
//     }
//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={increment}>
//                 Click me
//         </button>
//         </div>
//     );
// }