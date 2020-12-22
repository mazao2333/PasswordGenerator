// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
var nums = "0123456789";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowwer = "abcdefghijklmnopqrstuvwxyz";

function randomPassword(pwLength) {
  var charsets = "";
  if (document.getElementById("containsNumber").checked) {
    charsets += nums;
  }
  if (document.getElementById("containsUpper").checked) {
    charsets += upper;
  }
  if (document.getElementById("containsLowwer").checked) {
    charsets += lowwer;
  }
  var cLength = charsets.length;
  if (cLength != 0) {
    var pw = "";
    for (i = 0; i < pwLength; i++) {
      pw += charsets.charAt(Math.floor(Math.random() * cLength));
    }
    document.getElementById("placer").innerHTML = "密码：" + pw;
  }
}

function copy2Clipboard() {
  var content = document.getElementById("placer").innerHTML;
  if (content.length > 5) {
    var aux = document.createElement("input"); 
    aux.setAttribute("value", content.substring(3)); 
    document.body.appendChild(aux); 
    aux.select();
    document.execCommand("copy"); 
    document.body.removeChild(aux);
  }
}
