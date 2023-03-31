
var olx = [
    {
        p_id: 1,
        p_prce: "24$",
        p_image: "https://cdn.corporatefinanceinstitute.com/assets/products-and-services-1024x1024.jpeg",
    },

    {
        p_id: 2,
        p_prce: "45$",
        p_image: "https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651",
    },

    {
        p_id: 3,
        p_prce: "64$",
        p_image: "https://corporate.oriflame.com/about-oriflame/product-philosophy/-/media/2E279B139BD74617958EDE0360D641FC.ashx",
    },

    {
        p_id: 4,
        p_prce: "95$",
        p_image: "https://www.oberlo.com/media/1603957118-winning-products.jpg",
    },

    {
        p_id: 5,
        p_prce: "59$",
        p_image: "https://7esl.com/wp-content/uploads/2018/01/personal-care.png",
    },

    {
        p_id: 6,
        p_prce: "10$",
        p_image: "https://d1902livswy8rb.cloudfront.net/dimg/670x670/dimg/coke-one-brand_4.jpg",
    },
    {
        p_id: 7,
        p_prce: "240$",
        p_image: "https://cdn.corporatefinanceinstitute.com/assets/products-and-services-1024x1024.jpeg",
    },

    {
        p_id: 8,
        p_prce: "450$",
        p_image: "https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651",
    },

    {
        p_id: 9,
        p_prce: "640$",
        p_image: "https://corporate.oriflame.com/about-oriflame/product-philosophy/-/media/2E279B139BD74617958EDE0360D641FC.ashx",
    },

    {
        p_id: 10,
        p_prce: "950$",
        p_image: "https://www.oberlo.com/media/1603957118-winning-products.jpg",
    },

    {
        p_id: 11,
        p_prce: "590$",
        p_image: "https://7esl.com/wp-content/uploads/2018/01/personal-care.png",
    },

    {
        p_id: 12,
        p_prce: "100$",
        p_image: "https://d1902livswy8rb.cloudfront.net/dimg/670x670/dimg/coke-one-brand_4.jpg",
    }
]

function showProd(){

olx.forEach(function (a){
    var maindiv = document.getElementById('maindiv')
    var productDiv = document.createElement('div')
    var imgDiv = document.createElement('div')
    var textDiv = document.createElement('div')
    productDiv.setAttribute('class', 'prodDiv')
    var mysrc = a.p_image
    var a1 = document.createElement("img")
    a1.src = a.p_image
    a1.setAttribute('height','200')
    textDiv.setAttribute('class', 'bgcolor')
    // document.getElementById('img1').src = a.p_image
    // var a2 = document.write("Product ID: ", a.p_id, " Price: ", a.p_prce)
    // var a2 = document.createTextNode('Product ID: ', a.p_id, ' Price: ', a.p_prce)
    imgDiv.appendChild(a1)
    textDiv.innerHTML = (" Product ID: " + a.p_id + " | " + "Price: " + a.p_prce + " ")
    productDiv.appendChild(imgDiv)
    productDiv.appendChild(textDiv)
    maindiv.appendChild(productDiv)
    
})

document.getElementById('showButton').setAttribute('class', 'displayNone')


}