# Bookmarklet

What is looks like : 

<img src="https://nicocouz.github.io/Bookmarklet/img/readme.jpeg" width="85%">

<br>

## Purpose : 

<img src="https://nicocouz.github.io/Bookmarklet/img/tms.png" width="20%">


- [x] Get the site(s) ID(s)
- [x] Get the container(s) ID(s) + Version(s) called (**with href link to the TagCommander deploy tab**)
- [x] Get the tag(s) triggered (**with href link to the TagCommander Tag**)

<br>

<img src="https://nicocouz.github.io/Bookmarklet/img/trustco.png" width="20%">

- [x] Get the Privacy ID + Version called (with href link to the TrustCommander deploy tab)

<br>

## How to use :

1- Click on the Bookmarklet tab
2- To close it, click on the cross or click on the Bookmarklet tab

<br>


## How to install : 


> On any website, drag the url in your bookmarklets : 
<br>

<img src="https://nicocouz.github.io/Bookmarklet/img/use1.jpeg" width="40%">
<br>

> Right click on the new bookmarklet, modify the name of it & then add the following code within the URL entry : 

<img src="https://nicocouz.github.io/Bookmarklet/img/use3.jpeg" width="40%">

<br>

`javascript:!function(){if(null===document.querySelector("#myModal")){let e=document.createElement("link");e.href="https://nicocouz.github.io/Bookmarklet/style.css",e.id="Bookmarklet_style",e.rel="stylesheet",e.type="text/css",document.head.appendChild(e);let t=document.createElement("script");t.src="https://nicocouz.github.io/Bookmarklet/main.js",t.id="Bookmarklet_main",document.body.appendChild(t)}else document.getElementById("myModal").remove(),document.getElementById("Bookmarklet_main").remove(),document.getElementById("Bookmarklet_style").remove()}();`


<br>
<br>


Coming soon : 

- [ ] Datalayer ?
- [ ] Events ?

*Difficult to say, sky is the limit !*

<br><br>

***This is a beta test, the bookmarklet might inherit from the CSS website you test it with, but technically it works!***	

<br>

:+1: Any Pull Request is welcome !! Pull Requesting is caring !! :+1:

<br>

**ENJOY BOOKMARKETLING !!**
