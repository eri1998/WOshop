
import { IVariantItemOfCollection } from "./IVariantItemOfCollection.interfaces";

export interface ICollectionItems{
    price:number;
    itemType:string;
    variantsItems:IVariantItemOfCollection[];
    quantity:number;
    categoryId?:string;
   
}