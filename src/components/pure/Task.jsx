import PropType from 'prop-types';
import { useEffect } from 'react';
import { TaskClass } from '../../models/task.class';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';
import { LEVELS } from '../../models/levels.enum';

const Task = ({ task }) => {
	useEffect(() => {
		console.log('Create task');
		return () => {
			console.log(`Task: ${task.name} is going to`);
		};
	}, [task]);

	function taskLevelBadge() {
		switch (task.level) {
			case LEVELS.NORMAL:
				return (
					<dd className='ring-1 rounded px-2 ring-emerald-700 bg-emerald-500 text-yellow-50 capitalize'>
						{task.level}
					</dd>
				);
			case LEVELS.URGENT:
				return (
					<dd className='ring-1 rounded px-2 ring-red-700 bg-red-500 text-yellow-50 capitalize'>
						{task.level}
					</dd>
				);
			case LEVELS.BLOCKING:
				return (
					<dd className='ring-1 rounded px-2 ring-gray-700 bg-gray-500 text-yellow-50 capitalize'>
						{task.level}
					</dd>
				);
		}
	}

	return (
		<div>
			<h1 className='text-slate-800 py-2'>{task.name}</h1>
			<h3 className='text-slate-600 pl-2 pb-2'>{task.description}</h3>
			<h5 className='text-slate-600 pl-2 flex gap-2'>
				State: {taskLevelBadge()}
			</h5>
			<h5 className='text-slate-600 pl-2 flex gap-2 mt-0.5'>
				This task is:
				{task.completed ? (
					<BsToggleOn className='text-slate-600 text-2xl' />
				) : (
					<BsToggleOff className='text-slate-600 text-2xl' />
				)}
			</h5>
			<div className='pl-2 mt-3'>
					<MdDeleteForever className='text-red-400 text-3xl' />
			</div>
		</div>
	);
};
Task.propType = {
	task: PropType.instanceOf(TaskClass),
};

export default Task;
