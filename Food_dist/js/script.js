// first slider
let tabcontents = document.querySelectorAll('.tabcontent')
let typeBtns = document.querySelectorAll('[data-type]')


typeBtns.forEach(btn => {
    btn.onclick = () => {
        typeBtns.forEach(el => el.classList.remove('tabheader__item_active'))

        btn.classList.add('tabheader__item_active')

        let num = +btn.getAttribute('data-type')
        slides(num)
    }
})

slides(0)

function slides(n) {
    tabcontents.forEach(item => item.classList.add('hide'))

    tabcontents[n].classList.remove('hide')
    tabcontents[n].classList.add('show', 'fade')
}

// second slider
let prev = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let sliders = document.querySelectorAll('.offer__slide')
let current = document.querySelector('#current')
let total = document.querySelector('#total')


let slideIndex = 0
showSlides(slideIndex)

function showSlides(n) {

    if (n >= sliders.length) {
        slideIndex = 0
    }
    if (n < 0) {
        slideIndex = sliders.length - 1
    }

    sliders.forEach(el => el.classList.add('hide'))

    sliders[slideIndex].classList.remove('hide')
    sliders[slideIndex].classList.add('show')

    current.innerHTML = '0' + (slideIndex)

    if (current.innerHTML = '0' + (slideIndex)) {
        total.innerHTML = '0' + (slideIndex + 1)
    }
}

prev.onclick = () => {
    slideIndex--
    showSlides(slideIndex)
}
next.onclick = () => {
    slideIndex++
    showSlides(slideIndex)
}

let gender_btns = document.querySelectorAll('.calculating__choose-item')
let choose = document.querySelectorAll('.calculating__choose-item3')


gender_btns.forEach(btn => {
    btn.onclick = () => {
        gender_btns.forEach(item => item.classList.remove('calculating__choose-item_active'))

        btn.classList.add('calculating__choose-item_active')
    }
})

choose.forEach(el => {
    el.onclick = () => {
        choose.forEach(x => x.classList.remove('calculating__choose-item_active'))

        el.classList.add('calculating__choose-item_active')
    }

})

let modal = document.querySelector('.modal')
let open_btns = document.querySelectorAll('button[data-modal]')
let close_btn = document.querySelector('[data-close]')

open_btns.forEach(btn => {
    btn.onclick = () => {
        modal.style.display = 'block'
        modal.classList.add('fade')
    }
})

close_btn.onclick = () => {
    modal.style.display = 'none'
}

setTimeout(() => {
    modal.style.display = 'block'
}, 2000);

// function openClose(arr, func) {
//     open_btns.forEach(btn => {
//         arr.onclick = () => {
//             func()
//         }
//     })
// }

// openClose(open_btns, openModal)
// openClose(close_btn, closeModal)

// function openModal() {
//     modal.style.display = 'block'
// }

// function closeModal() {
//     modal.style.display = 'none'
// }







