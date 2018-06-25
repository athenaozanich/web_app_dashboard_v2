
/***********************************/
/*form validation and local storage*/
/***********************************/

//Form Val//

function signup(){
  //declare vars
  const searchUser = document.getElementById("search-user").value;
  const userMsg = document.getElementById("userMsg").value;
  if (searchUser == null || searchUser == "") {
    alert("Please choose a user to send it too, we cant send it to nobody silly!");
    return false;
  }
  if (userMsg == null || userMsg == "") {
    alert("Please add a message to send to the user you selected.");
    return false;
  }

  if (userMsg && searchUser != null || userMsg && searchUser != "") {
    alert("Thank you, your message has been sent!")
  }
}
