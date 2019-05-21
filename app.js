const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      demandOption: true,
      describe: "note to be removed",
      type: "string"
    }
  },
  handler(argv) {
    // console.log("Removing the note");
    //console.log(chalk.green.inverse("removeing"));
    notes.removeNotes(argv.title);
  }
});

// Create list command
yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    //console.log("Listing out all notes");
    notes.listingNotes();
  }
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      demandOption: true,
      type: "string",
      describe: "read the note"
    }
  },
  handler(argv) {
    notes.readNotes(argv.title);
  }
});

yargs.parse();
