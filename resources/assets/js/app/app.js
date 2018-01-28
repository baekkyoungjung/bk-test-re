import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {

	constructor(props) {
		super(props);
		[
		].forEach(method => (this[method] = this[method].bind(this)));

		this.state = {
		};
	}

	render() {
		return (
			<div>
				ᄌᆼ긴
			</div>
		);
	}
}

render(<App />, document.getElementById('react-root'));

export default App;
