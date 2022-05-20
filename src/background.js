const pictures = [
    'src/bg/1.jpg',
    'src/bg/2.jpg',
    'src/bg/3.jpg',
    'src/bg/4.jpg',
    'src/bg/5.jpg',
    'src/bg/6.jpg'
    
  ];

const IMG_NUMBER = pictures.length;

function genRandom(){
	const number = Math.floor(Math.random()*IMG_NUMBER);
	return number;
}

document.body.style.background = `url(${pictures[genRandom()]})`;

