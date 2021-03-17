
var hit = 0;

window.addEventListener('keydown', function(e) {
  if(e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
    if (hit < 10) {
      console.log(hit);
      $('#face').removeClass('o'+hit);
      hit++
      $('#face').addClass('o'+hit);
    }
  }
});
