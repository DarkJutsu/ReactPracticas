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

  const changeState=()=>{
    console.log('Function change state')
  }

	return (
		<div>
			<h1>Your Task</h1>
			<Task task={defaultTask} />
		</div>
	);
};

export default TaskList;
