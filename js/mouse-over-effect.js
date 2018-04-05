(function() {
  window.onload = function() {
    document.onmousemove = function( event ) {
      // var x = -( event.clientX/50 );
      var y = -( event.clientY/20 );

      // document.getElementById('slide-target').style.marginLeft = x + 'px';
      document.getElementById('slide-target').style.marginTop = y + 'px';
    }
  }
})()