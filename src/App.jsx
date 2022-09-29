import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { useState } from 'react';
import DefaultTask from './components/container/TaskList';
import { ExampleHook } from './hooks/exampleHook';
import { Example2Hook } from './hooks/example2Hook';
import { ComponentContext } from './hooks/example3Hook';
import { PropsChildren } from './hooks/examplePropsChildren';
import { AllCycles } from './hooks/LifeCycle/AllCycle';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<DefaultTask />
		</div>
	);
}

export default App;
