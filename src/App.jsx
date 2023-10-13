import './App.css';

function App() {
  return (
    <div className='App'>
      <form>
        <div className='Container'>

          <div className='Campo-Group'>
            <label>Name</label>
            <input type='text' name='name' />
          </div>

          <div className='Campo-Group'>
            <label>Senha</label>
            <input type='password' name='password' />
          </div>

          <div className='Campo-Group'>
            <label>Email</label>
            <input type='email' name='email' />
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
