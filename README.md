# fretboard-notes
This project was created to help generate exercises that can be played in music software to aid in the memorization of every note on the guitar fretboard.   

The code is not yet super robust, it just gets the job done within the limited scope defined in the Project Goal.

# Project Goal
* This NodeJS app generates a MusicXml file that can be imported into a music application.  

* The MusicXml file will have a consistent structure:
    *  The instrumentation is intended for a six-string guitar in standard A440 Hz tuning.
    *  6/4 time signature
    *  always starts in the key of C
    *  always has a leading "header" measure of quarter note rests

* the file will contain a random order of different note combinations
* The notes ascending pattern will alternate every measure between ascending and descending
* notes can optionally be all natural, all enharmonic or a mix of natural and enharmonic notes
* everytime the application runs a new `output/fretboard-random-notes.xml` file is generated or replaced.

# How it works
The measures that include the note patterns for the exercises are already defined in MusicXml in the `data/notes.xml` file.
Each measure in this file has an id so they can be selected.
The application uses the `data/template.xml` file for a basis.
It then uses the specified notes to include to find the measures to include from the notse.xml.
It adds these measures to the template's list of measures to get the final MusicXml to be saved to disk.

# Setup
Run `npm install` to install project dependencies

# Execution
To run the program to produce the output music xml:
* in the `app/app.js` file, edit the `notes` array to specify the type of notes to be included.
    * the type of notes are listed in the `NOTES` constants.
* save the `app/app.js` file
* generate the output xml file using the following command: `npm run start`   
* After the xml file is generated, import the xml into the application of your choice to view the exercise score.

# MusicXml
The output format of the file is MusicXml. See https://www.musicxml.com/   

This format was chosen because it is accepted in a wide array of music applications and has a strictly defined schema. 

