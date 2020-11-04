(function(){
  console.log("Bookmarklet starting")

  // do someting

})();


(function(){
  let script = document.createElement('script')
  script.src = "main.js";
  document.body.appendChild(script)
})();
