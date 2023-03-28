const form = document.querySelector('.form')

form.onsubmit = (e) => {
    e.preventDefault()
    location.href='https://caas-dashboard.netlify.app/'
}

ScrollReveal().reveal('.form', { delay: 1000 });