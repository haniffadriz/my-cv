const tabcontents = document.getElementsByClassName('tab-contents')

const opentab = (tabname) => {
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove('active')
    }

    document.getElementById(tabname).classList.add('active')
}
