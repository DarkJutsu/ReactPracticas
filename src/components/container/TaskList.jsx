import { useEffect, useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { TaskClass } from '../../models/task.class';
import Task from '../pure/Task';

const TaskList = () => {
	const defaultTask = new TaskClass(
		'Example',
		'Default description',
		true,
		LEVELS.NORMAL
	);

	const [tasks, setTasks] = useState([defaultTask]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log('Task state has been modified');
		setLoading(false)
		return () => {
			console.log('Task list component is going to unmount');
		};
	}, [tasks]);

	const changeComplete = () => {
		console.log('Function change state');
	};

	return (
		<div>
			<h1>Your Task</h1>
			<Task task={defaultTask} />
		</div>
	);
};

export default TaskList;
