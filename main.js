casper.start('http://sales.jjjdistributors.com/', function() {
    casper.waitForSelector('#topcategories > div.title', 'Page loaded');
});

casper.run();