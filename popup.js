function click(e) {
  chrome.tabs.executeScript(null,{
    code:"document.getElementById('email').value='" + e.target.id + "';document.getElementById('password').value='" + e.target.getAttribute('data-password') + "'"});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
