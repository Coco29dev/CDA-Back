# API Blagues Carambar

Ce repository contient une API RESTful pour gérer une collection de blagues Carambar, développée dans le cadre d'un projet de sélection CDA.

##  Fonctionnalités

L'API propose les endpoints suivants :

- **GET /api/v1/blagues** : Récupérer toutes les blagues
- **GET /api/v1/blagues/:id** : Récupérer une blague par son ID
- **GET /api/v1/blagues/random** : Récupérer une blague aléatoire
- **POST /api/v1/blagues** : Ajouter une nouvelle blague
- **PUT /api/v1/blagues/:id** : Mettre à jour une blague existante
- **DELETE /api/v1/blagues/delete/:id** : Supprimer une blague

##  Technologies utilisées

- Node.js
- Express.js
- Sequelize (ORM)
- SQLite (Base de données)
- CORS

##  Installation

1. Clonez le repository :
```bash
git clone https://github.com/Coco29dev/CDA-Back.git
cd CDA-Back
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur :
```bash
node index.js
```


##  API Déployée

L'API est déployée sur Render.com et est accessible à l'adresse suivante :
[https://api-carambar.onrender.com/api/v1/blagues](https://api-carambar.onrender.com/api/v1/blagues)

##  Documentation API

La documentation complète de l'API est disponible via Swagger à l'adresse :
[https://api-carambar.onrender.com/api-docs](https://api-carambar.onrender.com/api-docs)

##  Tests

Vous pouvez tester l'API en utilisant des outils comme Postman ou cURL.

Exemple de requête pour récupérer une blague aléatoire :
```bash
curl https://api-carambar.onrender.com/api/v1/blagues/random
```

##  Structure du projet

```
CDA-Back/
├── app.js                  # Point d'entrée Express
├── index.js                # Serveur HTTP
├── config/
│   └── database.js         # Configuration de la connexion à la base de données
├── controllers/
│   └── blagueController.js # Contrôleur pour les routes des blagues
├── models/
│   └── blague.js           # Modèle Sequelize pour les blagues
├── routes/
│   └── v1/
│       └── blagueRoute.js  # Routes API pour les blagues
├── swagger.json            # Documentation Swagger de l'API
└── database.db             # Base de données SQLite
```

##  Licence

Ce projet est sous licence ISC. Voir le fichier `package.json` pour plus d'informations.

##  Liens utiles

- [Repository Frontend](https://github.com/Coco29dev/CDA-Front)
- [Application Web déployée](https://coco29dev.github.io/CDA-Front/)
