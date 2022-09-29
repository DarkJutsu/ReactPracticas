import PropType from 'prop-types';
import { useEffect } from 'react';
import { TaskClass } from '../../models/task.class';

const Task = ({ task }) => {
	useEffect(() => {
		console.log('Create task');
		return () => {
			console.log(`Task: ${task.name} is going to`);
		};
	}, []);

	return (
		<div>
			<h1 className='text-danger'>Name : {task.name}</h1>
			<h3>Description: {task.description}</h3>
			<h5>State: {task.level}</h5>
			<h5>This task is: {task.completed ? 'Completed' : 'Pending'}</h5>
		</div>
	);
};
Task.propType = {
	task: PropType.instanceOf(TaskClass),
};

export default Task;
