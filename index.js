const elWrraper = document.querySelector('.lms__wrraper')
const elNavigatioon2 = document.querySelector('.lms__navigation_img')
const elAteg1 = document.querySelector('.lms__link_a__text1')
const elAteg2 = document.querySelector('.lms__link_a__text2')
const elAteg3 = document.querySelector('.lms__link_a__text3')
const elAteg4 = document.querySelector('.lms__link_a__text4')
const elAteg5 = document.querySelector('.lms__link_a__text5')
const elAteg6 = document.querySelector('.lms__link_a__text6')
const elAteg7 = document.querySelector('.lms__link_a__text7')

const elHeader = document.querySelector('.header__section')
const elNavbar = document.querySelector('.navbar__section')
const elMain = document.querySelector('.main__section')

const elBtn = document.querySelector('.navbar__wrraper__container__izoh__wrraper_btn__container__btn')
const elRol = document.querySelector('.navbar__wrraper__container__izoh__wrraper_btn__container__btn__rol')



elNavigatioon2.addEventListener('click', function () {
    elWrraper.classList.toggle('active__wrraper')
    elNavigatioon2.classList.toggle('active__lms__navigation_img')
    elAteg1.classList.toggle('active__text1')
    elAteg2.classList.toggle('active__text2')
    elAteg3.classList.toggle('active__text3')
    elAteg4.classList.toggle('active__text4')
    elAteg5.classList.toggle('active__text5')
    elAteg6.classList.toggle('active__text6')
    elAteg7.classList.toggle('active__text7')
    elHeader.classList.toggle('active__header')
    elNavbar.classList.toggle('active__navbar')
    elMain.classList.toggle('active__main')
})

elBtn.addEventListener('click', function () {
    elRol.classList.toggle('active__rol')
})

