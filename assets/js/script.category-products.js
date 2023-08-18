class Category{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

class Product{
    constructor(id, name, price, category){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CategoryService{
    constructor(){
        this.categories = [];
        this.nextCategoryId= 1;
    }

    addCategory(name){
        const id = this.nextCategoryId;
        this.nextCategoryId++;

        const category = new Category(id, name);
        this.categories.push(category);
    }
    
    getCategoryById(id){
        return this.categories.find((category )=> category.id == id);
    }

    updateCategory(id, name){
        const category = this.getCategoryById(id);
        category.name = name;
    }

    deleteCategory(id){
        const category = this.getCategoryById(id);
        const index = this.categories.indexOf(category);

        this.categories.splice(index, 1);
    }
}

class ProductsService{
    constructor(){
        this.products = [];
        this.nextProductId = 1;
    }

    addProduct(name, price, category){
        const id = this.nextProductId;
        this.nextProductId++;

        const product = new Product(id, name, price, category);
        this.products.push(product);

        category.products.push(product);
        
        
    }

    getProductById(id){
        return this.products.find((product) => product.id == id);
    }
}



const categoriesList = new CategoryService();

function createCategory(){
    const categoryName = document.getElementById("categoryNameInput").value;
   
    categoriesList.addCategory(categoryName);

    displayCategories();

    cleanFields();

    console.log(categoriesList.categories);
    // console.log("Categorias criadas");
}

const productsList = new ProductsService();

function createProduct(){
    const productName1 = "Choco";
    const productPrice1 = 0.50;
    const productCategory1 = categoriesList.categories[0];

    const productName2= "Sneakers";
    const productPrice2 = 100;
    const productCategory2 = categoriesList.categories[1];

    const productName3 = "Harry Potter";
    const productPrice3 = 50;
    const productCategory3 = categoriesList.categories[2];

    productsList.addProduct(productName1, productPrice2, productCategory3);
    productsList.addProduct(productName2, productPrice2, productCategory2);
    productsList.addProduct(productName3, productPrice3, productCategory3);

    // console.log(productsList.products);

}

function findCategory(id){
    const category = categoriesList.getCategoryById(id);

    // console.log(category.name);
}

function editCategory(id, name){
    categoriesList.updateCategory(id,name);

    console.log(categoriesList.categories);
}

function deleteCategory(id){
    categoriesList.deleteCategory(id);

    // console.log(categoriesList.categories);
}

function findProduct(id){
    const product = productsList.getProductById(id);

    console.log(product.name);
}

function displayCategories(){
    let content = "";

    categoriesList.categories.forEach((category) =>{
        content += `<li>${category.name}</li>`
    });

    document.getElementById("categoriesList").innerHTML = content;
}


function cleanFields(){
    document.getElementById("categoryNameInput").value = "";
}



