import {Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { ResponseData } from "src/global/globalClass";
import { HttMessage, HttpStatus } from "src/global/globalEnum";
import { ProductService } from "./product.service";
import { error } from "console";
import { UsersService } from "../users/users.service";
import { ProductDto } from "src/dto/product.dto";

@Controller('product')
export class ProductController{
    constructor (
        private readonly productService: ProductService,
        ){}

    //@UseGuards(AuthGuard)
    @Get('GetProduct')
    getProduct():ResponseData<string>{
    console.log("Product Controller1");
        try{
            return  new ResponseData<string>(this.productService.getProduct(),HttpStatus.SUCCESS, HttMessage.SUCCESS);
        }
        catch(error)
        {
            return  new ResponseData<string>(this.productService.getProduct(),HttpStatus.ERROR, HttMessage.ERROR);
        }
    }

    @Get('Ok')
    getOK():string{
    console.log("Product Controller1");
            return  "No Aut";
    }
    @Post('PostProduct')
    createProduct(@Body() productDto: ProductDto): ResponseData<ProductDto>{
        try{
            console.log("PostProduct");
            return  new ResponseData<ProductDto>(this.productService.posProduct(productDto), HttpStatus.SUCCESS, HttMessage.SUCCESS);
        }
        catch(error)
        {
            return  new ResponseData<ProductDto>(null, HttpStatus.ERROR, HttMessage.ERROR);
        }
    }
}