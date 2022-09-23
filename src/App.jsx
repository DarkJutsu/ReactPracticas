import { useState } from 'react';
import './App.css';
import { Greeting } from './components/pure/Greeting';
import { GreetingFunc } from './components/pure/GreetingFunc';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
      <GreetingFunc name='Junana' />
			{/* <Greeting name='Juana' /> */}
		</div>
	);
}

export default App;
