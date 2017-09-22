(function() {
  window.onload = function() {
    document.onmousemove = function( event ) {
      var x = -( event.clientX/15 );
      var y = -( event.clientY/20 );

      document.getElementById('sentence-text').style.marginTop = y + 'px';
      document.getElementById('sentence-text').style.marginLeft = x + 'px';
    }
  }
})()