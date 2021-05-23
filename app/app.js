const Convert = require('xml-js');
const FileSystem = require('./modules/file-system');

const convertOptions = { compact: true };

const templateXml = FileSystem.readFile("data/template.xml");
const template = Convert.xml2js(templateXml, convertOptions);
const musicXml = Convert.js2xml(template, convertOptions);
output(musicXml);

function output(xml) {
    FileSystem.makeDir('output');
    FileSystem.writeDataToFile('output/fretboard-random-notes.xml', xml);
}
