user_name = "";

function adduser()
{
   user_name = document.getElementById("username").value;
   localStorage.setItem("user_name", user_name);
   window.location = "chirpy_room.html";
}