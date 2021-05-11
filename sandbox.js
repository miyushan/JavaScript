const paras = document.querySelectorAll('p');

paras.forEach( (para) => {
    console.log(para.innerText);
    para.innerText += ' New text';
})

const htmlTag = document.querySelector('.main_headline');
htmlTag.innerHTML = '<h1>This is the best</h1>';