//if statement

const pw = 'passfwewegwse@';

if(pw.length >= 12 && pw.includes('@')){
    console.log('Your password is strong enough');
}else if(pw.length >= 12){
    console.log('Your password is okay');
}else{
    console.log('Your password is weak');
}