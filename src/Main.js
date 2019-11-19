import React, { Component } from 'react';
import Player from './Player';
import PlayerInfo from './PlayerInfo';



class Main extends Component {
	state = {
		playersCount: 0,
		playersArr : [],
		isClicked: false,
		playerSelected: null
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	handleChange = e => {
		console.log('handle change');
		this.setState({ [e.target.name] : e.target.value });
	}

	handleSubmit = () => {
		console.log('handle submit');
		const { playersCount } = this.state;
		// const alpha = 'abcdefghijklmnopqrstuvwxyz';

		let arr = [];
		for(let i=0; i<playersCount; i++) {
			const name = Math.random().toString(36).substring(7);
			const age = Math.floor(Math.random() * 100);
			const place = Math.random().toString(36).substring(5);

			arr.push({name, age, place, isClicked: false });
		}
		this.setState({ playersArr : arr });
	}


	handleDisplayPlayer = e => {
		// console.log('handleDisplayPlayer', e);
		// const { playersArr } = this.state;
		this.setState({ isClicked: !this.state.isClicked, playerSelected: {...e}});
	}

	handleCancelPlayer = e => {
		this.setState({ isClicked: !this.state.isClicked, playerSelected: null });
	}

	handleEnter = e => {
		console.log('handleEnter');
		if(e.keyCode === 13) {
			this.handleSubmit();
		}
	}

	render() {
		const { playersArr, isClicked, playerSelected } = this.state;
		return(
			<div className='container'>
				<div className='input-wrapper'>
					<label>Number of Players</label>
					<input className='input'
						onKeyDown={ this.handleEnter }
						onChange={ this.handleChange }
						name='playersCount'
						type='number'
					/>
				</div>
				<div>
					<button type='submit' onClick={this.handleSubmit}>submit</button>
				</div>
				<div className='players-list'>
					{
						playersArr.length ?
						!isClicked ?
						playersArr.map((plyr, ind) => <Player key={ind} method={this.handleDisplayPlayer} data={plyr}/>) : 
						<PlayerInfo data={playerSelected} method={this.handleCancelPlayer}/>
						:
						null
					}
				</div>
			</div>
		)
	}
}


export default Main;