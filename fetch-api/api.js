fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);




async function fetchApi() {
    let a = await fetch('https://dummyjson.com/products')
    let b = await a.json()
    for(const element of b.products){

        let div = document.createElement('div')
        let h1 = document.createElement('h1')
        let p = document.createElement('p')
        let p2 = document.createElement('p')
        let b = document.createElement('b')
        let img = document.createElement('img')
      

        h1.textContent=element.title
        p.textContent=element.description
        p2.textContent=element.category
        b.textContent=element.price
        img.setAttribute('src',element.images[0])

        div.appendChild(h1)
        div.appendChild(p)
        div.appendChild(p2)
        div.appendChild(b)
        div.appendChild(img)

        document.querySelector('#parent').appendChild(div)
    }
    
}

fetchApi()