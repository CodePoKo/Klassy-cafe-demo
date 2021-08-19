// Scroll navbar menu
// lấy chiều cao của window khi scroll chuột(chiều cao màn hình hiển thị)
var windowScrollHeight = window.scrollY

// Lấy ra chiều cao của topSlider
var topSliderHeight = document.querySelector('.top-slider').offsetHeight

// lấy chiều cao thẻ header
var headerHeight = document.getElementById('header').offsetHeight

function scrollFunction() {
    if(windowScrollHeight >= topSliderHeight - headerHeight) {
        document.getElementById('header').classList.add('header-scroll')
    } else {
        document.getElementById('header').classList.remove('header-scroll')
    }
}
window.onscroll = function() {
    scrollFunction()
}


// Mobile menu trigger

var trigger = document.querySelector('.menu-trigger')
var navbarList = document.querySelector('.navbar-list')

trigger.addEventListener('click', triggerFunc)
function triggerFunc() {
    // thay đổi nút navbar menu
    trigger.classList.toggle('active')
    // Đóng mở navbar menu
    navbarList.classList.toggle('active')
}

// mobile menu subnav
var submenu = document.querySelector('.submenu')
var subnavList = document.querySelector('.subnavbar-list')

submenu.addEventListener('click', function() { 
    // đóng mở subnav menu
    subnavList.classList.toggle('active')
})

// Tự động đóng khi chọn menu
// lấy ra tất cả cá thẻ a có href là #
var menuItems = document.querySelectorAll('.navbar-list li a[href*="#"]')
// lặp qua tất cả các thẻ a đó
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i]
// lắng nghe sự kiện click và từng thẻ a
    menuItem.onclick = function(e) {
// đặt biến cha parentMenu, tìm tất cả các thẻ ae liền kề và trong tất cả thẻ đó có thẻ subnavbar-list
    var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnavbar-list')
// nếu là cha parentMenu
    if(isParentMenu) {
        // thì loại bỏ thuộc tính mặc định của thẻ a
        e.preventDefault()
    // nếu không phải
    } else {
        // gọi lại hàm triggerFunc
        // để đóng lần lượt cả nút trigger lẫn toàn bộ navbar list
            triggerFunc()
        }
    }
}


// auto slide

var prevBtn = document.querySelector('.prevArrow')
var nextBtn = document.querySelector('.nextArrow')

var slide = document.querySelectorAll('.slide')

var currentSlideIndex = 0

prevBtn.addEventListener('click', function() {
    slide[currentSlideIndex].style.animationName = 'prevOld'

    if(currentSlideIndex <= 0) {
        currentSlideIndex = slide.length - 1
    } else {
        currentSlideIndex--
    }

    slide[currentSlideIndex].style.animationName = 'prevNew'
})

nextBtn.addEventListener('click', function() {
    slide[currentSlideIndex].style.animationName = 'nextOld'

    if(currentSlideIndex >= slide.length - 1) {
        currentSlideIndex = 0
    } else {
        currentSlideIndex++
    }

    slide[currentSlideIndex].style.animationName = 'nextNew'
})

setInterval(function() {
    nextBtn.click()
},6000)


// Drag slide




// klassy week
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// Lấy tất cả các thẻ a có class: oder-under-choose__link
const tabsMenu = $$('.oder-under-choose__link')

// Lấy ra thẻ a có class: oder-under-choose__link và cả class active
const tabActive = $('.oder-under-choose__link.active')

// Lấy ra tất cả các tab-pane
const panes = $$('.tab-pane')

// Lấy ra tất cả các tab-pane có class active
const paneActive = $('.tab-pane.active')

tabsMenu.forEach((tabItem, index) => {
    // lấy từng tab-pane
    const pane = panes[index]

    tabItem.onclick = function(e) {
        
            e.preventDefault()

            $('.oder-under-choose__link.active').classList.remove('active')
            this.classList.add('active')

            $('.tab-pane.active').classList.remove('active')
            pane.classList.add('active')
    }
});
