document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Gather form data
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('Email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Create the payload for the webhook
    const payload = {
        content: `**New Contact Form Submission**\n\n**Full Name:** ${fullName}\n**Email:** ${email}\n**Subject:** ${subject}\n**Message:** ${message}`
    };

    // Send the data to the Discord webhook
    fetch('https://discord.com/api/webhooks/1271618249347436654/m-mNgNMtdoqy7-QipOLgkx5zkvsWo9CEgZaBEsIbqE-E1rCENjK5ry-OfR9a-Vdljlfd', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        console.log('Response status:', response.status); // Log response status
        return response; // Attempt to parse JSON response
    })
    .then(data => {
        console.log('Response data:', data.ok); // Log response data
        // Check if the response was successful
        if (data.ok == true) { // Adjust based on actual success criteria
            alert('Your message has been sent!');
        } else {
            alert('Your message was not sent.'); // Show different message if not successful
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error sending your message.');
    });
});

