require('normalize.css/normalize.css');
require('styles/FriendList.scss');

import React from 'react';

class Friend extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="friend-wrapper">
				<img src={this.props.friendPhoto}/>
				<div className="friend-name"></div>
				<div className="friend-last-activity">{this.props.friendLastActivity}</div>
			</div>
		);
	}
}

export default Friend;