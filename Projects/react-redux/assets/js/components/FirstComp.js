import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Layout extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Prakash Kumar',
			health: '55',
			level: '1',
			lowLevelClass: 'danger-red'
		};
	}
	clickImage = () => {
		this.setState({ health: this.state.health - 5 }, () => {
			console.log('Hey I clicked the Image.');
		});
	};
	render() {
		return (
			<div id={'parent'}>
				<Header />
				<div
					className={`blue-bg ${
						this.state.health < 55 ? this.state.lowLevelClass : ''
					}`}
				>
					<div className="user-info">
						<h3>Name : {this.state.name}</h3>
						<h3>Level : {this.state.level}</h3>
					</div>
					<ImageComp imgClick={this.clickImage} health={this.state.health} />
				</div>
			</div>
		);
	}
}

class ImageComp extends Component {
	constructor() {
		super();
		this.state = {
			gameOver: 'Sorry your Dead!!!'
		};
	}
	render() {
		return (
			<div className={'img-comp'}>
				<img
					src="/img/icons/512.png"
					alt={'Coding Phase'}
					onClick={this.props.imgClick}
				/>
				<h3>
					Health :
					{this.props.health <= 0 ? this.state.gameOver : this.props.health}
				</h3>
			</div>
		);
	}
}

var Header = () => {
	return (
		<header>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</header>
	);
};
const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
