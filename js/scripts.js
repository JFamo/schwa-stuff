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
      <a href="golfanywhere.html" class="sidebarItem" id="sidebarLinkGolf">Golf Anywhere</a>
      <a href="codemagic.html" class="sidebarItem" id="sidebarLinkCodeMagic">Code Magic</a>
      <a href="planeevolution.html" class="sidebarItem" id="sidebarLinkPlane">Plane Evolution</a>
      <a href="spacegame.html" class="sidebarItem" id="sidebarLinkSpace">Space Game</a>
      <a href="#" class="sidebarItem" id="sidebarLinkRich">Rich Man\'s War</a>
      <p class="sidebarText1">
        Software
      </p>
      <a href="#" class="sidebarItem" id="sidebarLinkBXD">Bitwise XOR Decryptor</a>
      <p class="sidebarText1">
        Others
      </p>
      <a href="#" class="sidebarItem" id="sidebarLinkShaq">Shaq Font</a>
      <a href="#" class="sidebarItem" id="sidebarLinkSupremacy">Supremacy</a>
      <a href="#" class="sidebarItem" id="sidebarLinkHalo">Halo Maps</a>
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