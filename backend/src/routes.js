const express = require('express');

const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/sessions', SessionController.create);

routes.route('/ongs')
    .get(OngController.index)
    .post(OngController.store)
    .put();

routes.route('/incidents')
    .get(IncidentController.index)
    .post(IncidentController.store);

routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;