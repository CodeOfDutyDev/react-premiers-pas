import React, { Fragment } from "react";

const Comments = props => (
	<Fragment>
		<h2>commentaires :</h2>
		{  
            props.data.map((el, k) => (
			<div key={k}>
				<h3>{el.user}</h3>
				<p>{el.content}</p>
			</div>
        ))
        }
	</Fragment>
);

export default Comments;
