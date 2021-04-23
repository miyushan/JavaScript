//for loop

// for (let i = 0; i < 5; i++) {
//     console.log('loop ' , i);
// }

const names = ['shakeer', 'miyushan', 'rodrigo'];

for (let i = 0; i < names.length; i++) {
    //  console.log('element ', i , ' is: ', names[i]);  
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}