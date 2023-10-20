
import React, { useState } from 'react';
import { RiLockPasswordFill } from 'react-icons/ri';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

return (
    <div className='Campo-Group'>
      <RiLockPasswordFill className='Icon' />
      <button type='button' className='Eye' onClick={togglePasswordVisibility}>
        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
      </button>
      
      <input
        type={showPassword ? 'text' : 'password'}
        name='password'
        placeholder='Senha'
        className='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </div>
  );
};

export default PasswordInput;
