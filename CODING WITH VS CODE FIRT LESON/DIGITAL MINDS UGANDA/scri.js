document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form')
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name')?.ariaValueText;
        const email = document.getElementById('email')?.ariaValueText
        const message = document.getElementById('message')?.ariaValueText;
        alert('Message sent successfully!');
        contactForm.requestFullscreen();
    });
});

// --- PUT YOUR NUMBER HERE ---
const myNumber = "256709539676";

function sendWA() {
    const name = document.getElementById('wa-name')?.ariaValueText;
    const issue = document.getElementById('wa-issue')?.ariaValueText;
    const phone = document.getElementById('wa-phone')?.ariaValueText;

    if (!name || !issue) return alert("Please fill name and message");

    const text = `*FREE SUPPORT ENQUIRY*%0A👤 Name: ${name}%0A📞 Contact: ${phone}%0A📝 Issue: ${issue}`;

    alert("Redirecting to WhatsApp for free support...");
    window.open(`https://wa.me/${myNumber}?text=${text}`, '_blank');
}

