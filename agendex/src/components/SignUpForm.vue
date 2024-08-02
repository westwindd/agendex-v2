<template>
    <div class="form">
      <img src="path/to/your/logo.png" alt="Logo" />
      <h1>Create Account</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Sign Up</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "SignUpForm",
  };
  </script>
  
  <style scoped>
  .form {
    background: #fff;
    padding: 0 50px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  input {
    background: #f6f5f7;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
  }
  
  button {
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
    background: #ff416c;
    color: white;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  button:hover {
    background: #ff4b2b;
  }
  </style>
  