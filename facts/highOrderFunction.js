let matchlink="https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/full-scorecard";
const request =require("request");
const fs=require("fs");
const cheerio=require("cheerio")
request(matchlink,cb)
/*function cb(error,response,data){//ise ek hi baar chaalao kyiki data filecreate krni hi hoti hi baar abbar kyu create kroge
    //console.log("got the data");
    //console.log(data);
    fs.writeFileSync("./match.html",data)
}*/
function cb(error,response,data){
    //jo bhi function doge chalega
}
let htmlKaData=fs.readFileSync("./match.html","utf8")// padho data hindi mein (utf8)
let myDocument=cheerio.load(htmlKaData);//padhte hue kaaand karo
let bothBowingTables=myDocument(".table.bowler");
fs.writeFileSync(".bowlingtables.html",bothBowingTables+"");
lenTab=bothBowingTables.length
for(let i=0;i<lenTab;i++){
    let bowingtable=myDocument(bothBowingTables[i])
    

}


