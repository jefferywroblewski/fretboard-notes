const NOTES = {
  FLAT: ["Bflat", "Eflat", "Aflat", "Dflat", "Gflat"],
  NATURAL: ["A", "B", "C", "D", "E", "F", "G"],
  SHARP: ["Fsharp", "Csharp", "Gsharp", "Dsharp", "Asharp"],
};

/**
 * Add/remove the different NOTES constants to include in the output
 * in the concat statement below.
 * Note: flat and sharp are used instead of the typical (b) and (#) notations
 * because the MusicXml schema does not allow the "#" character in its measure id attribute.
 * Since these values are used to build the measure id that we use to find the measures to include,
 * we have to spell them out.
 */
const notes = [].concat(NOTES.NATURAL);
console.log('Notes to be included:', notes);

createRandomNotesMusicXml(notes);

function createRandomNotesMusicXml(notes) {
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

  const noteMeasures = getNoteMeasures(notes);

  const measures = [].concat(scoreMeasures, noteMeasures);

  measures.forEach((measure, index) => {
    measure._attributes.number = index + 1;
  });

  score[MUSIC_XML.ROOT][MUSIC_XML.PART][MUSIC_XML.MEASURE] = measures;

  const musicXml = Convert.js2xml(score, convertOptions);
  output(musicXml);

  function output(xml) {
    const outputFile = "output/fretboard-random-notes.xml";
    FileSystem.makeDir("output");
    FileSystem.writeDataToFile(outputFile, xml);
    console.log(`${outputFile} created successfully!`);
  }

  function getNoteMeasures(notesToInclude) {
    const ids = getMeasureIds(notesToInclude);
    const notesXml = FileSystem.readFile(`data/notes.xml`);
    const notes = Convert.xml2js(notesXml, convertOptions);
    const measures = notes[MUSIC_XML.ROOT][MUSIC_XML.PART][MUSIC_XML.MEASURE];

    return ids.reduce((acc, id) => {
      const measureToInclude = measures.find(
        (measure) => measure._attributes.id === id
      );

      if (!!measureToInclude) {
        acc.push(measureToInclude);
      }

      return acc;
    }, []);
  }

  function getMeasureIds(notesToInclude) {
    return shuffle(notesToInclude).map((note, index) => {
      const odd = (index + 1) % 2;
      const direction = odd ? "up" : "down";

      return `${note}-${direction}`;
    });
  }

  /**
   * The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle
   * https://github.com/coolaj86/knuth-shuffle
   * @param array
   * @returns array
   */
  function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
