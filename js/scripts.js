//stuff to do when called
document.getElementsByTagName('head')[0].innerHTML = `
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-110539742-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-110539742-1');
  </script>
  
  <title>SchwaStuff</title>
  <link href="css/main.css" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
  <link href="https://fonts.googleapis.com/css?family=Kanit:400,600,800" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Carter+One" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">`;

document.getElementById('mySidenav').innerHTML = `<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <a href="index.html">Home</a>
    <p>Software</p>
    <a href="chapter.html">ChapterSweet</a>
    <a href="khan.html">Khan the Tetris AI</a>
    <p>Games</p>
    <a href="polo.html">Battle Polo</a>
    <a href="golfanywhere.html">Golf Anywhere</a>`;

function showElement(thidis){
  var elmnt = document.getElementById(thidis);
  elmnt.scrollIntoView();
}

function sidebarToggle(){
	//declare variables
	var openorclose;	//specify the action to perform
	var sidebarWidth;	//current width of the sidebar
	var contentWidth;	//current width of the content (main and titlebar)

  //THIS SECTION SETS THE LINKS

  document.getElementById("sidebar").innerHTML = `
  <div id="sidebarContent">
    <center>
      <p class="sidebarText1">
        Info
      </p>
      <a href="index.html" class="sidebarItem" id="sidebarLinkMain">Main</a>
      <a href="contact.html" class="sidebarItem" id="sidebarLinkContact">Contact</a>
      <p class="sidebarText1">
        Games
      </p>
      <a href="polo.html" class="sidebarItem" id="sidebarLinkGolf">Battle Polo</a>
      <a href="golfanywhere.html" class="sidebarItem" id="sidebarLinkGolf">Golf Anywhere</a>
      <a href="richmanswar.html" class="sidebarItem" id="sidebarLinkRich">Rich Man\'s War</a>
      <a href="codemagic.html" class="sidebarItem" id="sidebarLinkCodeMagic">Code Magic</a>
      <a href="planeevolution.html" class="sidebarItem" id="sidebarLinkPlane">Plane Evolution</a>
      <a href="spacegame.html" class="sidebarItem" id="sidebarLinkSpace">Space Game</a>
      <p class="sidebarText1">
        Software
      </p>
      <a href="khan.html" class="sidebarItem" id="sidebarLink">Khan the Tetris AI</a>
      <a href="http://chaptersweet.x10host.com" class="sidebarItem" id="sidebarLinkBXD" target="_blank">ChapterSweet</a>
      <a href="https://megastardaboss.github.io/bitwise-decoder/" class="sidebarItem" id="sidebarLinkBXD" target="_blank">Bitwise XOR Decryptor</a>
      <p class="sidebarText1">
        Opinions
      </p>
      <a href="blog1.html" class="sidebarItem" id="sidebarLinkPresenter">The Presenter's Dilemma</a>
      <a href="blog2.html" class="sidebarItem" id="sidebarLinkDiehard">Die Hard : Not a Christmas Movie</a>
      <p class="sidebarText1">
        Others
      </p>
      <a href="battery.html" class="sidebarItem" id="sidebarLinkBattery">Electrochemistry Project</a>
      <a href="animation.html" class="sidebarItem" id="sidebarLinkAnimation">3D Animation</a>
      <a href="music.html" class="sidebarItem" id="sidebarLinkMusic">Music</a>
      <a href="shaqfont.html" class="sidebarItem" id="sidebarLinkShaq">Shaq Font</a>
      <a href="halo.html" class="sidebarItem" id="sidebarLinkHalo">Halo Maps</a>
    <center>
  </div>`;

	//check the action, and start that action
	if(document.getElementById("sidebar").style.display == "none"){
		openorclose = 0;
		contentWidth = 70;
		sidebarWidth = 0;
		var intervalId = setInterval(sidebarOpen,10);
  	}
  	else{
  		openorclose = 1;
  		contentWidth = 50;
		  sidebarWidth = 20;
  		var intervalId = setInterval(sidebarClose,10);
  	}

  	//perform visibility changes
  	if(openorclose == 0){
	  	document.getElementById("sidebar").style.display = "block";
	  	document.getElementById("sidebarContent").style.display = "block";
  	}

  	//animation updates
  	function sidebarOpen(){
  		//update variables
  		contentWidth -= 1;
  		sidebarWidth += 1;
  		//perform actions
  		document.getElementById("main").style.width = contentWidth + '%';
  		document.getElementById("titlebar").style.width = contentWidth + '%';
  		document.getElementById("main").style.marginLeft = (sidebarWidth+10) + '%';
  		document.getElementById("titlebar").style.marginLeft = (sidebarWidth+10) + '%';
  		document.getElementById("sidebar").style.width = sidebarWidth + '%';
  		//check animation end
  		if(sidebarWidth == 20){
        document.getElementById('sidebar').style.height = (document.getElementById('main').offsetHeight + 190) + 'px';
  			clearInterval(intervalId);
  		}
  	}

  	function sidebarClose(){
  		//update variables
  		contentWidth += 1;
  		sidebarWidth -= 1;
  		//perform actions
  		document.getElementById("main").style.width = contentWidth + '%';
  		document.getElementById("titlebar").style.width = contentWidth + '%';
  		document.getElementById("main").style.marginLeft = (sidebarWidth+10) + '%';
  		document.getElementById("titlebar").style.marginLeft = (sidebarWidth+10) + '%';
  		document.getElementById("sidebar").style.width = sidebarWidth + '%';
  		//check animation end
  		if(sidebarWidth == 0){
  			document.getElementById("sidebar").style.display = "none";
  			clearInterval(intervalId);
  		}
  		if(sidebarWidth <= 15){
  			document.getElementById("sidebarContent").style.display = "none";
  		}
  	}
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("main").style.marginLeft= "0px";
    document.body.style.backgroundColor = "white";
}