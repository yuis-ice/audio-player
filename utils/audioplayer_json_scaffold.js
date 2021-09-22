
const basedir = "../"
const dir = "N:/_ASMR/_tmp/"

// 
// scaffold/generate json file given the mp3 files on a directory for Audioplayer
// 

const fs = require('fs');
const dirTree = require("directory-tree");

const tree = dirTree(dir, { attributes: ['mode', 'mtime', 'extension', 'type', 'size'] });
const files = tree.children.filter(a => a.type == "file" && a.extension == ".mp3");

const obj = files.map(function (a, i) { 
    return { 
        id: i, 
        title: a.name.match(/(.*)\.mp3$/)[1], 
        src: basedir + a.name.match(/(.*)\.mp3$/)[1] + ".jpg", 
        path: basedir + a.name 
    }
});

const json = JSON.stringify(obj, null, 2);

fs.writeFileSync("./audioplayer.json.generated.json", json)

console.log("y.");
