import React from "react";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';

export const Main = (props) =>{
		return(
				<div>
					<div>
						<div>
						<MuiThemeProvider>
						<RaisedButton label="Change the data" onClick={() => props.changeUsername()} />
					</MuiThemeProvider>
						</div>
					</div>
				</div>
		);
};
