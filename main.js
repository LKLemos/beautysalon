// Open / Close menu-header //
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

// Click event for close menu, when click on ancors
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

// Shadow in menu bar activate from scroll //
const header = document.querySelector('#header')
const navaHeight = header.offsetHeight

function changeHeaderWhenScroll() {

    if (window.scrollY >= navaHeight) {
            header.classList.add('scroll')
    } else {
            header.classList.remove('scroll')
    }
}

// Testimonials carousel slider swiper //
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})

// ScrollReveal Animation //
const scrollReveal = ScrollReveal({
    ogrin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`
    #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
`, { interval: 100 })

// Back to Top button//
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
    
    if (window.scrollY >= 580) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

// Activate Links Menu  with scroll //
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

//When Scroll//
window.addEventListener('scroll', function () {
   changeHeaderWhenScroll()
   backToTop()
   activateMenuAtCurrentSection()
})