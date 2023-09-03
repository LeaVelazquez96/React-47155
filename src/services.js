const products =[
    {id:1, name:"Resma Boreal ", price:1600, category:"resmas" },
    {id:1, name:"Resma Pampa", price:1399, category:"resmas" },
    {id:1, name:"Toner HP", price:5600, category:"toners" },
    {id:1, name:"Toner Epson", price:4600, category:"toners" },
    {id:1, name:"Bibliorato", price:1600, category:"libreria" },
    {id:1, name:"Clip N6", price:400, category:"libreria" },
    {id:1, name:"Bol BIC", price:300, category:"libreria" }
]
export const getProduct = (id) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const product= products.find((p)=>p.id === id);
            if(product) {
                resolve(product)
            } else {
                reject('No existe Producto')
            }
        },1000);
    });
};

export const getProducts=(category)=> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const productsFiltered = category ? products.filter((product)=> product.category === category):products;
        resolve(productsFiltered);
        },1000);
    });
}