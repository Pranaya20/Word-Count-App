const textData = document.getElementById('text-area');
function onchange(e){
    textData.innerHTML = e.target.value;
    console.log(textData.innerHTML);
}
textData.addEventListener('textarea', onchange);