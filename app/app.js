const Convert = require("xml-js");
const FileSystem = require("./modules/file-system");

const MUSIC_XML = {
  ROOT: "score-partwise",
  PART: "part",
  MEASURE: "measure",
};

const convertOptions = { compact: true };

const templateXml = FileSystem.readFile("data/template.xml");
const score = Convert.xml2js(templateXml, convertOptions);
const scoreMeasures = [
  score[MUSIC_XML.ROOT][MUSIC_XML.PART][MUSIC_XML.MEASURE],
];

const noteMeasures = getNoteMeasures("flat");

const measures = [].concat(scoreMeasures, noteMeasures);

measures.forEach((measure, index) => {
  measure._attributes.number = index + 1;
});

score[MUSIC_XML.ROOT][MUSIC_XML.PART][MUSIC_XML.MEASURE] = measures;

const musicXml = Convert.js2xml(score, convertOptions);
output(musicXml);

function output(xml) {
  FileSystem.makeDir("output");
  FileSystem.writeDataToFile("output/fretboard-random-notes.xml", xml);
}

function getNoteMeasures(noteType) {
  const notesXml = FileSystem.readFile(`data/${noteType}-notes.xml`);
  const notes = Convert.xml2js(notesXml, convertOptions);

  return notes[MUSIC_XML.ROOT][MUSIC_XML.PART][MUSIC_XML.MEASURE];
}
