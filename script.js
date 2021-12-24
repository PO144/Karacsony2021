import * as Snow from './snow.js'

var snow = new Snow.default({
    id: 'snow',
    theme: 'berry',
    min_size: 1,
    max_size: 5
});

var container = document.getElementsByClassName('container')[0];
document.addEventListener('click', function( event ) {
  if (container == event.target || container.contains(event.target)) {    
    snow.toggle();
  }
});