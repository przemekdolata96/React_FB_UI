require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';


class Content extends React.Component {
	
	render(){
		return (
			<div className="content-wrapper">
				<div className="content-photo">
					<img src={this.props.contentphoto}/>
				</div>
				<h4>{this.props.contentheader}</h4>
				<p>{this.props.contenttext}</p>
			</div>
		);
	}
}

export default Content;
