//  Last modification :
//  07/11/20 - 23:55


(function() {

  // do someting
  // To get it open hit > getModal()

  if (typeof tC === "undefined") {
    alert("No containers called on that page")
  } else {
    console.log("Bookmarklet starting")

    //tC.pixelTrack.add("https://nicolastest.commander1.com/?v3/tcs=4505&host="+document.location.host+"&env_template="+tc_vars.env_template)

    var modal = document.createElement("div");
    modal.id = "myModal";
    modal.className = "modal_ca";

    var navbar_ca = document.createElement('nav')
    navbar_ca.id = 'navbar_ca'
    modal.appendChild(navbar_ca)

    var tagcologo = document.createElement("img");
    tagcologo.id = 'tagcologo'
    tagcologo.src = "https://nicocouz.github.io/Bookmarklet/tagcologo.png";
    navbar_ca.appendChild(tagcologo);

    var li_ca = document.createElement('li')
    li_ca.id = 'li_ca'
    navbar_ca.appendChild(li_ca)

    var button_close = document.createElement('button')
    button_close.type = 'button'
    button_close.id = 'button_close'
    navbar_ca.appendChild(button_close)

    var modal_content = document.createElement("div");
    modal_content.className = "modal-content"
    modal_content.id = "modal_content"
    //  modal_content.innerText = "COMMANDERS ACT POPIN"
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

    modal_content.appendChild(modal_p);
    var currentDiv = document.getElementById('div1');

    document.body.insertBefore(modal, currentDiv);
    // Add the contents of options[0] to #foo:
    var list = document.getElementById("modal_p"); // Get the target element
    list.innerHTML = "";
    list.appendChild(getTagsList(tagsList));


    /* The Modal (background) */

    console.log(modal)
    // When the user clicks the button, open the modal
    function getModal() {
      modal.style.display = "block";
    }

    // When the user clicks anywhere outside of the modal, close it
    document.getElementById("button_close").addEventListener("click", function() {
      //console.log(event.target)
      document.getElementById("myModal").remove();
      document.getElementById("Bookmarklet_main").remove();
      document.getElementById("Bookmarklet_style").remove();

    });
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
// })();


// !function(){let e=document.createElement("script");e.src="https://nicocouz.github.io/Bookmarklet/main.js",e.id="Bookmarklet_main",document.body.appendChild(e);let t=document.createElement("link");t.href="https://nicocouz.github.io/Bookmarklet/style.css",t.id="Bookmarklet_style",t.rel="stylesheet",t.type="text/css",document.head.appendChild(t)}();
