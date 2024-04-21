const producto1 = {
    nombre: "celular",
    precio: 100000,
    stock: 2
    };

producto1.id = "id123";
producto1["foto"] = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.promart.pe%2Fcelular-apple-iphone-13-128gb-rosado-1000475393%2Fp&psig=AOvVaw1EjXuX1NqeS8Ol1B3wUtHI&ust=1713488585512000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKjZ3cTIyoUDFQAAAAAdAAAAABAE"

console.log(producto1);
console.log(producto1.foto)
console.log(producto1["id"])

class Product {
    constructor(id, title, price, stock, images, onsale, supplier) {
    this.id = id;    // string
    this.title = title;   // string
    this.price = price;  // number
    this.stock = stock; // number
    this.images = images;    // []
    this.onsale = onsale;    // boolean = true false
    this._supplier = supplier;
    }

    get supplier() {
        return this._supplier;
    }

    set supplier(newName) {
        this._supplier = newName;
    } 

    sellUnits(units) {
        this.stock = this.stock - units    
    }
}



    const prod1 = new Product();
    const prod2 = new Product("002", "Iphone", 1200);
    const prod3 = new Product("003", "Iphone X", 1500, 4, "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.promart.pe%2Fcelular-iphone-14-pro-max-1tb-esim-negro-1000470694%2Fp&psig=AOvVaw1EjXuX1NqeS8Ol1B3wUtHI&ust=1713488585512000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKjZ3cTIyoUDFQAAAAAdAAAAABAI", true);
    const prod4 = new Product("004", "Iphone SE", 1800, 5, "https://http2 .mlstatic.com/D_NQ_NP_896424-MLA71783367608_092023-O.webp", false, "Hiraoka" )

    prod4.supplier = "Amazon";

    console.log(prod1);
    console.log(prod2);
    console.log(prod3);
    console.log(prod4);
    
    console.log(prod4.supplier);

    const prod5 = new Product("005", "Iphone SE", 1800, 12, "https://http2 .mlstatic.com/D_NQ_NP_896424-MLA71783367608_092023-O.webp", false, "Hiraoka" )

    prod5.sellUnits(10)
    prod5.sellUnits(5)
    console.log(prod5);