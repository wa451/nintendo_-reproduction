let btn = document.getElementById('inputbtn');
let box = document.getElementById('inputBox');
box.addEventListener('input', inputChange);
function inputChange(event){
    console.log(event.data);
    if(event.data !== null){
        btn.className = 'validbtn';
    }
    else{
        btn.className = 'invalidbtn';
    }
}
let btn2 = document.getElementById('inputbtn2');
let box2 = document.getElementById('inputBox2');
box2.addEventListener('input', inputChange);
function inputChange(event){
    console.log(event.data);
    if(event.data !== null){
        btn2.className = 'validbtn';
    }
    else{
        btn2.className = 'invalidbtn';
    }
}