const tabcontents = document.getElementsByClassName('tab-contents')

const opentab = (tabname) => {
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove('active')
    }

    document.getElementById(tabname).classList.add('active')
}

const btnMenu = document.querySelector('.menu-toggle')
const menu = document.querySelector('nav ul')

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active')
})

