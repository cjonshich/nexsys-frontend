const reportController = {};

reportController.getData = function(req, res) {
     res.json({
        status: 'Got data'
     });
};


module.exports = reportController;