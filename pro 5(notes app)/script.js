let notes = JSON.parse(localStorage.getItem("notes")) || [];

const notesList = document.getElementById("notesList");
const noteInput = document.getElementById("noteInput");

function displayNotes() {
  notesList.innerHTML = "";
  notes.forEach((note, index) => {
    notesList.innerHTML += `
      <div class="note">
        <textarea onchange="editNote(${index}, this.value)">${note}</textarea>
        <button onclick="deleteNote(${index})">Delete</button>
      </div>
    `;
  });
}

function addNote() {
  if (noteInput.value.trim() === "") return;
  notes.push(noteInput.value);
  localStorage.setItem("notes", JSON.stringify(notes));
  noteInput.value = "";
  displayNotes();
}

function editNote(index, value) {
  notes[index] = value;
  localStorage.setItem("notes", JSON.stringify(notes));
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

displayNotes();
