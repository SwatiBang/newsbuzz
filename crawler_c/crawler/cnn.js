var express = require('express');
var http = require('http');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

function crawjson(url, category) {
    request(url, function(error, response, html) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html);

            var titles_links_arr = [];

            var i = 0;
            var s = $('title');
            $('body').find('item').each(function(index, element) {
                var linksrc = $(element).children('guid').text();
                var titles_links = {
                    section: category,
                    main_img: "",
                    id: "",
                    link: linksrc,
                    title: "",
                    author: "",
                    release: "",
                    source: "",
                    content: ""
                };

                request(linksrc, function(error, response, html) {
                    if (!error) {

                        var page = cheerio.load(html);
                        var page_var = {
                            link: "",
                            author: "",
                            release: "",
                            body: ""
                        };

                        page('.metadata__byline__author').filter(function() {
                            var data = $(this);
                            title = data.text();

                            page_var.author = title;
                            titles_links.author = title;
                            // json.release = release;
                        })
                        page('.update-time').filter(function() {
                            var data = $(this);
                            titles_links.release = data.text();
                        })

                        page('.pg-headline').filter(function() {
                            var data = $(this);
                            titles_links.title = data.text();
                        })
                        page('.el-editorial-source').filter(function() {
                            var data = $(this);
                            titles_links.source = data.text();
                        })
                        page('p[class=zn-body__paragraph]').filter(function() {
                            var data = $(this);
                            titles_links.content = data.text();
                        })
                        page('div[class=zn-body__paragraph]').filter(function() {
                            var data = $(this);
                            titles_links.content = titles_links.content + data.text();
                        })

                        if (i == 5) {
                            return
                        }
                        if (titles_links.title != "") {
                            titles_links.id = i++;
                            fs.writeFile(category + (titles_links.id) + ".json", "{\"" + category + "\": [" + JSON.stringify(titles_links, null, 4) + "]}", function(err) {

                                console.log(category + ' content successfully written! - to file: ' + category + (titles_links.id) + '.json');
                            })
                        }

                    }

                })


            });
        }
    });
}

crawjson('http://rss.cnn.com/rss/cnn_allpolitics.rss', "politics");
crawjson('http://rss.cnn.com/rss/cnn_showbiz.rss', "entertainment");
crawjson('http://rss.cnn.com/rss/cnn_living.rss', "living");
crawjson('http://rss.cnn.com/rss/cnn_tech.rss', "tech")
crawjson('http://rss.cnn.com/rss/cnn_health.rss', "health")
