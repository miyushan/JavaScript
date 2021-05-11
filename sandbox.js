const temp = document.querySelectorAll('p');

temp.forEach(obj => {
    if(obj.textContent.includes('error')){
        obj.classList.add('error');
    }
    if(obj.textContent.includes('success')){
        obj.classList.add('success');
    }
})