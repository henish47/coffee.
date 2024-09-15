document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('number').value;
    const message = document.getElementById('message').value;

   
    if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
    }

    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Message:', message);

    
    document.getElementById('contactForm').reset();

    alert('Your message has been sent!');
});