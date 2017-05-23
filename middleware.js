/**
 * Created by faridjafaroff on 5/23/17.
 */
module.exports = function (db) {

    return {
        requireAuthentication: function (req, res, next) {
            var token = req.get('Auth');

            db.user.findByToken(token).then(function (user) {
                req.user = user;
                next();
            }, function (e) {
                res.status(401).send();
            })
        }
    };

};
