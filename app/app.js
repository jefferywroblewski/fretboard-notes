import fs from "fs";
import { xml2js, js2xml } from "xml-js";
const xml = fs.readFileSync("data/Fretboard-natural-notes-ref.xml", "utf-8");

const result2 = xml2js(xml, { compact: true });
console.log(result2);


const flatNotes = {
    "_declaration": {
        "_attributes": {
            "version": "1.0",
            "encoding": "UTF-8"
        }
    },
    "_doctype": "score-partwise PUBLIC\n        \"-//Recordare//DTD MusicXML 3.1 Partwise//EN\"\n        \"http://www.musicxml.org/dtds/partwise.dtd\"",
    "score-partwise": {
        "_attributes": {
            "version": "2.0"
        },
        "work": {
            "work-title": {
                "_text": "FRETBOARD"
            }
        },
        "identification": {
            "encoding": {
                "encoding-date": {
                    "_text": "2021-05-22"
                },
                "software": {
                    "_text": "Guitar Pro 7.5.5"
                },
                "supports": {
                    "_attributes": {
                        "attribute": "new-system",
                        "value": "yes",
                        "element": "print",
                        "type": "yes"
                    }
                }
            }
        },
        "defaults": {
            "scaling": {
                "millimeters": {
                    "_text": "6.4"
                },
                "tenths": {
                    "_text": "40"
                }
            },
            "page-layout": {
                "page-height": {
                    "_text": "1850"
                },
                "page-width": {
                    "_text": "1310"
                }
            }
        },
        "credit": [
            {
                "credit-words": {
                    "_attributes": {
                        "valign": "top",
                        "font-size": "24",
                        "justify": "center"
                    },
                    "_text": "FRETBOARD"
                }
            },
            {
                "credit-words": {
                    "_attributes": {
                        "valign": "top",
                        "font-size": "14",
                        "justify": "center"
                    },
                    "_text": "Flat (b) Notes"
                }
            }
        ],
        "part-list": {
            "score-part": {
                "_attributes": {
                    "id": "P1"
                },
                "part-name": {
                    "_text": "Clean Guitar"
                },
                "part-abbreviation": {
                    "_text": "el.guit."
                },
                "midi-instrument": {
                    "_attributes": {
                        "id": "P1"
                    },
                    "midi-channel": {
                        "_text": "1"
                    },
                    "midi-bank": {
                        "_text": "1"
                    },
                    "midi-program": {
                        "_text": "28"
                    },
                    "volume": {
                        "_text": "80"
                    },
                    "pan": {
                        "_text": "0"
                    }
                }
            }
        },
        "part": {
            "_attributes": {
                "id": "P1"
            },
            "measure": [
                {
                    "_attributes": {
                        "number": "1"
                    },
                    "attributes": {
                        "divisions": {
                            "_text": "1"
                        },
                        "key": {
                            "fifths": {
                                "_text": "-1"
                            },
                            "mode": {
                                "_text": "major"
                            }
                        },
                        "time": {
                            "beats": {
                                "_text": "6"
                            },
                            "beat-type": {
                                "_text": "4"
                            }
                        },
                        "staves": {
                            "_text": "2"
                        },
                        "clef": [
                            {
                                "_attributes": {
                                    "number": "1"
                                },
                                "sign": {
                                    "_text": "G"
                                },
                                "line": {
                                    "_text": "2"
                                }
                            },
                            {
                                "_attributes": {
                                    "number": "2"
                                },
                                "sign": {
                                    "_text": "TAB"
                                },
                                "line": {
                                    "_text": "5"
                                }
                            }
                        ],
                        "staff-details": [
                            {
                                "_attributes": {
                                    "number": "1"
                                },
                                "staff-tuning": [
                                    {
                                        "_attributes": {
                                            "line": "1"
                                        },
                                        "tuning-step": {
                                            "_text": "E"
                                        },
                                        "tuning-octave": {
                                            "_text": "2"
                                        }
                                    },
                                    {
                                        "_attributes": {
                                            "line": "2"
                                        },
                                        "tuning-step": {
                                            "_text": "A"
                                        },
                                        "tuning-octave": {
                                            "_text": "2"
                                        }
                                    },
                                    {
                                        "_attributes": {
                                            "line": "3"
                                        },
                                        "tuning-step": {
                                            "_text": "D"
                                        },
                                        "tuning-octave": {
                                            "_text": "3"
                                        }
                                    },
                                    {
                                        "_attributes": {
                                            "line": "4"
                                        },
                                        "tuning-step": {
                                            "_text": "G"
                                        },
                                        "tuning-octave": {
                                            "_text": "3"
                                        }
                                    },
                                    {
                                        "_attributes": {
                                            "line": "5"
                                        },
                                        "tuning-step": {
                                            "_text": "B"
                                        },
                                        "tuning-octave": {
                                            "_text": "3"
                                        }
                                    },
                                    {
                                        "_attributes": {
                                            "line": "6"
                                        },
                                        "tuning-step": {
                                            "_text": "E"
                                        },
                                        "tuning-octave": {
                                            "_text": "4"
                                        }
                                    }
                                ]
                            },
                            {
                                "_attributes": {
                                    "number": "2"
                                },
                                "staff-lines": {
                                    "_text": "6"
                                },
                                "staff-tuning": [
                                    {
                                        "_attributes": {
                                            "line": "1"
                                        },
                                        "tuning-step": {
                                            "_text": "E"
                                        },
                                        "tuning-octave": {
                                            "_text": "2"
                                        }
                                    },
                                    {
                                        "_attributes": {
                                            "line": "2"
                                        },
                                        "tuning-step": {
                                            "_text": "A"
                                        },
                                        "tuning-octave": {
                                            "_text": "2"
                                        }
                                    },
                                    {
                                        "_attributes": {
                                            "line": "3"
                                        },
                                        "tuning-step": {
                                            "_text": "D"
                                        },
                                        "tuning-octave": {
                                            "_text": "3"
                                        }
                                    },
                                    {
                                        "_attributes": {
                                            "line": "4"
                                        },
                                        "tuning-step": {
                                            "_text": "G"
                                        },
                                        "tuning-octave": {
                                            "_text": "3"
                                        }
                                    },
                                    {
                                        "_attributes": {
                                            "line": "5"
                                        },
                                        "tuning-step": {
                                            "_text": "B"
                                        },
                                        "tuning-octave": {
                                            "_text": "3"
                                        }
                                    },
                                    {
                                        "_attributes": {
                                            "line": "6"
                                        },
                                        "tuning-step": {
                                            "_text": "E"
                                        },
                                        "tuning-octave": {
                                            "_text": "4"
                                        }
                                    }
                                ]
                            }
                        ],
                        "transpose": {
                            "_attributes": {
                                "number": "1"
                            },
                            "diatonic": {
                                "_text": "0"
                            },
                            "chromatic": {
                                "_text": "0"
                            },
                            "octave-change": {
                                "_text": "-1"
                            }
                        }
                    },
                    "harmony": [
                        {
                            "root": {
                                "root-step": {
                                    "_text": "C"
                                },
                                "root-alter": {
                                    "_text": "0"
                                }
                            },
                            "kind": {
                                "_text": "other"
                            },
                            "frame": {
                                "frame-strings": {
                                    "_text": "6"
                                },
                                "frame-frets": {
                                    "_text": "5"
                                },
                                "first-fret": {
                                    "_text": "6"
                                },
                                "frame-note": {
                                    "string": {
                                        "_text": "6"
                                    },
                                    "fret": {
                                        "_text": "6"
                                    }
                                }
                            }
                        },
                        {
                            "root": {
                                "root-step": {
                                    "_text": "C"
                                },
                                "root-alter": {
                                    "_text": "0"
                                }
                            },
                            "kind": {
                                "_text": "other"
                            },
                            "frame": {
                                "frame-strings": {
                                    "_text": "6"
                                },
                                "frame-frets": {
                                    "_text": "5"
                                },
                                "first-fret": {
                                    "_text": "6"
                                },
                                "frame-note": {
                                    "string": {
                                        "_text": "6"
                                    },
                                    "fret": {
                                        "_text": "6"
                                    }
                                }
                            }
                        }
                    ],
                    "direction": {
                        "_attributes": {
                            "directive": "yes"
                        },
                        "direction-type": {
                            "metronome": {
                                "_attributes": {
                                    "default-y": "40",
                                    "parentheses": "no"
                                },
                                "beat-unit": {
                                    "_text": "quarter"
                                },
                                "per-minute": {
                                    "_text": "40"
                                }
                            }
                        },
                        "sound": {
                            "_attributes": {
                                "tempo": "40"
                            }
                        }
                    },
                    "note": [
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            },
                            "notations": {
                                "dynamics": {
                                    "mf": {}
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            },
                            "notations": {
                                "dynamics": {
                                    "mf": {}
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            },
                            "notations": {
                                "dynamics": {
                                    "mf": {}
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            },
                            "notations": {
                                "dynamics": {
                                    "mf": {}
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            },
                            "notations": {
                                "dynamics": {
                                    "mf": {}
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            },
                            "notations": {
                                "dynamics": {
                                    "mf": {}
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "2"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "dynamics": {
                                    "mf": {}
                                },
                                "technical": {
                                    "string": {
                                        "_text": "6"
                                    },
                                    "fret": {
                                        "_text": "6"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "2"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "dynamics": {
                                    "mf": {}
                                },
                                "technical": {
                                    "string": {
                                        "_text": "5"
                                    },
                                    "fret": {
                                        "_text": "1"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "dynamics": {
                                    "mf": {}
                                },
                                "technical": {
                                    "string": {
                                        "_text": "4"
                                    },
                                    "fret": {
                                        "_text": "8"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "dynamics": {
                                    "mf": {}
                                },
                                "technical": {
                                    "string": {
                                        "_text": "3"
                                    },
                                    "fret": {
                                        "_text": "3"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "dynamics": {
                                    "mf": {}
                                },
                                "technical": {
                                    "string": {
                                        "_text": "2"
                                    },
                                    "fret": {
                                        "_text": "11"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "dynamics": {
                                    "mf": {}
                                },
                                "technical": {
                                    "string": {
                                        "_text": "1"
                                    },
                                    "fret": {
                                        "_text": "6"
                                    }
                                }
                            }
                        }
                    ],
                    "backup": {
                        "duration": {
                            "_text": "6"
                        }
                    }
                },
                {
                    "_attributes": {
                        "number": "2"
                    },
                    "harmony": [
                        {
                            "root": {
                                "root-step": {
                                    "_text": "C"
                                },
                                "root-alter": {
                                    "_text": "0"
                                }
                            },
                            "kind": {
                                "_text": "other"
                            },
                            "frame": {
                                "frame-strings": {
                                    "_text": "6"
                                },
                                "frame-frets": {
                                    "_text": "5"
                                },
                                "first-fret": {
                                    "_text": "6"
                                },
                                "frame-note": {
                                    "string": {
                                        "_text": "1"
                                    },
                                    "fret": {
                                        "_text": "6"
                                    }
                                }
                            }
                        },
                        {
                            "root": {
                                "root-step": {
                                    "_text": "C"
                                },
                                "root-alter": {
                                    "_text": "0"
                                }
                            },
                            "kind": {
                                "_text": "other"
                            },
                            "frame": {
                                "frame-strings": {
                                    "_text": "6"
                                },
                                "frame-frets": {
                                    "_text": "5"
                                },
                                "first-fret": {
                                    "_text": "6"
                                },
                                "frame-note": {
                                    "string": {
                                        "_text": "1"
                                    },
                                    "fret": {
                                        "_text": "6"
                                    }
                                }
                            }
                        }
                    ],
                    "note": [
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "1"
                                    },
                                    "fret": {
                                        "_text": "6"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "2"
                                    },
                                    "fret": {
                                        "_text": "11"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "3"
                                    },
                                    "fret": {
                                        "_text": "3"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "4"
                                    },
                                    "fret": {
                                        "_text": "8"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "2"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "5"
                                    },
                                    "fret": {
                                        "_text": "1"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "B"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "2"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "6"
                                    },
                                    "fret": {
                                        "_text": "6"
                                    }
                                }
                            }
                        }
                    ],
                    "backup": {
                        "duration": {
                            "_text": "6"
                        }
                    }
                },
                {
                    "_attributes": {
                        "number": "3"
                    },
                    "attributes": {
                        "key": {
                            "fifths": {
                                "_text": "-2"
                            },
                            "mode": {
                                "_text": "major"
                            }
                        }
                    },
                    "harmony": [
                        {
                            "root": {
                                "root-step": {
                                    "_text": "C"
                                },
                                "root-alter": {
                                    "_text": "0"
                                }
                            },
                            "kind": {
                                "_text": "other"
                            },
                            "frame": {
                                "frame-strings": {
                                    "_text": "6"
                                },
                                "frame-frets": {
                                    "_text": "5"
                                },
                                "first-fret": {
                                    "_text": "11"
                                },
                                "frame-note": {
                                    "string": {
                                        "_text": "6"
                                    },
                                    "fret": {
                                        "_text": "11"
                                    }
                                }
                            }
                        },
                        {
                            "root": {
                                "root-step": {
                                    "_text": "C"
                                },
                                "root-alter": {
                                    "_text": "0"
                                }
                            },
                            "kind": {
                                "_text": "other"
                            },
                            "frame": {
                                "frame-strings": {
                                    "_text": "6"
                                },
                                "frame-frets": {
                                    "_text": "5"
                                },
                                "first-fret": {
                                    "_text": "11"
                                },
                                "frame-note": {
                                    "string": {
                                        "_text": "6"
                                    },
                                    "fret": {
                                        "_text": "11"
                                    }
                                }
                            }
                        }
                    ],
                    "note": [
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "6"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "6"
                                    },
                                    "fret": {
                                        "_text": "11"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "5"
                                    },
                                    "fret": {
                                        "_text": "6"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "4"
                                    },
                                    "fret": {
                                        "_text": "1"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "3"
                                    },
                                    "fret": {
                                        "_text": "8"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "2"
                                    },
                                    "fret": {
                                        "_text": "4"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "1"
                                    },
                                    "fret": {
                                        "_text": "11"
                                    }
                                }
                            }
                        }
                    ],
                    "backup": {
                        "duration": {
                            "_text": "6"
                        }
                    }
                },
                {
                    "_attributes": {
                        "number": "4"
                    },
                    "harmony": [
                        {
                            "root": {
                                "root-step": {
                                    "_text": "C"
                                },
                                "root-alter": {
                                    "_text": "0"
                                }
                            },
                            "kind": {
                                "_text": "other"
                            },
                            "frame": {
                                "frame-strings": {
                                    "_text": "6"
                                },
                                "frame-frets": {
                                    "_text": "5"
                                },
                                "first-fret": {
                                    "_text": "11"
                                },
                                "frame-note": {
                                    "string": {
                                        "_text": "1"
                                    },
                                    "fret": {
                                        "_text": "11"
                                    }
                                }
                            }
                        },
                        {
                            "root": {
                                "root-step": {
                                    "_text": "C"
                                },
                                "root-alter": {
                                    "_text": "0"
                                }
                            },
                            "kind": {
                                "_text": "other"
                            },
                            "frame": {
                                "frame-strings": {
                                    "_text": "6"
                                },
                                "frame-frets": {
                                    "_text": "5"
                                },
                                "first-fret": {
                                    "_text": "11"
                                },
                                "frame-note": {
                                    "string": {
                                        "_text": "1"
                                    },
                                    "fret": {
                                        "_text": "11"
                                    }
                                }
                            }
                        }
                    ],
                    "note": [
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "6"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "1"
                                    },
                                    "fret": {
                                        "_text": "11"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "2"
                                    },
                                    "fret": {
                                        "_text": "4"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "3"
                                    },
                                    "fret": {
                                        "_text": "8"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "4"
                                    },
                                    "fret": {
                                        "_text": "1"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "5"
                                    },
                                    "fret": {
                                        "_text": "6"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "E"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "6"
                                    },
                                    "fret": {
                                        "_text": "11"
                                    }
                                }
                            }
                        }
                    ],
                    "backup": {
                        "duration": {
                            "_text": "6"
                        }
                    }
                },
                {
                    "_attributes": {
                        "number": "5"
                    },
                    "print": {
                        "_attributes": {
                            "new-system": "yes"
                        }
                    },
                    "attributes": {
                        "key": {
                            "fifths": {
                                "_text": "-3"
                            },
                            "mode": {
                                "_text": "major"
                            }
                        }
                    },
                    "harmony": [
                        {
                            "root": {
                                "root-step": {
                                    "_text": "C"
                                },
                                "root-alter": {
                                    "_text": "0"
                                }
                            },
                            "kind": {
                                "_text": "other"
                            },
                            "frame": {
                                "frame-strings": {
                                    "_text": "6"
                                },
                                "frame-frets": {
                                    "_text": "5"
                                },
                                "first-fret": {
                                    "_text": "1"
                                },
                                "frame-note": {
                                    "string": {
                                        "_text": "6"
                                    },
                                    "fret": {
                                        "_text": "4"
                                    }
                                }
                            }
                        },
                        {
                            "root": {
                                "root-step": {
                                    "_text": "C"
                                },
                                "root-alter": {
                                    "_text": "0"
                                }
                            },
                            "kind": {
                                "_text": "other"
                            },
                            "frame": {
                                "frame-strings": {
                                    "_text": "6"
                                },
                                "frame-frets": {
                                    "_text": "5"
                                },
                                "first-fret": {
                                    "_text": "1"
                                },
                                "frame-note": {
                                    "string": {
                                        "_text": "6"
                                    },
                                    "fret": {
                                        "_text": "4"
                                    }
                                }
                            }
                        }
                    ],
                    "note": [
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "2"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "6"
                                    },
                                    "fret": {
                                        "_text": "4"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "5"
                                    },
                                    "fret": {
                                        "_text": "11"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "4"
                                    },
                                    "fret": {
                                        "_text": "6"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "3"
                                    },
                                    "fret": {
                                        "_text": "1"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "2"
                                    },
                                    "fret": {
                                        "_text": "9"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "1"
                                    },
                                    "fret": {
                                        "_text": "4"
                                    }
                                }
                            }
                        }
                    ],
                    "backup": {
                        "duration": {
                            "_text": "6"
                        }
                    }
                },
                {
                    "_attributes": {
                        "number": "6"
                    },
                    "harmony": [
                        {
                            "root": {
                                "root-step": {
                                    "_text": "C"
                                },
                                "root-alter": {
                                    "_text": "0"
                                }
                            },
                            "kind": {
                                "_text": "other"
                            },
                            "frame": {
                                "frame-strings": {
                                    "_text": "6"
                                },
                                "frame-frets": {
                                    "_text": "5"
                                },
                                "first-fret": {
                                    "_text": "1"
                                },
                                "frame-note": {
                                    "string": {
                                        "_text": "1"
                                    },
                                    "fret": {
                                        "_text": "4"
                                    }
                                }
                            }
                        },
                        {
                            "root": {
                                "root-step": {
                                    "_text": "C"
                                },
                                "root-alter": {
                                    "_text": "0"
                                }
                            },
                            "kind": {
                                "_text": "other"
                            },
                            "frame": {
                                "frame-strings": {
                                    "_text": "6"
                                },
                                "frame-frets": {
                                    "_text": "5"
                                },
                                "first-fret": {
                                    "_text": "1"
                                },
                                "frame-note": {
                                    "string": {
                                        "_text": "1"
                                    },
                                    "fret": {
                                        "_text": "4"
                                    }
                                }
                            }
                        }
                    ],
                    "note": [
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "1"
                                    },
                                    "fret": {
                                        "_text": "4"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "2"
                                    },
                                    "fret": {
                                        "_text": "9"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "3"
                                    },
                                    "fret": {
                                        "_text": "1"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "4"
                                    },
                                    "fret": {
                                        "_text": "6"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "5"
                                    },
                                    "fret": {
                                        "_text": "11"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "A"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "2"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "accidental": {
                                "_text": "flat"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "6"
                                    },
                                    "fret": {
                                        "_text": "4"
                                    }
                                }
                            }
                        }
                    ],
                    "backup": {
                        "duration": {
                            "_text": "6"
                        }
                    }
                },
                {
                    "_attributes": {
                        "number": "7"
                    },
                    "attributes": {
                        "key": {
                            "fifths": {
                                "_text": "-4"
                            },
                            "mode": {
                                "_text": "major"
                            }
                        }
                    },
                    "harmony": [
                        {
                            "root": {
                                "root-step": {
                                    "_text": "C"
                                },
                                "root-alter": {
                                    "_text": "0"
                                }
                            },
                            "kind": {
                                "_text": "other"
                            },
                            "frame": {
                                "frame-strings": {
                                    "_text": "6"
                                },
                                "frame-frets": {
                                    "_text": "5"
                                },
                                "first-fret": {
                                    "_text": "9"
                                },
                                "frame-note": {
                                    "string": {
                                        "_text": "6"
                                    },
                                    "fret": {
                                        "_text": "9"
                                    }
                                }
                            }
                        },
                        {
                            "root": {
                                "root-step": {
                                    "_text": "C"
                                },
                                "root-alter": {
                                    "_text": "0"
                                }
                            },
                            "kind": {
                                "_text": "other"
                            },
                            "frame": {
                                "frame-strings": {
                                    "_text": "6"
                                },
                                "frame-frets": {
                                    "_text": "5"
                                },
                                "first-fret": {
                                    "_text": "9"
                                },
                                "frame-note": {
                                    "string": {
                                        "_text": "6"
                                    },
                                    "fret": {
                                        "_text": "9"
                                    }
                                }
                            }
                        }
                    ],
                    "note": [
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "6"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "6"
                                    },
                                    "fret": {
                                        "_text": "9"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "5"
                                    },
                                    "fret": {
                                        "_text": "4"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "4"
                                    },
                                    "fret": {
                                        "_text": "11"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "3"
                                    },
                                    "fret": {
                                        "_text": "6"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "2"
                                    },
                                    "fret": {
                                        "_text": "2"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "1"
                                    },
                                    "fret": {
                                        "_text": "9"
                                    }
                                }
                            }
                        }
                    ],
                    "backup": {
                        "duration": {
                            "_text": "6"
                        }
                    }
                },
                {
                    "_attributes": {
                        "number": "8"
                    },
                    "harmony": [
                        {
                            "root": {
                                "root-step": {
                                    "_text": "C"
                                },
                                "root-alter": {
                                    "_text": "0"
                                }
                            },
                            "kind": {
                                "_text": "other"
                            },
                            "frame": {
                                "frame-strings": {
                                    "_text": "6"
                                },
                                "frame-frets": {
                                    "_text": "5"
                                },
                                "first-fret": {
                                    "_text": "9"
                                },
                                "frame-note": {
                                    "string": {
                                        "_text": "1"
                                    },
                                    "fret": {
                                        "_text": "9"
                                    }
                                }
                            }
                        },
                        {
                            "root": {
                                "root-step": {
                                    "_text": "C"
                                },
                                "root-alter": {
                                    "_text": "0"
                                }
                            },
                            "kind": {
                                "_text": "other"
                            },
                            "frame": {
                                "frame-strings": {
                                    "_text": "6"
                                },
                                "frame-frets": {
                                    "_text": "5"
                                },
                                "first-fret": {
                                    "_text": "9"
                                },
                                "frame-note": {
                                    "string": {
                                        "_text": "1"
                                    },
                                    "fret": {
                                        "_text": "9"
                                    }
                                }
                            }
                        }
                    ],
                    "note": [
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "6"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "1"
                                    },
                                    "fret": {
                                        "_text": "9"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "2"
                                    },
                                    "fret": {
                                        "_text": "2"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "3"
                                    },
                                    "fret": {
                                        "_text": "6"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "4"
                                    },
                                    "fret": {
                                        "_text": "11"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "5"
                                    },
                                    "fret": {
                                        "_text": "4"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "D"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "6"
                                    },
                                    "fret": {
                                        "_text": "9"
                                    }
                                }
                            }
                        }
                    ],
                    "backup": {
                        "duration": {
                            "_text": "6"
                        }
                    }
                },
                {
                    "_attributes": {
                        "number": "9"
                    },
                    "attributes": {
                        "key": {
                            "fifths": {
                                "_text": "-5"
                            },
                            "mode": {
                                "_text": "major"
                            }
                        }
                    },
                    "harmony": [
                        {
                            "root": {
                                "root-step": {
                                    "_text": "C"
                                },
                                "root-alter": {
                                    "_text": "0"
                                }
                            },
                            "kind": {
                                "_text": "other"
                            },
                            "frame": {
                                "frame-strings": {
                                    "_text": "6"
                                },
                                "frame-frets": {
                                    "_text": "5"
                                },
                                "first-fret": {
                                    "_text": "1"
                                },
                                "frame-note": {
                                    "string": {
                                        "_text": "6"
                                    },
                                    "fret": {
                                        "_text": "2"
                                    }
                                }
                            }
                        },
                        {
                            "root": {
                                "root-step": {
                                    "_text": "C"
                                },
                                "root-alter": {
                                    "_text": "0"
                                }
                            },
                            "kind": {
                                "_text": "other"
                            },
                            "frame": {
                                "frame-strings": {
                                    "_text": "6"
                                },
                                "frame-frets": {
                                    "_text": "5"
                                },
                                "first-fret": {
                                    "_text": "1"
                                },
                                "frame-note": {
                                    "string": {
                                        "_text": "6"
                                    },
                                    "fret": {
                                        "_text": "2"
                                    }
                                }
                            }
                        }
                    ],
                    "note": [
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "2"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "6"
                                    },
                                    "fret": {
                                        "_text": "2"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "5"
                                    },
                                    "fret": {
                                        "_text": "9"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "4"
                                    },
                                    "fret": {
                                        "_text": "4"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "3"
                                    },
                                    "fret": {
                                        "_text": "11"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "2"
                                    },
                                    "fret": {
                                        "_text": "7"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "1"
                                    },
                                    "fret": {
                                        "_text": "2"
                                    }
                                }
                            }
                        }
                    ],
                    "backup": {
                        "duration": {
                            "_text": "6"
                        }
                    }
                },
                {
                    "_attributes": {
                        "number": "10"
                    },
                    "harmony": [
                        {
                            "root": {
                                "root-step": {
                                    "_text": "C"
                                },
                                "root-alter": {
                                    "_text": "0"
                                }
                            },
                            "kind": {
                                "_text": "other"
                            },
                            "frame": {
                                "frame-strings": {
                                    "_text": "6"
                                },
                                "frame-frets": {
                                    "_text": "5"
                                },
                                "first-fret": {
                                    "_text": "1"
                                },
                                "frame-note": {
                                    "string": {
                                        "_text": "1"
                                    },
                                    "fret": {
                                        "_text": "2"
                                    }
                                }
                            }
                        },
                        {
                            "root": {
                                "root-step": {
                                    "_text": "C"
                                },
                                "root-alter": {
                                    "_text": "0"
                                }
                            },
                            "kind": {
                                "_text": "other"
                            },
                            "frame": {
                                "frame-strings": {
                                    "_text": "6"
                                },
                                "frame-frets": {
                                    "_text": "5"
                                },
                                "first-fret": {
                                    "_text": "1"
                                },
                                "frame-note": {
                                    "string": {
                                        "_text": "1"
                                    },
                                    "fret": {
                                        "_text": "2"
                                    }
                                }
                            }
                        }
                    ],
                    "note": [
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "5"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "1"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "notehead": {
                                "_text": "normal"
                            },
                            "staff": {
                                "_text": "1"
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "1"
                                    },
                                    "fret": {
                                        "_text": "2"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "2"
                                    },
                                    "fret": {
                                        "_text": "7"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "4"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "down"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "3"
                                    },
                                    "fret": {
                                        "_text": "11"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "4"
                                    },
                                    "fret": {
                                        "_text": "4"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "3"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "5"
                                    },
                                    "fret": {
                                        "_text": "9"
                                    }
                                }
                            }
                        },
                        {
                            "pitch": {
                                "step": {
                                    "_text": "G"
                                },
                                "alter": {
                                    "_text": "-1"
                                },
                                "octave": {
                                    "_text": "2"
                                }
                            },
                            "duration": {
                                "_text": "1"
                            },
                            "voice": {
                                "_text": "5"
                            },
                            "type": {
                                "_text": "quarter"
                            },
                            "stem": {
                                "_text": "up"
                            },
                            "staff": {
                                "_text": "2"
                            },
                            "notations": {
                                "technical": {
                                    "string": {
                                        "_text": "6"
                                    },
                                    "fret": {
                                        "_text": "2"
                                    }
                                }
                            }
                        }
                    ],
                    "backup": {
                        "duration": {
                            "_text": "6"
                        }
                    }
                }
            ]
        }
    }
};

const flatNotesXml = js2xml(flatNotes, { compact: true });
