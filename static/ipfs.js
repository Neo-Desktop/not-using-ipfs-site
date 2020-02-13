if (window.ipfs !== undefined) {
	var href = "ipns://" + window.location.host;
	document.title = "IPFS Redirection"
	document.querySelector("#intro > div > div > div > div > div > h1").innerHTML = "IPFS Found";
	document.querySelector("body > nav > div > div.navbar-header.page-scroll > a").innerHTML = "IPFS Found";
	document.querySelector("#intro > div > div > div > div > div > h3").innerHTML = "Please wait while we redirect you.";
	document.querySelector("#main").remove();
	document.querySelector("#social-share-section").remove();
	document.querySelector("#intro > div > div > div > div > div").insertAdjacentHTML('beforeend', '<h4><a href="'+href+'">Click here if you are not immediately redirected</a></h4>');
	window.location.href = href;
}