import 'bootstrap/dist/css/bootstrap.css';
import { Link, Route, Routes, Navigate, Outlet } from 'react-router-dom';

import { HomePage } from './pages/home/HomePage';
import { AboutPage } from './pages/about-faqs/AboutPage';
import { NotFoundPage } from './pages/404/NotFoundPage';
import { ProfilePage } from './pages/profile/ProfilePage';
import { TasksPage } from './pages/tasks/TasksPage';
import { TaskDetailPage } from './pages/tasks/TaskDetailPage';
import { LoginPage } from './pages/auth/LoginPage';
import { useEffect } from 'react';
import { StatePage } from './pages/home/StatePage';

function AppRoutingOne() {
	let logger = false;

	useEffect(() => {
		logger = localStorage.getItem('credentials');
		console.log('User is ', logger);
	}, []);

	const taskList = [
		{
			id: 1,
			name: 'Task 1',
			description: 'My fisrt Task',
		},
		{
			id: 2,
			name: 'Task 2',
			description: 'My Second Task',
		},
	];

	return (
		<>
			<aside className='p-3 text-gray-200 text-xl flex justify-center gap-3 font-medium tracking-wide bg-slate-600 shadow-md rounded-b-sm'>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/login'>Login</Link>
				<Link to='/task/1/edit'>Task 1</Link>
				<Link to='/task/2/edit'>Task 2</Link>
				<Link to='404'>404</Link>
			</aside>
			<div className='container pt-3'>
				<main className='text-xl'>
					<Routes>
						<Route path='/'>
							<Route index element={<HomePage />} />
							<Route path='/state-page' element={<StatePage />} />
							<Route
								path='/login'
								element={logger ? <Navigate to='/' /> : <LoginPage />}
							/>
							<Route path='/tasks' element={<TasksPage />} />
							<Route
								path='/task/:id/edit'
								element={<TaskDetailPage task={taskList} />}
							/>
							<Route
								path='/profile'
								element={
									logger ? <ProfilePage /> : <Navigate to='/login' replace />
								}
							/>
							<Route path='/about' element={<AboutPage />} />
							<Route path='*' element={<NotFoundPage />} />
						</Route>
					</Routes>
				</main>
			</div>
		</>
	);
}

export default AppRoutingOne;
