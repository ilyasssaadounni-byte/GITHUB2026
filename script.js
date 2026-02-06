const btn = document.getElementById('magicBtn');
btn.addEventListener('click',()=> {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = "#" + randomColor;

})
document.getElementById('title').innerText = "viva ilyass";
alert("Welcome to the magic color changer!");

