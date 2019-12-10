class Stores {
    constructor() {
        this.stores = []
        this.lists = []
        this.adapter = new StoresAdapter()
        // this.storeBindingsAndEventListeners()
        // this.itemBindingsAndEventListeners()
        this.fetchAndLoadStores()
    }

    // storeBindingsAndEventListeners() {
    //     this.storesContainer = document.getElementById('stores-container')
    //     this.name = document.querySelector('name')
    //     this.newStoreName = document.getElementById('store-name')
    //     this.storeForm = document.getElementById('new-store-form')
    //     this.storeForm.addEventListener('submit', this.createStore.bind(this))
    //     this.storesContainer.addEventListener('dblclick', this.handleStoreClick.bind(this))
    //     this.name.addEventListener('blur', this.updatStore.bind(this), true)
    // }

    // itemBindingsAndEventListeners() {

    // }

    // createStore(e) {
    //     e.preventDefault()
    //     const value = this.newStoreName.value

    //     this.adapter.createStore(value).then(store => {
    //         this.stores.push(new Store(store))
    //         this.newStoreName.value = ''
    //         this.render()
    //     })
    // }

    // handleNoteClick(e) {
    //     this.toggleStore(e)
    // }

    // toggleStore(e) {
    //     const li = e.target
    //     li.contentEditable = true
    //     li.focus()
    //     li.classList.add('editable')
    // }

    // updateStore(e) {
    //     const li = e.target
    //     li.contentEditable = false
    //     li.classList.remove('editable')
    //     const newValue = li.innerHTML
    //     const id = li.dataset.id
    //     //console.log(id)
    //     this.adapter.updateStore(newValue, id)
    // }

    fetchAndLoadStores() {
        this.adapter
            .getStores()
            .then(stores => {
                stores.forEach(store => this.stores.push(new Store(store)))
                // stores.forEach(store => this.stores.push(store))
                // console.log(this.stores)
            })
            .then(() => {
                this.render()
            })
    }

    render() {
        const storesContainer = document.getElementById('stores-container')
        storesContainer.innerHTML = this.stores.map(store => store.renderLi()).join('')
    }
}