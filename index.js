let text = document.getElementById('count');
let increase = document.getElementById('like');
let decrease = document.getElementById('dislike');
let count = 0;
increase.addEventListener('click',()=>{
    count++;
    text.innerHTML = count;
})
decrease.addEventListener('click',()=>{
    count--;
    text.innerHTML = count;
})