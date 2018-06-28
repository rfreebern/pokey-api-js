var Pokey = function (term) {
    var cheerio = require('cheerio');
    var fetch = require('isomorphic-fetch');

    termEncoded = encodeURIComponent(term);

    return fetch('http://yellow5.com/pokey/search/?kw=' + termEncoded)
        .then(function (response) {
            if (response.status >= 400) {
                throw new Error('Sorry, there was an error.');
            }
            return response.text();
        })
        .then(function (text) {
            var $ = cheerio.load(text);
            var strips = $('h3');
            var links = $('a');
            var images = $('img');
            var texts = $('i');

            var results = new Array(strips.length).fill().map(Object);
            strips.each(function (i, element) {
                results[i].title = $(element).text();
            });
            links.each(function (i, element) {
                results[i].link = $(element).attr('href');
            });
            images.each(function (i, element) {
                results[i].image = $(element).attr('src');
            });
            texts.each(function (i, element) {
                results[i].text = $(element).text();
            });

            return results;
        });
};
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Pokey;
}
