import React, { Fragment } from "react";
import post from "../mocks/article.json";
import Comments from "./Comments";

/*

Component origin : Article
Url cible : /article/:id

Desc: 
Affiche le post par son id passé en params d'url

Spec: 
id transmis est de type <string> tandis que le id de l'objet post est de type <number>.
utilisation de parseInt pour passé la props en type number.

*/

const Article = ({
	match: {
		params: { id }
	}
}) => {
	const { author, content, comments } = post.find(el => el.id === parseInt(id));

	return (
		<section>
			{
				<Fragment>
					<h3>{author}</h3>
					<p>{content}</p>
					<Comments data={comments} />
				</Fragment>
			}
		</section>
	);
};
export default Article;
