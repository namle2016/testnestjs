//product.service.ts
import{ Injectable } from '@nestjs/common'
import { ProductDto } from 'src/dto/product.dto';
import { ResponseData } from 'src/global/globalClass';

@Injectable()
export class ProductService{
    getProduct():string{
        console.log("Product Service2");
        return 'Product';
    }

    posProduct(productDto: ProductDto): ProductDto {
        const { productName, price } = productDto;
        const data = `Log productName: ${productName} -price: ${price}`;
        const _productDto = new ProductDto();
        _productDto.id = 1;
        _productDto.productName ="Test 2";
        _productDto.price = price + 1;
        console.log(data);
        return productDto;
      }
}