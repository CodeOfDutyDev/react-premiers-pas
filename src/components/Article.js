import React from "react";
import article from "../mocks/article.json";

const Article = (props) => {
	const { match:{ params: { id } }} = props;
	
	return (
		<section>
			{ article.filter(el => el.id === parseInt(id)).map((el, k) => {
      
				return (
					<div key={k}>
						<h1>{el.title}</h1>
						<p>{el.content}</p>
					</div>
				);
			})}
		</section>
	);
};
export default Article;
