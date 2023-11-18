var prodName = document.getElementById('prodName') //html input
var prodPrice = document.getElementById('prodPrice')
var prodDesc = document.getElementById('prodDesc')

var productArray = []

if (localStorage.getItem('products') != null) {
    productArray = JSON.parse(localStorage.getItem('products'))
    displayProduct()
}

function AddProduct() {


    var productObject = {
        name: prodName.value,
        price: prodPrice.value,
        desc: prodDesc.value
    }

    productArray.push(productObject)
    localStorage.setItem('products', JSON.stringify(productArray))
    clearInputs()
    displayProduct()

}




function displayProduct() {
    var cartona = ``
    for (var i = 0; i < productArray.length; i++) {
        cartona += `
        <tr>
        <td>${productArray[i].name}</td>
        <td>${productArray[i].price}</td>
        <td>${productArray[i].desc}</td>
        <td>
          <button onclick="deleteItem(${i})" class="btn btn-danger btn-sm">DELETE</button>
          <button class="btn btn-warning btn-sm">UPDATE</button>
        </td>
      </tr>
        `
    }
    document.getElementById('demo').innerHTML = cartona
}

function clearInputs() {
    prodName.value = ""
    prodPrice.value = ""
    prodDesc.value = ""
}

function deleteItem(index) {

    productArray.splice(index, 1)
    localStorage.setItem('products', JSON.stringify(productArray))
    displayProduct()

}


function search(search) {

var cartona=``
    for (var i = 0; i < productArray.length; i++) {
        if (productArray[i].name.toLowerCase().includes(search.toLowerCase())) {
            cartona += `
            <tr>
            <td>${productArray[i].name.replace(search,'<span>'+search+'</span>')}</td>
            <td>${productArray[i].price}</td>
            <td>${productArray[i].desc}</td>
            <td>
              <button onclick="deleteItem(${i})" class="btn btn-danger btn-sm">DELETE</button>
              <button class="btn btn-warning btn-sm">UPDATE</button>
            </td>
          </tr>
            `
        }
    }
    document.getElementById('demo').innerHTML=cartona
}


/**
 * abc->lazem aktem abc gnb b3d
 * []-> or
 * [^abc]->not
 * {3}
 * {3,6}
 * {3,}
 * ? zero or one
 * *zero or more
 */