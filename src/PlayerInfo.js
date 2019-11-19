import React, { Component } from 'react';

const PlayerInfo = (props) => {
	// console.log(props.data, 'data');
	const { name, place, age } = props.data;

	return(
		<div>
			<div className='player-info-container'>
				<div className='player-icon'>
					<i className="fas fa-user"/>
					<p className='cancel' onClick={props.method}>x</p>
				</div>
				<div>
					<div className='player-info'>
						<p className='info-text'>Name :<span> { name }</span></p>
						<p className='info-text'>Place :<span> { place }</span></p>
						<p className='info-text'>Age :<span> { age }</span></p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PlayerInfo;