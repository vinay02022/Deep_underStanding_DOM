let matchlink=("https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/full-scorecard",cb);
const request =require("request");
const fs=require("fs");
const cheerio=require("cheerio")
function cb(error,response,data){
    fs.writeFileSync("./match.html",data)
}
let matchHtmlkaData=fs.readFileSync("./match.html","utf8");
let myDocument=cheerio.load(matchHtmlkaData)
let bothBowlingTables=myDocument(".table.bowler")
console.log(bothBowlingTables);
