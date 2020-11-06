(function() {
  console.log("Bookmarklet starting")

  // do someting
  // To get it open hit > getModal()

  if (typeof tC === "undefined") {
    alert("No containers called on that page")
  } else {

    //tC.pixelTrack.add("https://nicolastest.commander1.com/?v3/tcs=4505&host="+document.location.host+"&env_template="+tc_vars.env_template)

    var modal = document.createElement("div");
    modal.id = "myModal";
    modal.className = "modal";
    var modal_content = document.createElement("div");
    modal_content.className = "modal-content"
    modal_content.innerText = "COMMANDERS ACT POPIN"
    modal_content.style = "font-size:25px!important"
    var modal_content_p = document.createElement("p");
    modal_content_p.style = "margin:35px;font-size:17px!important"
    modal_content_p.innerText = "Click outside to close the popin"
    modal_content.appendChild(modal_content_p)
    modal.appendChild(modal_content)


    var tagsList = tC.containersLaunched

    function getTagsList(tagsList) {
      var tagsList = tC.containersLaunched
      // Create the list element:
      var list = document.createElement('div');
      // Site identifier
      for (var keys in tagsList) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode("Site identifier : " + keys));
        item.style = "color:black;font-size:18px;font-family:Goudy Bookletter 1911,sans-serif;list-style-type:circle;"
        list.appendChild(item);
        // Container identifier
        for (var cle in tagsList[keys]) {
          var item_div = document.createElement('div');
          item_div.style = "color:red;font-size:15px;font-family:Goudy Bookletter 1911,sans-serif;margin-top:20px;"
          var item = document.createElement('a');
          item.appendChild(document.createTextNode("Container identifier : " + cle + " -- Version : " + tagsList[keys][cle].v));
          item.setAttribute("href", "https://platform.commandersact.com/en/" + keys + "/containers/deploy/" + cle)
          item.setAttribute("target", "_blank")
          item.style = "color:red;font-size:15px;font-family:Goudy Bookletter 1911,sans-serif;"
          item_div.appendChild(item);
          list.appendChild(item_div);
          // Tags identifier
          if (tagsList[keys][cle].t.length > 0) {
            for (var i = 0; i < tagsList[keys][cle].t.length; i += 1) {
              var item = document.createElement('ul');
              list.appendChild(item);
              var item = document.createElement('a');
              item.innerHTML = tagsList[keys][cle].t[i].label
              item.setAttribute("href", "https://platform.commandersact.com/en/" + keys + "/containers/edit/" + cle + "/" + cle + "/tag/" + tagsList[keys][cle].t[i].id)
              item.setAttribute("target", "_blank")
              item.style = "color:green;font-size:12px;font-family:Goudy Bookletter 1911,sans-serif;"
              list.appendChild(item);
            }
          }

        }
      }
      // Finally, return the constructed list:
      return list;
    }

    var modal_p = document.createElement("p");
    modal_p.id = "modal_p"
    modal_p.innerHTML = getTagsList();

    var modal_span = document.createElement("span");
    modal_span.className = "close"
    modal_content.appendChild(modal_span);
    modal_content.appendChild(modal_p);
    var currentDiv = document.getElementById('div1');

    document.body.insertBefore(modal, currentDiv);
    // Add the contents of options[0] to #foo:
    var list = document.getElementById("modal_p"); // Get the target element
    list.innerHTML = "";
    list.appendChild(getTagsList(tagsList));


    /* The Modal (background) */

    var modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks the button, open the modal
    function getModal() {
      modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("myModal").remove();
        document.getElementById("Bookmarklet_main").remove();
        document.getElementById("Bookmarklet_style").remove();
      }
    }
    getModal()
  }


})();

// THIS IS TO ADD WITHIN THE BOOKMARKLET URL

// 
// (function() {
//   let script = document.createElement('script');
//   script.src = 'https://nicocouz.github.io/Bookmarklet/main.js';
//   script.id = "Bookmarklet_main"
//   document.body.appendChild(script);
//   let style = document.createElement('link');
//   style.href = 'https://nicocouz.github.io/Bookmarklet/style.css';
//   style.id = "Bookmarklet_style"
//   style.rel = 'stylesheet';
//   style.type = 'text/css';
//   document.head.appendChild(style);
//   let script2 = document.createElement('script');
//   script2.src = 'https://code.jquery.com/jquery-3.5.1.slim.min.js';
//   script2.crossorigin="anonymous"
//   document.body.appendChild(script2);
//   let script3 = document.createElement('script');
//   script3.src = 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js';
//   script3.crossorigin="anonymous"
//   document.body.appendChild(script3);
//   let script4 = document.createElement('script');
//   script4.src = 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js';
//   script4.crossorigin="anonymous"
//   document.body.appendChild(script4);
//   //<link href="extern.html" rel="import" />
//   let index = document.createElement('link');
//   index.href = 'https://nicocouz.github.io/Bookmarklet/index.html';
//   index.rel = 'import';
//   index.style = 'display:absolute'
//   document.head.appendChild(index);
// })();


// !function(){let e=document.createElement("script");e.src="https://nicocouz.github.io/Bookmarklet/main.js",e.id="Bookmarklet_main",document.body.appendChild(e);let t=document.createElement("link");t.href="https://nicocouz.github.io/Bookmarklet/style.css",t.id="Bookmarklet_style",t.rel="stylesheet",t.type="text/css",document.head.appendChild(t)}();
