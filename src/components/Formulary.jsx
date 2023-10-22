import styles from './Formulary.module.css';
import PasswordLook from './PasswordLook';
import Icone_Logo from '../img/icone_logo.png';


import { AiOutlineUser } from 'react-icons/ai';


import { FormProvider, useForm } from 'react-hook-form';


function TelaLogin() {

  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(data => console.log(data))}>
        <div className={styles.Container_Login}>
          <div className={styles.Icon_Logo}>
            <img src={Icone_Logo} alt='logo da escola E.E.E.P Adriano Nobre' />
          </div>

          <div className={styles.Title_Login}>
            <h1>Biblioteca</h1>
          </div>

          <div className={styles.Group_Login}>
            <AiOutlineUser className={styles.Icon_User} />
            <input type='text'
              {...methods.register('name', {
                required: { value: true, message: '*Esse Campo é Obrigátorio' },
                minLength: { value: 3, message: '*Você Precisa Digitar Pelo Menos 3 Caracteres' }
              })}
              placeholder='Nome'
            />
            {methods.formState.errors.name && <p className={styles.error}>{methods.formState.errors.name.message}</p>}
          </div>

          <PasswordLook />


          <div className={styles.Container_Login2}>
            <div className={styles.Remember_Checkbox}>
              <input
                type="checkbox"
                name="checkbox"
                className='Checkbox'
              />
              <span>Lembrar-me</span>
            </div>
          </div>

          <div className={styles.Group_Login}>
            <input
              type='submit'
              className={styles.Button_Login}
              value='Entrar'
            />
          </div>
        </div>
      </form >
    </FormProvider>
  );
}

export default TelaLogin;
