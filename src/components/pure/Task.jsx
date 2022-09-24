import PropType from 'prop-types';
import { TaskClass } from '../../models/task.class';

const Task = ({ task }) => {
	return (
		<div>
			<h1>Name : {task.name}</h1>
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
