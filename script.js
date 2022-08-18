const bar = document.getElementById('bar');
const me = document.getElementById('me');
const nav = document.getElementById('self_intro');
const nav2 = document.getElementById('profile')

road = 1;

if(bar){
    bar.addEventListener('click', () => {
        if (road==1) {
            bar.style.transition = "0.3s ease"
            bar.style.transform = "rotate(540deg)"
            nav.style.top = "0px"
            nav2.style.top = "0px"
            road=2
        }
        else if (road==2) {
            bar.style.transform = "rotate(0deg)" 
            nav2.style.top = "-20000px"
            nav.style.top = "-20000px"

            road=1
        }
        //nav.classList.add('active');

        //nav.classList.add('active');
    })
}