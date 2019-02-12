Séries de tutoriels pour une prise en main simple de react.

# Création d'un composant React
Dans cette 4ème leçon, nous allons aborder les props.

## Notions abordées
* props 

## Notions pratiquées
* Récupérer les données de notre props depuis les paramètres l'url.

# Devenez Mr Props

### Qu'est ce qu'une "props" ?
 Dans React les propriétés ou accessoires communément appelées  props sont des données que l'on transmet d'un composant à un autre.

### Comment utiliser les props ?
Nous pouvons utiliser les props à travers nos paramètres d'url ( souvenez vous de notre route "/article/:id" ) ou en la définissant au sein du component recevant la props.

**exemples** :

***props depuis notre route***

<img src="https://i.goopics.net/OyWJK.png" width="500px" /> 

```


const Article = props => (
	
  <section>
    {article
      .filter(el => el.id === parseInt(props.match.params.id))
      .map((el, k) => {
		  console.log(props)
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

```
