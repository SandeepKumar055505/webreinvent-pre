import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../features/auth/authSlice'; import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../app/store';
import UserForm from '../resuable-components/UserForm/UserForm';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { loading, error } = useSelector((state: RootState) => state.auth);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(registerUser({ email, password })).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                navigate('/signin');
            } else {
                alert(`Failed to register: ${error}`);
            }
        });
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md">
                <UserForm
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                    isLoading={loading}
                    formType="signUp"
                />
            </div>
        </div>
    );
};

export default SignUp;
