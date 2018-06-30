var header = document.getElementById('firstHeading');
  header.addEventListener("click", function() {
    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'This is click number ' +(++clicks);
    document.getElementById('firstHeading').appendChild(paragraph);
});

var clicks = 0;
