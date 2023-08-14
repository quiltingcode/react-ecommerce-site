import { useState } from "react";
import FormInput from "../form-input/form-input-component";
import './sign-up-form.styles.scss';
import Button from "../button/button.component";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {

            resetFormFields();
        } catch (error) {
            console.log('user creation encoutered an error', error);
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Signup with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email" 
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
                <FormInput
                    label="Password" 
                    type="password" 
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <Button type="submit">
                Sign in
                </Button>
                <Button onClick={logGoogleUser}>
                Sign in with Google
                </Button>
            </form>
        </div>
    )
}

export default SignInForm;