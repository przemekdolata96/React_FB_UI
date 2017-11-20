require('normalize.css/normalize.css');
require('styles/FriendList.scss');

import React from 'react';
import Friend from './Friend.js';

class FriendList extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="friend-list-wrapper">
				<Friend/>
			</div>
		);
	};
}

export default FriendList;