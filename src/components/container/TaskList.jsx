import { useEffect, useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { TaskClass } from '../../models/task.class';
import { TaskForm } from '../pure/forms/TaskForm';
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

	const [tasks, setTasks] = useState([
		defaultTask,
		defaultTask2,
		defaultTask3,
	]);
	
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		console.log('Task state has been modified');
		setLoading(false);
		return () => {
			console.log('Task list component is going to unmount');
		};
	}, [tasks]);

	function completeTask(task) {
		const i = tasks.indexOf(task);
		const tempTask = [...tasks];
		
		tempTask[i].completed = !tempTask[i].completed;
		setTasks(tempTask);
	}

	function deleteTask(task) {
		const i = tasks.indexOf(task);
		const tempTask = [...tasks];

		tempTask.splice(i, 1);
		setTasks(tempTask);
	}

	function addTask(task) {
		const i = tasks.indexOf(task);
		const tempTask = [...tasks];

		tempTask.push(task)
		setTasks(tempTask);
	}

	return (
		<>
			<TaskForm add={addTask} />
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pt-4'>
				{tasks.map((task, i) => {
					return (
						<Task
							key={i}
							task={task}
							complete={completeTask}
							remove={deleteTask}
						/>
					);
				})}
			</div>
		</>
	);
};

export default TaskList;
