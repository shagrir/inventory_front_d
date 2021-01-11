import './Login.css'


function Login() {
    return (
        <div>
        <form >
           <h3>Login</h3>
          <label>
            Email address
            <input type="email" name="email" />
          </label>
          <label >
            Password
            <input type="password" name="password" />
          </label>
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    
    );
  }
  

  export default Login;