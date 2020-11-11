# Bookmarklet

What is looks like : 

![Image Of The Bookmarklet](https://nicocouz.github.io/Bookmarklet/img/readme.jpeg)


## Purpose : 

![Image Of TagCommander](https://nicocouz.github.io/Bookmarklet/img/tms.png)

- [x] Get the site(s) ID(s)
- [x] Get the container(s) ID(s) + Version(s) called (with href link to the TagCommander deploy tab)
- [x] Get the tag(s) triggered (with href link to the TagCommander Tag)


![Image Of TagCommander](https://nicocouz.github.io/Bookmarklet/img/trustco.png)

- [x] Get the Privacy ID + Version called (with href link to the TrustCommander deploy tab)


## How to install : 

> On any websites, drag the url in your bookmarklet : 

![Image use1](https://nicocouz.github.io/Bookmarklet/img/use1.jpeg)

> Right click on the new bookmarklet : 

<img src="https://nicocouz.github.io/Bookmarklet/img/use3.jpeg" width="40%">


> Modify the name of it then add the following code : 

`javascript:!function(){if(null===document.querySelector("#myModal")){let e=document.createElement("link");e.href="https://nicocouz.github.io/Bookmarklet/style.css",e.id="Bookmarklet_style",e.rel="stylesheet",e.type="text/css",document.head.appendChild(e);let t=document.createElement("script");t.src="https://nicocouz.github.io/Bookmarklet/main.js",t.id="Bookmarklet_main",document.body.appendChild(t)}else document.getElementById("myModal").remove(),document.getElementById("Bookmarklet_main").remove(),document.getElementById("Bookmarklet_style").remove()}();`


Coming soon : 
