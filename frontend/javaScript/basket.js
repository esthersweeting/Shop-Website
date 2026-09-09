export function Item (product,size,quantity){
    this.product = product;
    this.size= size;
    this.quantity = quantity;

    this.key = "p"+ this.product.id + "s"+ this.size;
}

export function BasketValue(quantity,product){
    this.quantity = quantity;
    this.product= product;
}

const json = localStorage.getItem("basket");
let basket = null;
if (json != null){
    basket = JSON.parse(json);
    const hashBasket = new Map();

    basket.forEach(element => {
    if (hashBasket.get(element.key) ==null){
        hashBasket.set(element.key,new BasketValue(parseInt(element.quantity),element));
    }
    else{
        const num = parseInt(element.quantity)+parseInt(hashBasket.get(element.key).quantity);
        const basketValue = new BasketValue (num,element);
        
        hashBasket.set(element.key,basketValue);
    }
    });

    console.log(hashBasket);
    
}

