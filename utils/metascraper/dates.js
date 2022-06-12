const fs = require("fs");
const JSDOM = require("jsdom").JSDOM;
const { Readability, isProbablyReaderable } = require("@mozilla/readability");
const metascraper = require("metascraper")([
  require("metascraper-author")(),
  require("metascraper-date")(),
  require("metascraper-title")(),
]);

const path = process.argv[2];
(async () => {
  try {
    var article_json = JSON.parse(fs.readFileSync(path));
    var html = article_json.bodyHTML;
    var url = article_json.url;

    try {
      const metadata = await metascraper({
        html,
        url,
      });
      console.log(metadata.date);
      console.log("split\nsplit");
      console.log(metadata.author);
      console.log("split\nsplit");
      console.log(metadata.title);
      console.log("split\nsplit");
    } catch (error) {
      console.log("N/A");
      console.log("split\nsplit");
      console.log("N/A");
      console.log("split\nsplit");
      console.log("N/A");
      console.log("split\nsplit");
    }
    try {
      var doc = new JSDOM(html, {
        url: url,
      });
      if (isProbablyReaderable(doc.window.document)) {
        let reader = new Readability(doc.window.document);
        let article = reader.parse();
        console.log(article.content);
        console.log("split\nsplit");
        console.log(article.textContent);
      } else {
        console.log("not readable");
        console.log("split\nsplit");
        console.log("not readable");
      }
      // clearTimeout(timer)
    } catch (error) {
      // console.log(error)
      console.log("article.content");
      console.log("split\nsplit");
      console.log("article.textContent");
    }
  } catch (error) {
    // console.log(error)
    console.log("N/A");
    console.log("split\nsplit");
    console.log("N/A");
    console.log("split\nsplit");
    console.log("N/A");
    console.log("split\nsplit");
    console.log("article.content");
    console.log("split\nsplit");
    console.log("article.textContent");
  }
})();
