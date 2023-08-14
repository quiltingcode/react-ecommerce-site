import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up/sign-up.component";
import FormInput from "../../components/form-input/form-input-component";
import { useState } from "react";
import Button from "../../components/button/button.component";

const defaultFormFields = {
    email: '',
    password: '',
}

const Authentication = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            resetFormFields();
        } catch (error) {
            console.log(error);
        }
    };

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
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
            </form>
            <Button type="submit">
                Sign in
            </Button>
            <Button onClick={logGoogleUser}>
                Sign in with Google
            </Button>
            <SignUpForm />
        </div>
    );
};

export default Authentication;