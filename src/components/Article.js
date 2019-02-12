import React from "react";
import post from "../mocks/article.json";

/*

Component origin : Article
Url cible : /article/:id

Desc: 
Affiche le post par son id passé en params d'url

Spec: 
id transmis est de type <string> tandis que le id de l'objet post est de type <number>.
utilisation de parseInt pour passé la props en type number.

*/

const Article = props => (
  <section>
    {post
      .filter(el => el.id === parseInt(props.match.params.id))
      .map((el, k) => {

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
