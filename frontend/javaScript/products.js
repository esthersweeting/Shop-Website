

export function Product (id, name, description, prices , stock, type){
    this.id = id;
    this.name= name;
    this.description = description;
    this.price = prices;
    this.stock = stock;
    this.type = type;
}

export const products = [
    new Product(1, "Cola Cubes", "Hard-boiled sweets with a nostalgic cola flavour.", [1.70, 3.75, 7.00], [40, 25, 12], "Boiled Sweets"),
    new Product(2, "Blackcurrant & Liquorice", "Fruity blackcurrant combined with traditional liquorice.", [1.70, 4.00, 7.50], [35, 20, 10], "Boiled Sweets"),
    new Product(3, "Mint Imperials", "Crisp, refreshing peppermint sweets with a classic sugary shell.", [1.50, 3.50, 6.50], [50, 30, 15], "Boiled Sweets"),
    new Product(4, "Aniseed Balls", "Hard boiled sweets with a distinctive warm aniseed flavour.", [1.50, 3.50, 6.50], [45, 28, 14], "Boiled Sweets"),
    new Product(5, "Jelly Babies", "Soft, sugar-coated jelly sweets in assorted fruity flavours.", [1.70, 4.00, 7.50], [60, 35, 18], "Chewy Sweets"),
    new Product(6, "Wine Gums", "Chewy fruit gums in a variety of traditional shapes and flavours.", [1.70, 4.00, 7.50], [55, 32, 16], "Chewy Sweets"),
    new Product(7, "Midget Gems", "Small, chewy jelly sweets with a mixture of fruity flavours.", [1.70, 4.00, 7.50], [48, 26, 13], "Chewy Sweets"),
    new Product(8, "Flying Saucers", "Crisp edible wafers filled with tangy sherbet.", [1.80, 4.25, 8.00], [40, 22, 11], "Boiled Sweets"),
    new Product(9, "Parma Violets", "Small, floral sweets with a distinctive violet flavour.", [1.80, 4.25, 8.00], [38, 20, 10], "Boiled Sweets"),
    new Product(10, "Edinburgh Rock", "Soft, crumbly sticks of traditional peppermint confectionery.", [2.00, 4.75, 8.50], [30, 18, 9], "Fudge & Toffee"),
    new Product(11, "Scottish Tablet", "Rich, crumbly Scottish confection made with sugar, butter and milk.", [2.20, 5.25, 9.50], [25, 15, 8], "Fudge & Toffee"),
    new Product(12, "Clotted Cream Fudge", "Smooth and creamy fudge inspired by traditional Cornish confectionery.", [2.50, 5.75, 10.50], [20, 12, 6], "Fudge & Toffee"),
    new Product(13, "English Toffee", "Rich, buttery hard toffee with a deep caramel flavour.", [1.90, 4.50, 8.00], [35, 20, 10], "Fudge & Toffee"),
    new Product(14, "Cinder Toffee", "Light, crunchy honeycomb covered in a golden caramelised coating.", [2.00, 4.75, 8.50], [28, 16, 8], "Fudge & Toffee"),
    new Product(15, "Liquorice Allsorts", "Colourful layers of liquorice, coconut and sweet fondant.", [1.80, 4.25, 8.00], [42, 24, 12], "Chewy Sweets"),
    new Product(16, "Chocolate Limes", "Hard lime-flavoured sweets surrounding a smooth chocolate centre.", [1.80, 4.25, 8.00], [36, 20, 10], "Boiled Sweets"),
    new Product(17, "Fudge", "Soft, buttery traditional fudge with a rich vanilla sweetness.", [2.20, 5.00, 9.00], [32, 18, 9], "Fudge & Toffee"),
    new Product(18, "Rhubarb & Custards", "Hard-boiled sweets combining tangy rhubarb with creamy custard flavour.", [1.70, 4.00, 7.50], [40, 24, 12], "Boiled Sweets"),
    new Product(19, "Sherbet Lemons", "Hard lemon sweets filled with fizzy sherbet.", [1.60, 3.75, 7.00], [45, 26, 13], "Boiled Sweets"),
    new Product(20, "Pear Drops", "Fruity boiled sweets with a distinctive pear aroma.", [1.60, 3.75, 7.00], [38, 22, 11], "Boiled Sweets"),
    new Product(21, "Humbugs", "Striped hard sweets with a minty toffee flavour.", [1.70, 4.00, 7.50], [40, 24, 12], "Boiled Sweets"),
    new Product(22, "Pontefract Cakes", "Small, round liquorice discs with a rich, distinctive flavour.", [1.80, 4.25, 8.00], [30, 18, 9], "Chewy Sweets"),
    new Product(23, "Barley Sugars", "Traditional amber-coloured boiled sweets with a delicate caramel taste.", [1.60, 3.75, 7.00], [34, 20, 10], "Boiled Sweets"),
    new Product(24, "Bonbons", "Chewy toffee-style sweets in a variety of fruity flavours.", [1.90, 4.50, 8.00], [36, 21, 11], "Chewy Sweets"),
    new Product(25, "Coconut Ice", "Sweet, chewy confection made from desiccated coconut and sugar.", [2.00, 4.75, 8.50], [25, 15, 7], "Fudge & Toffee"),
    new Product(26, "Everton Mints", "Black and white striped mints with a smooth minty centre.", [1.80, 4.25, 8.00], [33, 19, 10], "Boiled Sweets"),
    new Product(27, "Seaside Rock", "Traditional hard candy stick with lettering running through the middle.", [2.10, 5.00, 9.00], [22, 13, 7], "Boiled Sweets"),
    new Product(28, "Treacle Toffee", "Dark, rich toffee made with black treacle.", [2.00, 4.75, 8.50], [27, 16, 8], "Fudge & Toffee")
];

localStorage.setItem("currentProduct", JSON.stringify(products [0])) ;






export const idMap = new Map ();
export const nameMap = new Map ();



products.forEach((product) => {
    idMap.set(product.id,product);
    nameMap.set(product.name,product);
})



