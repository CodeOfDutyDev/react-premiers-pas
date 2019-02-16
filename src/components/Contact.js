import React, { Component } from 'react';

/*
 Avec React nous pouvons écrire nos classes sans avoir à utiliser la méthode constructor et son mot-clé super.
 react-create-app utilise le plugin Babel pour compiler le code afin de nous alléger l'écriture.

 class Contact extends Component{
     state={
         firstname:"",
         lastname:"",
         email:""
     }

     render(){
         return(
             // something jsx
         )
     }
 };

*/


class Contact extends Component {

constructor(props){
    super(props)
// Initianilisation de notre state
    this.state= {
        firstname:"",
        lastname:"",
        email:""
    }
    this.handleChange = this.handleChange.bind(this)
}

// charger le state lors de la saisie de texte dans nos inputs
    handleChange(e){
        e.preventDefault()
        const value = e.target.value;
        this.setState({[e.target.name]:value})
    }

    render(){
        return(
            <section>
                <h1>Me contacter</h1>
                <form >
{/* champ prénom */}
                    <div>
                    <input 
                        onChange={this.handleChange}
                        name="firstname"
                        type="text"
                        placeholder="prénom"
                        value={this.state.firstname}
                        />
                    </div>
{/* champ nom */}
                    <div>

                    <input 
                        onChange={this.handleChange}
                        name="lastname"
                        type="text"
                        placeholder="nom"
                        value={this.state.lastname}
                        />
                    </div>
{/* champ email */}
                    <div>

                    <input 
                        onChange={this.handleChange}
                        name="email"
                        type="mail"
                        placeholder="email"
                        value={this.state.email}
                        />
                    </div>

                    <input type="button" value="valider"/>
                </form>
            </section>
        )
    }
};

export default Contact