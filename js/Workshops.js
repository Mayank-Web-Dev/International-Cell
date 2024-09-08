function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function RevealVideo() {
    await sleep(500)
    document.getElementsByTagName("video")[0].style.setProperty("height","100%")
    document.getElementsByTagName("video")[0].style.setProperty("top","0px")
    await sleep(500)
    document.getElementsByClassName("ESButton")[0].classList.remove("hidden")
    document.getElementsByClassName("TextButton")[0].classList.remove("hidden")
}

document.addEventListener('DOMContentLoaded', function () {
    RevealVideo()
});