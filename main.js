let width = window.innerWidth -140;
let hight = window.innerHeight -140;

function run() {
	let top = Math.random() * height
	let left = Math.random() * width

	document.getElementsById('runButton').style.top = top + 'px';

	document.getElementsById('runButton').style.left = left + 'px';

}

function correctMessenge(){
	alert('кто бы сомневался')
}

function badMessenge(){
	alert('не верю')
}
