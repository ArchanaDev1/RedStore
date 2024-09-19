class Product {
    constructor(name, img, imgGal, price, des, qtyInStock, rating){
        this.name = name;
        this.img = img;
        this.imgGal = imgGal,
        this.price = price;
        this.des = des;
        this.qtyInStock = qtyInStock;
        this.rating = rating;
    }
}

const products = [
    new Product(
        "Red Printed T-Shirt",
        "/static/images/product-1.jpg",
        ["/static/images/gallery-1.jpg", "/static/images/gallery-2.jpg", "/static/images/gallery-3.jpg", "/static/images/gallery-4.jpg"],
        50,
        "Red printed t-shirt. Material: cotton, Summer wear",
        10,
        4
    ),
    new Product(
        "Black Sparx Shoes",
        "/static/images/product-2.jpg",
        ["/static/images/product-2.jpg", "/static/images/product-2.jpg", "/static/images/product-2.jpg", "/static/images/product-2.jpg"],
        60,
        "Black Sparx Shoes, Footwear, light weight sport shoes",
        11,
        4.5
    ),
    new Product(
        "Chinoes",
        "/static/images/product-3.jpg",
        ["/static/images/product-3.jpg", "/static/images/product-3.jpg", "/static/images/product-3.jpg", "/static/images/product-3.jpg"],
        70,
        "Chinoes. Material: cotton, Summer wear",
        12,
        4
    ),
    new Product(
        "Blue T-Shirt",
        "/static/images/product-4.jpg",
        ["/static/images/product-4.jpg", "/static/images/product-4.jpg", "/static/images/product-4.jpg", "/static/images/product-4.jpg"],
        50,
        "Blue t-shirt. Material: cotton, Summer wear",
        10,
        4
    ),
    new Product(
        "Grey Shoes",
        "/static/images/product-5.jpg",
        ["/static/images/product-5.jpg", "/static/images/product-5.jpg", "/static/images/product-5.jpg", "/static/images/product-5.jpg"],
        50,
        "Grey Shoes. Material: cotton, Sports wear",
        10,
        4
    ),
    new Product(
        "Black Puma T-Shirt",
        "/static/images/product-6.jpg",
        ["/static/images/product-6.jpg", "/static/images/product-6.jpg", "/static/images/product-6.jpg", "/static/images/product-6.jpg"],
        50,
        "Black Puma T-Shirt. Material: cotton, Summer wear",
        10,
        4
    ),
    new Product(
        "Shocks 3-pairs",
        "/static/images/product-7.jpg",
        ["/static/images/product-7.jpg", "/static/images/gallery-1.jpg", "/static/images/gallery-2.jpg", "/static/images/gallery-3.jpg"],
        50,
        "Shocks 3-pairs. Material: cotton, Summer wear",
        10,
        4
    ),
    new Product(
        "Black Watch",
        "/static/images/product-8.jpg",
        ["/static/images/product-8.jpg", "/static/images/gallery-1.jpg", "/static/images/gallery-2.jpg", "/static/images/gallery-3.jpg"],
        50,
        "Black Watch. Material: Steel, Men's Fashion",
        10,
        4
    ),
    new Product(
        "Black Watch with yellow needle",
        "/static/images/product-9.jpg",
        ["/static/images/product-9.jpg", "/static/images/gallery-1.jpg", "/static/images/gallery-2.jpg", "/static/images/gallery-3.jpg"],
        50,
        "Black Watch with yellow needle. Material: Steel, Men's Fashion",
        10,
        4
    ),
    new Product(
        "Black Red Puma Shoes",
        "/static/images/product-10.jpg",
        ["/static/images/product-10.jpg", "/static/images/gallery-1.jpg", "/static/images/gallery-2.jpg", "/static/images/gallery-3.jpg"],
        50,
        "Black Red Puma Shoes. Material: light rexine, Sports wear",
        10,
        4
    ),
    new Product(
        "Grey Loafer Shoes",
        "/static/images/product-11.jpg",
        ["/static/images/product-11.jpg", "/static/images/gallery-1.jpg", "/static/images/gallery-2.jpg", "/static/images/gallery-3.jpg"],
        50,
        "Grey Loafer Shoes. Material: cotton, Casual Foot wear",
        10,
        4
    ),
    new Product(
        "Black Adidas Lower",
        "/static/images/product-12.jpg",
        ["/static/images/product-12.jpg", "/static/images/gallery-1.jpg", "/static/images/gallery-2.jpg", "/static/images/gallery-3.jpg"],
        50,
        "Black Adidas Lower. Material: cotton, Sports wear",
        10,
        4
    )
]

module.exports = products;