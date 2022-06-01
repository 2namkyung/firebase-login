import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import React, { useState } from 'react';
import { authService } from '../firebase';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(authService, email, password);
      return true;
    } catch (err) {
      alert(err);
      return err;
    }
  };

  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;

    let provider;

    if (name === 'google') {
      provider = new GoogleAuthProvider();
    } else if (name === 'github') {
      provider = new GithubAuthProvider();
    }

    try {
      await signInWithPopup(authService, provider);
      return true;
    } catch (error) {
      return error;
    }
  };

  return (
    <figure className="h-screen flex bg-gray-100">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
        <blockquote className="text-2xl font-medium text-center">
          <p className="text-lg font-semibold">Welcome to My-App</p>
        </blockquote>

        <div className="text-primary m-6">
          <div className="flex items-center mt-3 justify-center">
            <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
              Login to your account
            </h1>
          </div>

          <span>Email</span>
          <input
            name="email"
            type="text"
            onChange={onChange}
            placeholder="Username"
            className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
          />
          <span>Password</span>
          <input
            name="password"
            type="password"
            onChange={onChange}
            placeholder="Password"
            className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
          />
          <div className="flex items-center mt-3 justify-center">
            <button
              type="button"
              className="bg-blue-700 hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
              value="Login"
              onClick={login}
            >
              Login
            </button>
          </div>
          <div className="flex items-center mt-3 justify-center">
            <button
              type="button"
              className="justify-center text-blue-500 hover:underline"
            >
              Need to register? Sign up for free
            </button>
          </div>
          <div className="flex items-center mt-3 justify-center">
            <button
              type="button"
              name="github"
              className="bg-black hover:bg-gray-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
              value="Login"
              onClick={onSocialClick}
            >
              Github
            </button>
            <button
              type="button"
              name="google"
              className="bg-white hover:bg-gray-500 py-2 px-4 text-md text-black rounded border border-blue focus:outline-none focus:border-black"
              value="Login"
              onClick={onSocialClick}
            >
              Google
            </button>
          </div>
        </div>
      </div>
    </figure>
  );
}
