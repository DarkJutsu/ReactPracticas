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
	const defaultTask2 = new TaskClass(
		'Example 2',
		'Default description',
		false,
		LEVELS.URGENT
	);
	const defaultTask3 = new TaskClass(
		'Example 3',
		'Default description',
		true,
		LEVELS.BLOCKING
	);

	const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log('Task state has been modified');
		setLoading(false);
		return () => {
			console.log('Task list component is going to unmount');
		};
	}, [tasks]);

	const changeComplete = () => {
		console.log('Function change state');
	};

	return (
		<div className='grid grid-cols-4 gap-2 pt-4'>
			{
				tasks.map((task, i)=>{
					return(
						<Task key={i} task={task} />
					)
				})
			}
		</div>
	);
};

export default TaskList;
