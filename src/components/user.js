import React from "react";

export const User = (props) =>  {
		return(
				<div style ={{fontSize: '30px', margin: '30px'}}>
						<h1>User Detail</h1>

						<div>
							<div>
								<p>User Name: {props.username}</p>
								<p>User Email: {props.userage}</p>
						  </div>
					</div>
				</div>
		);
};
