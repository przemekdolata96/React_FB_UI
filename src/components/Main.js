require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import Post from './Post.js';

class AppComponent extends React.Component {
	constructor(props){
		super(props);
		this.state= {username:'', submitted: false};

		 this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    	this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
    	this.usernameLogOutHandler= this.usernameLogOutHandler.bind(this);
	}

  usernameChangeHandler(){
  	this.setState({username: event.target.value});
  }	

  usernameSubmitHandler(){
  	event.preventDefault();
  	this.setState({submitted: true, username: this.state.username});
  }

  usernameLogOutHandler(){
	this.setState({submitted: false});
  }



  render() {
    let date=new Date();
    let dateString=`${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    return (
    <div class="posts">
      <Post postHeader="My Header from Post Component" 
      postParagraph="My paragraph form Post Component" 
      postPhoto="https://www.istockphoto.com/resources/images/PhotoFTLP/img_63351521.jpg"
      postDate={dateString}/> 
    </div>
      
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

