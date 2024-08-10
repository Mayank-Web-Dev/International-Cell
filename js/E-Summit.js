document.addEventListener('DOMContentLoaded', function () {
    const r = new rive.Rive({
        src: "Main.riv",
        canvas: document.getElementById("canvas1"),
        autoplay: true,
        stateMachines: ["State Machine 1"],
        artboard : "Artboard 2",
        onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
        const inputs = r.stateMachineInputs("State Machine 1");
        document.addEventListener('scroll', function () {
            inputs.forEach(i => {i.value = mapRange(window.scrollY, 0, 1500, 0, 100) })
        });
        },
        });
    const r2 = new rive.Rive({
        src: "Main.riv",
        canvas: document.getElementById("canvas2"),
        autoplay: true,
        stateMachines: ["State Machine 2"],
        artboard : "Artboard 3",
        onLoad: () => {
        r2.resizeDrawingSurfaceToCanvas();
        r2.pause()
        },
        });
    const r3 = new rive.Rive({
        src: "Main.riv",
        canvas: document.getElementById("canvas3"),
        autoplay: true,
        stateMachines: ["State Machine 2"],
        artboard : "Artboard 4",
        onLoad: () => {
        r3.resizeDrawingSurfaceToCanvas();
        r3.pause()
        },
        });
    const r4 = new rive.Rive({
        src: "Main.riv",
        canvas: document.getElementById("canvas4"),
        autoplay: true,
        stateMachines: ["State Machine 2"],
        artboard : "Artboard 5",
        onLoad: () => {
        r4.resizeDrawingSurfaceToCanvas();
        r4.pause()
        },
        });
        RiveInstances=[]
        RiveInstances.push(r2)
        RiveInstances.push(r3)
        RiveInstances.push(r4)
        PlayRive()
    });
    
    function mapRange(value, oldMin, oldMax, newMin, newMax) {
        return ((value - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin;
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
document.querySelector('body').style.setProperty('--Header-Height', '100px');
document.getElementsByClassName('Logo')[0].className='LogoSide';
document.getElementsByClassName('ButtonBox')[0].className='ButtonBoxAlt';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        target.classList.add("in-view-Left");
      } else {
        const target = entry.target;
        target.classList.remove('in-view-Left');
      }
    });
  }, {
    threshold: 0 // Trigger when 10% of the element is visible
  });

  const targets = document.querySelectorAll('.AnimateLeft');
  targets.forEach((target, index) => {
    observer.observe(target);
    target.style.animationDelay = `${index * 0.4}s`; // 0.2s stagger for each element
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          target.classList.add("in-view-Right");
        } else {
          const target = entry.target;
          target.classList.remove('in-view-Right');
        }
      });
    }, {
      threshold: 0 // Trigger when 10% of the element is visible
    });
  
    const targets = document.querySelectorAll('.AnimateRight');
    targets.forEach((target, index) => {
      observer.observe(target);
      target.style.animationDelay = `${index * 0.4}s`; // 0.2s stagger for each element
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the .Grow class
    const elements = document.querySelectorAll('.Grow');
  
    // Create an intersection observer with a callback function
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'animate' class to the element when it enters the viewport
          entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
      });
    }, {
    });
  
    // Observe each element
    elements.forEach(element => {
      observer.observe(element);
    });
  });

function PlayRive() {
    Intersect=0
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sleep(500)
                RiveInstances[Intersect].play()
                Intersect++
                console.log(Intersect)
            }
        });
    });
    const hiddenElement = document.querySelectorAll(".Play")
    hiddenElement.forEach((el) => observer.observe(el));
}