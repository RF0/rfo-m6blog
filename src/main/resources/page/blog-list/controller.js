var thymeleaf = require('view/thymeleaf');

exports.get = function(portal){
    var view = resolve('../../view/blog-list.html');
    var body = thymeleaf.render(view, {});

    portal.response.contentType = 'text/html';
    portal.response.body = body;
}
