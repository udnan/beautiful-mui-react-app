import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot, Root} from 'react-dom/client';
import App from './App'

const container: HTMLElement | null = document.getElementById('root');
const root: Root = createRoot(container!);

// ReactDOM.render(<App />, document.getElementById('root'));
root.render(<App />);
