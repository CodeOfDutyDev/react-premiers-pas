Séries de tutoriels pour une prise en main simple de react.

# Comprendre le state
Dans cette 5ème leçon, nous allons aborder le state.

## Le state c'est quoi ?
state est une fonctionnalité disponible uniquement pour les classes. Cependant dans la version 
React 16.8, les Hooks ont été introduits et le state est à présent accessible depuis les fonctions via useState.

## Notions abordées
* state 

## Notions pratiquées
* initianiliser le state
* modifier le state

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
