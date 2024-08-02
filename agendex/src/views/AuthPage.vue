<template>
    <div class="auth-page" :class="{ 'right-panel-active': !isSignInPanelActive }">
      <div class="form-container sign-up-container">
        <SignUpForm />
      </div>
      <div class="form-container sign-in-container">
        <SignInForm />
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>If you already have an account please sign in here!</p>
            <button class="ghost" @click="switchToSignIn">Sign In</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button class="ghost" @click="switchToSignUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SignInForm from "../components/SignInForm.vue";
  import SignUpForm from "../components/SignUpForm.vue";
  
  export default {
    components: {
      SignInForm,
      SignUpForm,
    },
    data() {
      return {
        isSignInPanelActive: true,
      };
    },
    methods: {
      switchToSignIn() {
        this.isSignInPanelActive = true;
      },
      switchToSignUp() {
        this.isSignInPanelActive = false;
      },
    },
  };
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
  
  * {
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }
  
  .auth-page {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f6f5f7;
  }
  
  .form-container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
    transition: all 0.6s ease-in-out;
  }
  
  .sign-in-container {
    left: 0;
    z-index: 2;
  }
  
  .sign-up-container {
    left: 0;
    opacity: 0;
    z-index: 1;
  }
  
  .right-panel-active .sign-in-container {
    transform: translateX(100%);
  }
  
  .right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  }
  
  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
  }
  
  .right-panel-active .overlay-container {
    transform: translateX(-100%);
  }
  
  .overlay {
    background: #ff416c;
    background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
    background: linear-gradient(to right, #ff4b2b, #ff416c);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }
  
  .right-panel-active .overlay {
    transform: translateX(50%);
  }
  
  .overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }
  
  .overlay-left {
    transform: translateX(-20%);
  }
  
  .right-panel-active .overlay-left {
    transform: translateX(0);
  }
  
  .overlay-right {
    right: 0;
    transform: translateX(0);
  }
  
  .right-panel-active .overlay-right {
    transform: translateX(20%);
  }
  
  .ghost {
    background-color: transparent;
    border-color: #ffffff;
    color: #ffffff;
    margin: 1rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .ghost:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  /* Font sizes */
  h1 {
    font-size: 24px;
  }
  
  p {
    font-size: 14px;
  }
  </style>
  