Séries de tutoriels pour une prise en main simple de react.

# Aperçu du projet
Le projet initial aura gloabalement l'arborescence suivante :

```
< NOM DE VOTRE PROJET >
├── node_modules
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── serviceWorker.js
│
├──  .gitignore
├──  package-lock.json
├──  package.json
├──  README.md
├──  yarn.lock

```
## Dossier node_modules
Contient l'ensemble des paquets installés pour le fonctionnement de l'application.
C'est également à l'intérieur de celui-ci que se trouveront les paquets que vous aurez installé (ex: axios, react-router-com, etc...).
```
node_modules
├── .bin
├── @babel
├── @csstools
├── @mrmlnc
├── @nodelib
├── ....
├── react-router-dom
```
## Dossier public
Principalement non utilisé  pour la conception de notre application, il contient néanmoins 3 fichiers :
```
public
├── favicon.ico
├── index.html
└── manifest.json
```
favicon.icon : contient l'icone "react" affiché sur l'onglet de chaque page web du projet.
index.html: Fichier de base contenant notre id <App> pour injecter nos composants
manifest.json: Objet Json contenant les informations de votre site pour le navigateur. Ces informations seront utilisées dans le cadre d'une web application ou lorsque votre site est enregistré sur l'écran d'accueil mobile ou bureau de l'utilisateur.

### Démarrez l'application:

```
$ npm start

```

