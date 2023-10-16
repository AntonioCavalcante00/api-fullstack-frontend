import './TelaLogin.css';
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import Icone_Logo from "./img/icone_logo.png"


function App() {
  return (
    <div className='App'>
      <form>
        <div className='Container'>
          <div className='Icon-Logo'>
            <img src={Icone_Logo} alt='logo da escola E.E.E.P Adriano Nobre' />
          </div>

          <div className='Title'>
            <h1>Biblioteca</h1>
          </div>

          <div className='Campo-Group'>
            <AiOutlineUser className='Icon' />
            <label>Name</label>
            <input type='text' name='name' />
          </div>

          <div className='Campo-Group'>
            <RiLockPasswordFill className='Icon' />
            <label>Senha</label>
            <input type='password' name='password' />
          </div>

          <div className='Campo-Group'>
            <input type='submit' className='Button' value='Entrar' />
          </div>

        </div>
      </form>
    </div>
  );
}

export default App;
