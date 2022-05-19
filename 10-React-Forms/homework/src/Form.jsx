import React from 'react';



export function validate(input) {

  let errors = {};

  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  } 
  
  if (!input.password){
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
  }
  
  return errors;
};



export default function Form() {

  //ESTADO DEL COMPONENTE. Se adjunta los distintos estados en un mismo objeto 
  const [input, setInput] = React.useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = React.useState({});


  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });


    setErrors(validate({ //Llama a la funcion validate  
      ...input,
      [e.target.name]: e.target.value
    }));

  }


  return (
    <form>
      <div>
        <label>Username:</label>
        <input className={errors.username && 'danger'}
        type="text" 
        name="username" 
        value={input.username} 
        onChange={handleInputChange}
        placeholder="Username"/>
        {errors.username && (<p className="danger">{errors.username}</p>)}
        {/* LA VALUE ME CONECTA EL ESTADO CON EL INPUT */}
        
        <br />
        <label>Password:</label>
        <input className={errors.password && 'danger'}
        type="password" 
        name="password" 
        value={input.password} 
        onChange={handleInputChange}
        placeholder="Password"/>
        {errors.password && (<p className="danger">{errors.password}</p>)}

      </div>
      
      <br />
      <input type="submit" value="Submit" />


    </form>
  )
}



