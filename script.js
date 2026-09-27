// Cultural Muse — small interactions (no libraries needed)

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});

// Close the mobile menu after tapping a link
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  });
});

// Email sign-up (front-end only for now).
// When you choose an email platform (e.g. MailerLite, Kit or Mailchimp),
// replace this with that platform's form code or form action URL.
const form = document.getElementById('signup-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = form.email.value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  message.classList.toggle('error', !valid);

  if (!valid) {
    message.textContent = 'Please enter a valid email address.';
    return;
  }

  const interests = [...document.querySelectorAll('input[name="interest"]:checked')].map((i) => i.value);
  console.log('Sign-up (not yet connected to an email platform):', { email, interests });

  message.textContent = 'Thank you — you’re on the list. Keep an eye on your inbox.';
  form.reset();
});

// Keep the footer year current
document.getElementById('year').textContent = new Date().getFullYear();
