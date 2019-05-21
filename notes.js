const chalk = require("chalk");
const fs = require("fs");
const getNotes = () => {
  return "Your notes...";
};

const addNotes = (title, body) => {
  debugger;
  //console.log(title);
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);
  // const duplicateNotes = notes.filter(note => {
  //   return note.title === title;
  // });
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("Note Added"));
  } else {
    console.log(chalk.red.inverse("duplicate notes"));
  }
};
//removing a note
const removeNotes = title => {
  const notes = loadNotes();
  const removednotes = notes.filter(note => note.title != title);
  if (notes.length > removednotes.length) {
    console.log(chalk.green("note removed"));
    saveNotes(removednotes);
  } else {
    console.log(chalk.yellow("nothing to remove!!"));
  }
};

//listing the Notes
const listingNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse.blue("Your Notes"));
  notes.forEach(note => {
    console.log(note.title);
  });
};
//Reading the Note
const readNotes = title => {
  debugger;
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);
  if (note) {
    console.log(chalk.blue.inverse.italic.bold(note.title));
    console.log(chalk.bold(note.body));
  } else {
    console.log(chalk.red.inverse("nothing to show"));
  }
};

const saveNotes = note => {
  JSonData = JSON.stringify(note);
  fs.writeFileSync("notes.json", JSonData);
};

const loadNotes = function() {
  try {
    const parseNotes = fs.readFileSync("notes.json").toString();
    const NotesBuffer = JSON.parse(parseNotes);
    return NotesBuffer;
  } catch (error) {
    // fs.writeFileSync("notes.json");
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
  listingNotes: listingNotes,
  readNotes: readNotes
};
