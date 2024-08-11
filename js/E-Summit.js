
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


document.addEventListener('DOMContentLoaded', () => {
    const splitTypes = document.querySelectorAll(".AnimateType");

    splitTypes.forEach((char) => {
        const split = new SplitType(char, { types: 'char' });

        // Get all character elements
        const characters = split.chars;
        const totalChars = characters.length;

        characters.forEach((character, i) => {
            // Apply fade-in from the left with increasing delay
            character.style.animation = `fadeIn 1s forwards`;
            character.style.opacity = `0`;
            character.style.animationDelay = `${7+(totalChars - i - 1) * 0.05}s`;
        });
    });
});

// script.js

document.addEventListener('DOMContentLoaded', () => {
  const headings = document.querySelectorAll('.HeadingHolder h1, .HeadingHolder h2, .HeadingHolder h3');
  const paragraphs = document.querySelectorAll('.ParaHolder p');

  const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1 // Trigger animation when 10% of the element is visible
  };

  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const element = entry.target;

              // Add animation classes when the element is in view
              if (element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3') {
                  element.style.animation = `fadeInFromTop 1s ease-out forwards`;
                  // Add specific delays for each heading
                  if (element.tagName === 'H1') element.style.animationDelay = '0s';
                  if (element.tagName === 'H2') element.style.animationDelay = '0.5s';
                  if (element.tagName === 'H3') element.style.animationDelay = '1s';
              }

              if (element.tagName === 'P') {
                  element.style.animation = `sweepFadeIn 1s ease-out forwards`;
                  // Add specific delays for each paragraph
                  if (element === paragraphs[0]) element.style.animationDelay = '1.5s';
                  if (element === paragraphs[1]) element.style.animationDelay = '2s';
              }

              // Stop observing once the animation is applied
              observer.unobserve(element);
          }
      });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe each heading and paragraph
  headings.forEach(heading => observer.observe(heading));
  paragraphs.forEach(paragraph => observer.observe(paragraph));
});

function openLink() {
  window.open('https://forms.gle/7ovFb2JFMrGXJie39', '_blank');
}