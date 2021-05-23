# fretboard-notes

# Project Goal
* This NodeJS app generates a MusicXml file that can be imported into Guitar Pro

* The MusicXml file will have a consistent structure:
    *  6/4 time
    *  always starts in the key of C
    *  always has a leading "header" measure of quarter note rests

* the file will contain a random selection of seven different notes
* The notes ascending pattern will alternate from up to down
* notes can optionally be all natural, all enharmonic or a mix of natural and enharmonic notes

# Programming Conventions:
* xml is read or written to files on disk
* xml files will be read from file to get the string representation of the xml
* no XmlDOM will be used in this project
* all xml string values from files will be converted to JS for use
* JS objects are converted to xml strings which will then get written to a file as its output

# Phases

## Phase I - Template MusicXml
Just get the template MusicXml to import and export as-is and make sure it works with Guitar Pro. 
* create a template MusicXml file that has all the required static content 
* read the template MusicXml from disk
* convert it to JS  
* convert it back to a xml string
* output xml string as a new MusicXml file 

Acceptance Criteria:
* The new MusicXml file can be imported into Guitar Pro
* Guitar Pro displays the content of the MusicXml:
    * Title
    * Sub-title
    * Tempo will be the GP default because this information is not stored with MusicXml
    * The first measure contains:
        * Time Signature of 6/4
        * Key is C
        * 6 quarter note rests
    
