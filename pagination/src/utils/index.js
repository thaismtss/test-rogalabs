import { faker } from 'https://cdn.skypack.dev/@faker-js/faker'
import { goToPage } from './constrols.js'
export * from './constrols.js'

export function createUsers (quantityItems) { 
    const data = Array.from({length: quantityItems}).map((_) => {
        return {
            name: faker.name.findName(),
            email: faker.internet.email()
        }
    })
    return data
}

export function getHtml (element) {
    return document.querySelector(element)
}

function createItem(user) {
    const div = `
    <div class='user'>
        <p>${user.name}</p>
        <p><i class="fa fa-envelope"></i>${user.email}</p>
    </div>`
    
    getHtml('.list').innerHTML += div

}

function calculateMaxButtonsViible (initState) {
    const maxButtonsVisible = initState.maxPages

    let maxLeft = (initState.page - Math.floor(maxButtonsVisible / 2))
    let maxRight = (initState.page + Math.floor(maxButtonsVisible / 2))

    if (maxLeft < 1) {
        maxLeft = 1
        maxRight = maxButtonsVisible
    }

    if (maxRight > initState.totalPage) {
        maxLeft = initState.totalPage - ( maxButtonsVisible - 1)
        maxRight = initState.totalPage

        if (maxLeft < 1 ) maxLeft = 1
    }

    return { maxLeft, maxRight}

}

function createButtons(page, initState) {
    const button = document.createElement('div')
    button.innerHTML = page

    if ( initState.page == page) {
        button.classList.add('active')
    }

    button.addEventListener('click', (e) => {
        const page = e.target.innerText
        goToPage(page, initState)
        updatePagination(initState)
        
    })

    getHtml('.controls .numbers').appendChild(button)


}

function updateButtons (initState) {
    getHtml('.controls .numbers').innerHTML = ""
    
    const { maxLeft, maxRight} = calculateMaxButtonsViible(initState)
    for (let page = maxLeft; page <= maxRight; page++) {
        createButtons(page, initState)
    }
}


function updtadeItem(initState) {
    getHtml('.list').innerHTML = ""
    
    let page = initState.page - 1
    let start = page * initState.limit
    let end = start + initState.limit
    
    const users = createUsers(initState.quantityItems)
    const paginetdItems = users.slice(start, end)
    
    paginetdItems.forEach(createItem)
    
}

export function updatePagination(initState) {
    updtadeItem(initState)
    updateButtons(initState)
}