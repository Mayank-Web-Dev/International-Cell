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
    target.style.animationDelay = `${index * 0.2}s`; // 0.2s stagger for each element
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
