import './App.css';
import { useState } from 'react';
import TaskList from './components/container/TaskList';
import { ExampleHook } from './hooks/exampleHook';
import { Example2Hook } from './hooks/example2Hook';
import { ComponentContext } from './hooks/example3Hook';
import { PropsChildren } from './hooks/examplePropsChildren';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
      {/* <TaskList /> */}
			<PropsChildren nombre='Juan' >
				<h4>Hola</h4>
			</PropsChildren>
		</div>
	);
}

export default App;
