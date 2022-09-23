import PropType from 'prop-types';
import { useState } from 'react';

export const GreetingFunc = ({ name }) => {

  const [age, setAge]=useState(1)

  const birthday=()=>{
    setAge(age+1)
  }

	return (
		<div>
			<h1>Hola {name}</h1>
			<h2>Tu edad es: {age}</h2>
      <button onClick={birthday}>Cumplir años</button>
		</div>
	);
};

GreetingFunc.propTypes = {
	name: PropType.string,
};
