function validate() {

  var txtArea = document.getElementById("text area").value;
  var url = document.getElementById("url").value;
  var title = document.getElementById("title").value;


  if (title == "") {

    var titStyle = document.getElementById("title").style.borderColor = "red";
    alert("Title can't be empty!");
    return false;

  }

  if (txtArea == "" && url == "") {

    var urlStyle = document.getElementById("url").style.borderColor = "red";
    var areaStle = document.getElementById("text area").style.borderColor = "red";
    alert("Either URL or Text has to be filled!");
    return false;


  }


}
