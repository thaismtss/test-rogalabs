import { getHtml, updatePagination } from './index.js'

function next(initState) {
    initState.page++

    const lastPage = initState.page > initState.totalPage

    if(lastPage) {
        initState.page--
    }
}

function prev(initState) {
    initState.page--

    if ( initState.page < 1) {
        initState.page++
    }
}

export function goToPage(page, initState) {
    if (page < 1) {
        page = 1
    }

    initState.page = +page

    if (page > initState.totalPage) {
        initState.page = initState.totalPage
    }
}

export function createListenersConstrols(initState) {
    getHtml('.first').addEventListener('click', () => {
        goToPage(1, initState)
        updatePagination(initState)
    })

    getHtml('.last').addEventListener('click', () => {
        goToPage(initState.totalPage, initState)
        updatePagination(initState)
    })

    getHtml('.next').addEventListener('click', () => {
        next(initState)
        updatePagination(initState)
    })

    getHtml('.prev').addEventListener('click', () => {
        prev(initState)
        updatePagination(initState)
    })

}