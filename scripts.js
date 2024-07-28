ScreenWidth = window.innerWidth;
ScreenHeight = window.innerHeight;

var Prev=0

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function ImageSize(){
for (let i = 0; i <= 7; i++) {
    let textDataElement =document.getElementsByClassName("TextData")[i];
    if (textDataElement) {
        let height = textDataElement.clientHeight;
        let hiddenElement = document.getElementsByClassName("Image")[i];
        if (hiddenElement) {
            hiddenElement.style.setProperty("height", `${height}px`);
        }
    }
}}

async function RevealVideo() {
    await sleep(500)
    window.scrollTo(0, 0);
    document.getElementsByTagName("video")[0].style.setProperty("height","100%")
    document.getElementsByTagName("video")[0].style.setProperty("top","0px")
    await sleep(500)
    document.getElementsByClassName("ESButton")[0].classList.remove("hidden")
    document.getElementsByClassName("TextButton")[0].classList.remove("hidden")
}

document.addEventListener('DOMContentLoaded', function () {
    ImageSize()
    RevealVideo()
    window.addEventListener('scroll', function () {
        if (Prev<window.scrollY && Prev == 0) {
            document.querySelector('body').style.setProperty('--Header-Height', '100px');
            document.getElementsByClassName('Logo')[0].className='LogoSide';
            document.getElementsByClassName('ButtonBox')[0].className='ButtonBoxAlt';
        } else if (window.scrollY == 0) {
            document.querySelector('body').style.setProperty('--Header-Height', '170px');
            document.getElementsByClassName('LogoSide')[0].className='Logo';
            document.getElementsByClassName('ButtonBoxAlt')[0].className='ButtonBox';
        }
        Prev = window.scrollY
    });
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("hidden");
            const TextData=entry.target.getElementsByClassName("TextData")[0];
            const Image=entry.target.getElementsByTagName("img")[0];
            if (TextData.classList.contains("TextDataRight")){
                TextData.classList.remove("hiddenAnimationRight")
                Image.classList.remove("hiddenAnimationRight")
            }else if (TextData.classList.contains("TextDataLeft")){
                TextData.classList.remove("hiddenAnimationLeft")
                Image.classList.remove("hiddenAnimationLeft")
            }

        } else{
            entry.target.classList.add("hidden");
            const TextData=entry.target.getElementsByClassName("TextData")[0];
            const Image=entry.target.getElementsByTagName("img")[0];
            if (TextData.classList.contains("TextDataRight")){
                TextData.classList.add("hiddenAnimationRight")
                Image.classList.add("hiddenAnimationRight")
            }else if (TextData.classList.contains("TextDataLeft")){
                TextData.classList.add("hiddenAnimationLeft")
                Image.classList.add("hiddenAnimationLeft")
            }
        }
    });
});
const hiddenElement = document.querySelectorAll(".Container")
hiddenElement.forEach((el) => observer.observe(el));