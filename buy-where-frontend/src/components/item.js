class Item {
    constructor(itemJSON) {
        this.id = itemJSON.id
        this.name = itemJSON.name
        this.price = itemJSON.price
        this.quantity = itemJSON.quantity
    }

    itemsHTML(items) {
        return (`
            <ul>     
                <div id="items-container">
                    <table>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                        ${items}
                    </table>
                </div>
            </ul>
        `)
    }

    get tableHTML() {
        return (`
            <tr>
                <td>${this.name}</td>
                <td>${this.price}</td>
                <td>${this.quantity}</td>
            </tr>
        `)
    }

    // get addItemButton() {
    //     return (`
    //         <button name="Add Item">Add Item</button>
    //     `)
    // }
}