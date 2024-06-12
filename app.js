//XHR AJAX REQUEST

const btnTxt = document.getElementById("text")

btnTxt.addEventListener("click", xhr)

const xhr = new XMLHttpRequest();
xhr.open('GET', '/recap/tetx.txt');
xhr.onload = function() {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    // Use the data in your application
  } else {
    // Handle any errors
  }
};
xhr.send();

function runXHR(url) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('progress', handleEvent);
    xhr.open('GET', url);
    // xhr.open(method, URL, [async, user, password])
    xhr.send();
    return xhr;
}