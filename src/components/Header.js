require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';


class Header extends React.Component {
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		return (
			<div className="header-wrapper">
				<div className="header-photo">
					<img src={this.props.userphoto} />
				</div>
				<div className="header-content">
					<h3>{this.props.author}</h3>
					<h4>{this.props.date}</h4>
					<button>...</button>
				</div>
			</div>
		);
	}
}

export default Header;