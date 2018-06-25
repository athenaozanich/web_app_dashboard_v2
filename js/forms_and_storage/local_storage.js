
//Save Settings to local storage//
const emailPref = localStorage.getItem('email_notes');
const profVis = localStorage.getItem('prof_visibilty');
const tmznSettings = localStorage.getItem('timezone');
const emailNotes = document.getElementById("email_notes");
const prof_visibilty = document.getElementById("prof_visibilty");
const timezone = document.getElementById("timezone");

const setDataFromLocalStorage = function() {

  if (emailPref !== null) {
    emailNotes.checked = (emailPref === 'true');
  }

  if (profVis !== null) {
    prof_visibilty.checked = (profVis === 'true');
  }

  if (tmznSettings !== null) {
    timezone.value = tmznSettings;

  }
}

document.addEventListener("DOMContentLoaded", function() {



  document.getElementById("save").addEventListener("click", function() {
    localStorage.setItem('email_notes', emailNotes.checked);
    localStorage.setItem('prof_visibilty', prof_visibilty.checked);
    localStorage.setItem('timezone', timezone.value);
    alert('Settings successfully saved!');
  });

document.getElementById("cancel").addEventListener("click", function() {
    const cancel = confirm('Are you sure you want to cancel changes?');

    if (cancel) {
      setDataFromLocalStorage();
    }
  });

  setDataFromLocalStorage();
});
