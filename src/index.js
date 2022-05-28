import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import firebase from './firebase';

console.log(firebase);

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
