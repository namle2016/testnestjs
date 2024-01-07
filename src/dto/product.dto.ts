//dto: Data transfer object- hứng data từ client gởi lên server hoặc giữa các service trong microservice
export class ProductDto {
    id?: number;
    categoryId?: number;
    productName?:string;
    price?: number;
  }

// {
// "categoryId" : 100,
// "productName" : "productName",
// "price" : 2000
// }