import stylesPassword from './PasswordLook.module.css'

import { useState } from 'react';

import { RiLockPasswordFill } from 'react-icons/ri';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import { useFormContext } from 'react-hook-form';


function PasswordLook() {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const methods = useFormContext();

    return (
        <>
            <div className={stylesPassword.Group_Login}>
                <RiLockPasswordFill className={stylesPassword.Icon_Password} />
                <button type='button' className={stylesPassword.Eye_Login} onClick={togglePasswordVisibility}>
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>

                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Senha'
                    className='password'
                    {...methods.register('password', {
                        required: { value: true, message: '*Esse Campo é Obrigátorio' },
                        minLength: { value: 3, message: '*Você Precisa Digitar Pelo Menos 3 Caracteres' }
                    })}
                />
                {methods.formState.errors.password && <p className={stylesPassword.error}>{methods.formState.errors.password.message}</p>}
            </div>
        </>
    );
};

export default PasswordLook;