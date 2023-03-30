var cache = require('*/cartridge/scripts/middleware/cache');

var server = require('server');

server.use('Recommendations', server.middleware.include, cache.applyDefaultCache, function (req, res, next) {
    var selectikaHelper = require('*/cartridge/scripts/helpers/selectikaHelpers');
    var settings = require('*/cartridge/scripts/helpers/selectikaSettings');

    var productId = req.querystring.productID;
    var merchantId = settings.merchantId();
    var lang = selectikaHelper.getLocaleLanguage(req.locale.id);

    res.render('selectika/recommendationsInclude', {
        merchantId: merchantId,
        productId: productId,
        lang: lang
    });

    next();
});

module.exports = server.exports();