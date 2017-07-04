import React from 'react';
import {connect} from "react-redux";
import { push } from 'react-router-redux';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


import {orangeA100, orangeA200, orangeA400, orangeA700} from 'material-ui/styles/colors';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
const muiTheme = getMuiTheme( {
	  palette: {
	      primary1Color: orangeA400,
	      primary2Color: orangeA400,
	      primary3Color: orangeA400
	  }
	});
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export const LoginC = (props) =>  {

    return (
      <div className="loginContainer">
      <MuiThemeProvider  muiTheme={muiTheme}>
      <div>
      <AppBar
         title="Login"
       />
			 <div className="loginTextContainer">
			 <form>
       <TextField
         hintText="Enter your Username"
         floatingLabelText="Username" style ={{width: '100%'}}
				 value={props.username}
				 name="username"
         onChange={props.onChange}
         />
       <br/>
         <TextField
           type="password"
           hintText="Enter your Password"
           floatingLabelText="Password" style ={{width: '100%'}}
					 value={props.password}
					 name="password"
           onChange={props.onChange}
           />
         <br/>
         <RaisedButton onClick={props.handleFormSubmit} label="Submit" primary={true} style ={{display: 'block', margin: '30px'}} />
				 </form>
				 </div>
     </div>
     </MuiThemeProvider>
      </div>
    );

}
