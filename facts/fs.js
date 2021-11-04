const fs=require("fs");
const cheerio=require("cheerio");
const { html } = require("cheerio/lib/api/manipulation");
let htmlKaData=fs.readFileSync("./index.html","utf8");
//ab load karo cheerio me jispe "Document " type kaam chahye
let myDocument=cheerio.load(htmlKaData);//html file loaded in cheerio AB KAAND KARO

let h1TagData=myDocument("h1").text();
let pTagData=myDocument("ul li p").text();
console.log(pTagData);

//console.log(h1TagData);
//console.log(myDocument(pTagData).text());

