
var velocity = require('dw/template/Velocity');

var renderTemplateHelper = require('*/cartridge/scripts/renderTemplateHelper');
var settings = require('*/cartridge/scripts/helpers/selectikaSettings');

function htmlHead() {
    var renderedHtml = renderTemplateHelper.getRenderedHtml({
        merchantId: settings.merchantId()
    }, 'selectika/headerInclude');

    velocity.render(renderedHtml, {
        velocity: velocity
    });
}

exports.htmlHead = htmlHead;