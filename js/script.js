import '../scss/style.scss'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
const blockHeader = document.querySelector('header')
const categoryList = document.querySelector('.list_category')
const categoryListAllLi = Array.from(categoryList.querySelectorAll('li'))
const btnMenu = document.querySelector('.humburger')
const parentBlock = document.createElement('div')
const btnClose = document.createElement('div')
btnClose.classList.add('btn_close')
parentBlock.classList.add('modal_menu_box')

btnMenu.addEventListener('click', () => {
    parentBlock.classList.remove('remove_modal_menu')
    parentBlock.textContent = '';
    categoryListAllLi.forEach((item) => {
        const element = document.createElement('p');
        element.textContent = item.textContent;
        parentBlock.appendChild(element)
    })
    parentBlock.appendChild(btnClose)
    blockHeader.appendChild(parentBlock)
})
btnClose.addEventListener('click', () => {
    parentBlock.classList.add('remove_modal_menu')
})