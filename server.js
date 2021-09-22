#!/usr/bin/env node

const commander = require('commander');
const program = new commander.Command();

program
    .option('-p, --port-http <port>', 'specify port number for http server', 8114)
    .option('-d, --datadir <path>', 'specify data directory', './public')
    .parse(process.argv)
    ;
// if (! process.argv.slice(2).length) program.help() ;

const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const moment = require('moment');

app.use(cors());
app.use(express.static(path.join(__dirname, program.datadir)));

app.get('/', async function (req, res) {
    res.redirect('/audioplayer');
});

app.listen(program.portHttp);

if (!program.hideLog) console.log(moment().format(), "server started...");

