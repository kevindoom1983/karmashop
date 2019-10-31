import Category from "./classes/category";
import Brand from "./classes/brand";
import Color from "./classes/color";
import Product from "./classes/product";
import RelatedProduct from "./classes/relatedproduct";

class Service {

    
	
	getCategories() {
        return [
         
            new Category(1, 'Frozen Fish', '(13)', ),
            new Category(2, 'Dried Fish', '(09)'),
            new Category(3, 'Fresh Fish', '(17)'),
            new Category(4, 'Meat Alternatives', '(01)'),
            new Category(5, 'Meat', '(11)'),
            
        ];
    }

    getBrands() {
        return [
         
            new Brand(1, 'Apple', '(29)', ),
            new Brand(2, 'Asus', '(29)'),
            new Brand(3, 'Gionee', '(19)'),
            new Brand(4, 'Micromax', '(19)'),
            new Brand(5, 'Samsung', '(19)'),
            
        ];
    }

    getColors() {
        return [
         
            new Color(1, 'Black', '(29)', ),
            new Color(2, 'Black Leather', '(29)'),
            new Color(3, 'Black with red', '(19)'),
            new Color(4, 'Gold', '(19)'),
            new Color(5, 'Spacegrey', '(19)'),
            
        ];
    }

    getProducts() {
        return [
            new Product(1, 'p1.jpg',),
            new Product(2, 'p2.jpg',),
            new Product(3, 'p3.jpg',),
            new Product(4, 'p4.jpg',),
            new Product(5, 'p5.jpg',),
            new Product(6, 'p6.jpg',),
            
        ];
    }

    getRelatedProducts() {
        return [
            new RelatedProduct(1, 'r1.jpg',),
            new RelatedProduct(2, 'r2.jpg',),
            new RelatedProduct(3, 'r3.jpg',),
            new RelatedProduct(4, 'r4.jpg',),
            new RelatedProduct(5, 'r5.jpg',),
            new RelatedProduct(6, 'r6.jpg',),
            new RelatedProduct(7, 'r7.jpg',),
            new RelatedProduct(8, 'r8.jpg',),
            new RelatedProduct(9, 'r9.jpg',),
            
        ];
    }
   




}

export default Service;