import { useState } from 'react';
import './app.scss';
import FormInput from './components/FormInput';


function App() {

 const [values, setValues] = useState({
      username:'',
      email:'',
      password:'',
 });
  
  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      label: 'Username',
      errorMessage: 'Minimum 3-16 characters, should be alphanumeric or underscore',
      pattern:'^[a-zA-Z0-9_]{3,16}$',
      required: true
    },
    {
      id: 2,
      name: 'email',
      type: 'text',
      placeholder: 'Email',
      label: 'Email',
      errorMessage: 'Please enter a valid email',
      pattern:'^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$',
      required: true
    },
    {
      id: 3,
      name: 'Date of Birth',
      type: 'date',
      placeholder: 'Date of Birth',
      label: 'Date of Birth',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
      pattern:'^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$',
      errorMessage: 'Minimum eight characters, at least one letter, one number and one special character',
      required: true
    },
    {
      id: 5,
      name: 'ConfirmPassword',
      type: 'password',
      placeholder: 'Confirm password',
      label: 'Confirm Password',
      pattern: values.password,
      errorMessage: "Passwords don't match!",
      required: true
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });

  }

  console.log(values);

  //const usernameRef = useRef()
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(usernameRef);
  // }


  //  const handleSubmit = (e) => {
  //    e.preventDefault();
  //    const data = new FormData(e.target);
  //   console.log(Object.fromEntries(data.entries()));
  // }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
      

        {/* <FormInput placeholder="Username" userRef={usernameRef} /> using useRef*/}
        <button>Login</button> 
     </form>
    </div>
  );
}

export default App;
