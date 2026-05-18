let categoryList=document.querySelector(".category-list")
let getCategories=async ()=>{
    let apiRes=await fetch( `https://dummyjson.com/products/categories`)
    let categoryData=await apiRes.json()

    let catItem=''
    categoryData.forEach((obj,index)=>{
        let {name,slug}=obj
        catItem+=`<li><button onclick="getProducts('${slug}')" class="category-item ">${name} </button></li>`
    })

    categoryList.innerHTML=catItem

    // console.log(categoryData);
    
}
// https://dummyjson.com/products

let productOuter=document.querySelector(".product-grid")
let loadingElement=document.querySelector(".loading")
// https://dummyjson.com/products/category/smartphones
let getProducts=async (category)=>{

    loadingElement.style.display="block"

    let apiUrl
    if(category){
        apiUrl=`https://dummyjson.com/products/category/${category}`
    }
    else{
        apiUrl=`https://dummyjson.com/products`
    }

    let apiRes=await fetch(apiUrl)
    let productData=await apiRes.json()
    let {products}=productData
    let prodcutItem=''
    products.forEach((produtObj)=>{

        let {title,description,price,thumbnail}=produtObj
        prodcutItem+=`<article class="product-card">
            <div class="product-image img-1">
                <img src="${thumbnail}" />
            </div>
            <div class="product-meta">
              <div>
                <h3>${title}</h3>
                <p>${description}</p>
              </div>
              <span class="price">$ ${price}</span>
            </div>
            <div class="product-footer">
              <span class="rating">4.6 / 5</span>
              <button class="buy-btn">Add to Cart</button>
            </div>
          </article>`
    })
    
     loadingElement.style.display="none"
    productOuter.innerHTML=prodcutItem
    
    
}


getProducts()

getCategories()