(function(){
  console.log("Bookmarklet starting")

  // do someting
  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
})();


// (function(){
//   let script = document.createElement('script');
//   script.src = 'https://nicocouz.github.io/Bookmarklet/main.js';
//   document.body.appendChild(script);
//   let index = document.createElement('script');
//   index.src = 'https://nicocouz.github.io/Bookmarklet/index.html';
//   document.body.appendChild(index);
// })();
