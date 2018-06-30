//This event listener changes the color of the <h2> to Hot Salmon when it is double-clicked.

var hTwo = document.getElementById( 'hTwo' );

hTwo.addEventListener( 'dblclick', function() {
  hTwo.className = 'hot_salmon';
})

//This event listener puts a box around the <h3> when it is moused-over.

var hThree = document.getElementById( 'hThree' );

hThree.addEventListener( 'mouseover', function() {
  hThree.className = 'box';
})

//This event listener displays a fireworks gif when the list loads.

var firework = document.getElementById( 'paragraph' );

paragraph.addEventListener( 'load', function() {
  paragraph.idName = 'firework';
})
