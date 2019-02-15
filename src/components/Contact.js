import React, { Component } from 'react';

/*

Le state peut aussi être prédéfini par des données reçues en props.
On destructure notre props pour obtenir notre objet data.
data peut également être destructuré pour récupérer nos propriétés
ex : const { lastname } = props.data;
ex:  const { data: { lastname }} = props

*/
class Contact extends Component {

    constructor({ data }){

        super({data})

        // Initianilisation de notre state
        this.state= {
            firstname: data.firstname,
            lastname:data.lastname,
            email:data.email
        }
    }
        
// bind fonction.
    handleChange = this.handleChange.bind(this);

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