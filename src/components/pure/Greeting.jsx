import { Component } from 'react';
import PropType from 'prop-types';

export class Greeting extends Component {
	constructor(props) {
		super(props);
		this.state = {
			age: 29,
		};
	}

	birthday = () => {
		this.setState(prevState => ({
			age: prevState.age + 1,
		}));
	};

	render() {
		return (
			<div>
				<h1>Hola {this.props.name}</h1>
				<h2>Tu edad es: {this.state.age}</h2>
				<button onClick={this.birthday}>Cumplir años</button>
			</div>
		);
	}
}

//CREAR PROPS TYPE gestionar los tipos de datos que resivira el componente
Greeting.propTypes = {
	name: PropType.string,
};
