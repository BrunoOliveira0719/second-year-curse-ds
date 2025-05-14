import { useNavigate } from 'react-router-dom';
import '../src/App.css'

function SignUp() {
  const navigate = useNavigate();

  function SignUpAPI() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
      fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify({ name, email, password }),
      })
      .then(response => response.json())
      .then(data => document.getElementById('response').innerHTML = data)
    } else {
      alert('Write all fields!');
    }
    navigate("/")
  };

  return (
    <div className="main">
      <div className="SignUp">
      <h1><a href="/">SignUp</a></h1>
        <ul>
          <li>
            <p id='namep'>Name:</p>
            <input id='name' type="text" placeholder='Name:'/>
          </li>
          <li>
            <p>Email:</p>
            <input id='email' type="email" placeholder='Email:'/>
          </li>
          <li>
            <p>Password:</p>
            <input id='password' type="password" placeholder='Password:'/> 
          </li>
        </ul>
        <button id='signUp' onClick={SignUpAPI}>SignUp</button>
        <h3 id="response"></h3>
      </div>
    </div>
  );
};

export default SignUp;