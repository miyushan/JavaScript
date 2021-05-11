const content = document.querySelector('.main_headline'); 

console.log(content.getAttribute('main_headline'));
content.setAttribute('class','newClass');
content.setAttribute('style','color: yellow');

content.style.margin = '50px';
content.style.fontSize = '200px';