//  Last modification :
//  11/11/20 - 20:11

(function() {

  // do someting
  // To get it open hit > getModal()

  if (typeof tC === "undefined") {
    alert("No containers called on that page")
  } else if (document.querySelector("#myModal") != null) {
    document.getElementById("myModal").remove();
    document.getElementById("Bookmarklet_main").remove();
    document.getElementById("Bookmarklet_style").remove();
  } else {
    console.log("Bookmarklet starting")

    // Tracling
    tC.script.add("https://nicolastest.commander1.com/v3/?tcs=4505&chn=Bookmarklet&src="+document.location.href+"&rand="+Math.random());

    let style = document.createElement('link');
    style.href = 'https://fonts.googleapis.com/css2?family=Roboto&display=swap';

    var modal = document.createElement("div");
    modal.id = "myModal";
    modal.className = "modal_ca";

    var navbar_ca = document.createElement('div')
    navbar_ca.id = 'navbar_ca'
    modal.appendChild(navbar_ca)


    var tagcologo = document.createElement("img");
    tagcologo.id = 'tagcologo'
    tagcologo.src = "https://staticplatform.commandersact.com/bundles/common/theme-2018/images/logo-white.svg?v=7.79.65";
    // tagcologo.setAttribute('href','https://www.commandersact.com/fr/')
    // tagcologo.setAttribute("target","_blank")
    navbar_ca.appendChild(tagcologo);

    var button_close = document.createElement('img')
    button_close.id = 'button_close'
    button_close.src = "https://nicocouz.github.io/Bookmarklet/img/close.png";
    navbar_ca.appendChild(button_close)

    var modal_content = document.createElement("div");
    modal_content.className = "modal-content"
    modal_content.id = "modal_content"
    modal.appendChild(modal_content)

    var modal_p = document.createElement("div");
    modal_p.className = 'modal_p'

    var tagsList = tC.containersLaunched

    function getTagsList(tagsList) {
      var tagsList = tC.containersLaunched
      // Create the list element:
      var tms_img = document.createElement("img");
      tms_img.id = 'tms_img'
      tms_img.src = "https://nicocouz.github.io/Bookmarklet/img/tms.png";
      modal_p.appendChild(tms_img);
      // Site identifier
      for (var keys in tagsList) {
        var item = document.createElement('h1');
        item.appendChild(document.createTextNode(">>> Site  ID : " + keys+" <<<"));
        item.id = "h1_site_id"
        modal_p.appendChild(item);
        // var item = document.createElement('hr');
        // item.id = 'hr_site_id';
        // modal_p.appendChild(item);

        // Container identifier


        for (var cle in tagsList[keys]) {
          var item_div = document.createElement('h2');
          item_div.id = "h2_container_id"
          var item = document.createElement('a');
          item.appendChild(document.createTextNode(">> Container ID : " + cle + " -- Version : " + tagsList[keys][cle].v));
          item.setAttribute("href", "https://platform.commandersact.com/en/" + keys + "/containers/deploy/" + cle)
          item.setAttribute("target", "_blank")
          item.setAttribute("title", "Click here to get to the container deployed tab")
          item.id = "h2_container_id_a"
          item_div.appendChild(item);
          modal_p.appendChild(item_div);
          // Tags identifier
          if (tagsList[keys][cle].t.length > 0) {
            for (var i = 0; i < tagsList[keys][cle].t.length; i += 1) {
              var item = document.createElement('a');
              item.innerHTML = '> ' + tagsList[keys][cle].t[i].label
              item.setAttribute("href", "https://platform.commandersact.com/en/" + keys + "/containers/edit/" + cle + "/" + cle + "/tag/" + tagsList[keys][cle].t[i].id)
              item.setAttribute("target", "_blank")
              item.id = 'tagslistitem'
              modal_p.appendChild(item);
              var item = document.createElement('br');
              item.id = 'br_tags'
              modal_p.appendChild(item);
            }
          }else{
            var item = document.createElement('p');
            item.innerHTML = 'No tags'
            item.id = 'notagslistitem'
            modal_p.appendChild(item);
          }
        }

      }
      var item = document.createElement('hr');
      item.id = 'hr_site_id';
      modal_p.appendChild(item);

      var trust_img = document.createElement("img");
      trust_img.id = 'trust_img'
      trust_img.src = "https://nicocouz.github.io/Bookmarklet/img/trustco.png";
      modal_p.appendChild(trust_img);


      if (typeof tC.privacyID != "undefined") {
        var privacy_div = document.createElement('h2');
        privacy_div.id = "h2_privacy_div"
        var item = document.createElement('a');
        item.appendChild(document.createTextNode(">> Privacy ID : " + tC.privacyID + " -- Version : " + tC.privacyVersion));
        item.setAttribute("href", "https://platform.commandersact.com/en/" + keys + "/containers/privacy/deploy/" + tC.privacyID)
        item.setAttribute("target", "_blank")
        item.id = "h2_privacy_div_a"
        privacy_div.appendChild(item);
      } else {
        var privacy_div = document.createElement('h2');
        privacy_div.id = "h2_no_privacy_div_a"
        privacy_div.appendChild(document.createTextNode("No Privacy called on that page"));
      }
      modal_p.appendChild(privacy_div);

    };
    getTagsList(tagsList);
    modal_content.appendChild(modal_p)


    //  modal_content.appendChild(getTagsList(tagsList));
    var currentDiv = document.getElementById('div1');
    document.body.insertBefore(modal, currentDiv);

    /* The Modal (background) */

    // When the user clicks the button, open the modal
    function getModal() {
      modal.style.display = "block";
    }

    // When the user clicks anywhere outside of the modal, close it
    document.getElementById("button_close").addEventListener("click", function() {
      document.getElementById("myModal").remove();
      document.getElementById("Bookmarklet_main").remove();
      document.getElementById("Bookmarklet_style").remove();
    });
    getModal()
  }


})();

// THIS IS TO ADD WITHIN THE BOOKMARKLET URL
//
// ! function() {
//   if (document.querySelector('#myModal') === null) {
//     let t = document.createElement("link");
//     t.href = "https://nicocouz.github.io/Bookmarklet/style.css", t.id = "Bookmarklet_style", t.rel = "stylesheet", t.type = "text/css", document.head.appendChild(t)
//     let e = document.createElement("script");
//     e.src = "https://nicocouz.github.io/Bookmarklet/main.js", e.id = "Bookmarklet_main", document.body.appendChild(e);
//   }else{
//     document.getElementById("myModal").remove();
//     document.getElementById("Bookmarklet_main").remove();
//     document.getElementById("Bookmarklet_style").remove();
//   }
// }();
