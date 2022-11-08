const tabcontents = document.getElementsByClassName('tab-contents')
const tablinks = document.getElementsByClassName('tab-links')
const opentab = (tabname) => {
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove('active')
    }

    for(let tablink of tablinks){
        tablink.classList.remove('active')
        tablink.addEventListener('click', () => {
            tablink.classList.add('active')
        })
    }

    

    document.getElementById(tabname).classList.add('active')
}

const btnMenu = document.querySelector('.menu-toggle')
const menu = document.querySelector('nav ul')

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active')
    btnMenu.classList.toggle('active')
})

const closetab = () => {
    btnMenu.classList.remove('active')
    menu.classList.remove('active')
}



