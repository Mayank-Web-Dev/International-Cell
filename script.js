ScreenWidth = window.innerWidth;
ScreenHeight = window.innerHeight;

var Prev=0

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        if (Prev>window.scrollY && Prev == 0) {
            document.querySelector('body').style.setProperty('--Header-Height', '100px');
            document.getElementsByClassName('logo')[0].className='LogoSide';
            document.getElementsByClassName('ButtonBox')[0]='ButtonBoxAlt';
        } else if (window.scrollY == 0) {
            document.querySelector('body').style.setProperty('--Header-Height', '170px');
            console.log("0")
        }
        prev = window.scrollY
    });
});