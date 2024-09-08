
gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis()
lenis.on('scroll', (e) => {
})
function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

gsap.to('.NavButton', {
    y:0,
    stagger:0.10,
    delay:0.2,
    duration: 0.500
});

Prev=0
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}


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


document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the email input value
    const email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validate the email
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    const payload = {
        content: `**New Subscription Request**\n\n**Email:** ${email}`
    };

    // Send the data to the Discord webhook
    fetch('https://discord.com/api/webhooks/1271636880567570594/vauUUjOEki4BALb7VUdlZg698xztJxhNt6LjpsiRUMY18YKhXU7qWL4BljPk1U8zH4DL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .then(data => {
        console.log('Success:', data);
        alert('Subscription successful!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error with your subscription.');
    });
});

document.getElementById('goButton').addEventListener('click', function() {
    // Get the selected value from the dropdown
    var selectedValue = document.getElementById('dropdown').value;
    
    // Define a mapping of options to URLs
    var urls = {
      'about-us': 'index.html#AboutUs',
      'highlights': 'index.html#Highlights',
      'gallery': 'index.html#Gallery',
      'workshops': 'Workshops.html',
      'e-summit': 'E-summit.html',
      'contact-us': 'ContactUs.html',
      'about-christ-ncr': 'http://ncr.christuniversity.in'
    };
    
    // Navigate to the URL based on the selected value
    if (urls[selectedValue]) {
      window.location.href = urls[selectedValue];
    }
  });
  