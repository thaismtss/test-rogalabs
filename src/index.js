import { App } from '/App.js';
import {  updatePagination, createListenersConstrols } from './utils/index.js'

var initState = {
    page: 1,
    offset: 0,
    limit: 5,
    quantityItems: 100,
    maxPages: 7,
    get totalPage() {
        return Math.ceil(this.quantityItems / this.maxPages)
    }
}

const app = document.getElementById('app')

const render = () => {
    app.innerHTML = App()
}

function init () {
    render()
    updatePagination(initState)
    createListenersConstrols(initState)
}

init()
