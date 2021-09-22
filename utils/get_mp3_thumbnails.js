
const dir = "N:/_ASMR/_tmp/"

// 
// get/generate thumbnail/cover images from mp3 files on a directory
// 

const NodeID3 = require('node-id3');
const fs = require('fs');
const dirTree = require("directory-tree");

const tree = dirTree(dir, { attributes: ['mode', 'mtime', 'extension', 'type', 'size'] })
const files = tree.children.filter(a => a.type == "file" && a.extension == ".mp3")

files.forEach(a => {
    fs.writeFileSync(a.path.match(/(.*)\.mp3$/)[1] + ".jpg", NodeID3.read(a.path).image.imageBuffer, function (err) {
        if (err) throw err;
    });
})

console.log("y.");