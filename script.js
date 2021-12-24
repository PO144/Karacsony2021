var container = document.getElementsByClassName('container')[0];
document.addEventListener('click', function( event ) {
  if (container == event.target || container.contains(event.target)) {
    var falling = new Blizzard('container');
  }
});