var models = require('../models');


models.sequelize.sync().then(function() {
    /**
     * Listen on provided port, on all network interfaces.
     */
    server.listen(port, function() {
        debug('Express server listening on port ' + server.address().port);
    });
    server.on('error', onError);
    server.on('listening', onListening);
});