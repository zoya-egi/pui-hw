// TODO: add comments
import { Notecard } from "./notecard.js";
import { Editor } from "./editor.js";

// Create an empty Set, which will hold all of our notecard objects. A Set is
// similar to an Array, but in a Set, an item can only be added once (there
// are no duplicates). Sets also allow for easy removal of items, using the
// Set.delete(item) function.
const notecardSet = new Set();

// TODO: add comments
const notecardListElement = document.querySelector('#notecard-list');
const editorPanelElement = document.querySelector('#note-editor');

// TODO: add comments
const editor = new Editor(notecardSet, editorPanelElement,
  addNewNote)


// This function creates a new Notecard object, and adds the corresponding
// notecard element to the page.
function addNewNote(imageURL, title, body, footer) {
  
  // Create a new notecard object. The Notecard constructor takes five arguments.

  // The first four arguments are the image URL, title text, body text,
  // and footer text for the note.

  // The fifth argument is a reference the "deleteExistingNote" function. When
  // the user clicks the trash icon on the notecard, we will run that function.

  // (See Notecard.js for details).
  const notecard = new Notecard(imageURL, title, body,
    footer, deleteExistingNote);

  // Add the notecard element to the DOM, as a child of the #notecard-list div.
  // We use "prepend" instead of "append", so that the new note is inserted
  // before any exisiting notes (the top of the page).
  notecardListElement.prepend(notecard.element);

  // Add the notecard object to our notecard Set, which keeps track of all
  // the notecards in our application.
  notecardSet.add(notecard);
}


// TODO: add comments
function deleteExistingNote(notecard) {
  notecardSet.delete(notecard);
  saveToLocalStorage();
}