import React from "react";
import article from "../mocks/article.json";

const Article = (props) => (
	
		<section>
			{ article.filter(el => el.id === parseInt(props.match.params.id)).map((el, k) => {
      
				return (
					<div key={k}>
						<h1>{el.title}</h1>
						<p>{el.content}</p>
					</div>
				);
			})}
		</section>
);
export default Article;
