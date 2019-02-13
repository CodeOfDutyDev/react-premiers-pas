Séries de tutoriels pour une prise en main simple de react.

# Comprendre les props
Dans cette 4ème leçon, nous allons aborder les props.

## Notions abordées
* props 

## Notions pratiquées
* Récupérer les données de notre props depuis le composant.

**exemples** :

***props depuis notre route***

<img src="https://i.goopics.net/QRb2N.png" width="500px" />

```
import React, { Fragment } from "react";

const Comments = props => (
	<Fragment>
	
	    <h2>commentaires :</h2>
	    
	   { props.data.map((el, k) => (
		<div key={k}>
		    <h3>{el.user}</h3>
		    <p>{el.content}</p>
		</div>
      		))
    	    }
	</Fragment>
);

export default Comments;

```
