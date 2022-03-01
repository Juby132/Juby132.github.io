let myImage = document.querySelector('img');
myImage.onclick = () => {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/my-face.png') {
		myImage.setAttribute('src','images/my-face-2.png');
	} else {
		myImage.setAttribute('src','images/my-face.png');
	}
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName) {
		setUserName();
	} else {
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Hey ' + myName + ', get to know me';
	}
}
if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Hey ' + storedName + ', get to know me';
}
myButton.onclick = () => {
	setUserName();
}
// put this under the code in <body></body>: <script src="scripts/main.js"></script>