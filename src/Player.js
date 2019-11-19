import React, { Component } from 'react';

const Player = (props) => {
	// console.log(isClicked, 'props');
	const { name, place, age, isClicked } = props.data;

	return (
		<div className='player-wrapper' onClick={() => props.method(props.data)}>
			<div className='player-icon'>	
				<i className="fas fa-user"/>
			</div>
			<div className='player-info'>
				<p className='info-text'>Name :<span> { name }</span></p>
				<p className='info-text'>Place :<span> { place }</span></p>
				<p className='info-text'>Age :<span> { age }</span></p>
			</div>
		</div>
	)
}


export default Player;