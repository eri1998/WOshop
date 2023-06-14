import { ICollectionItems } from "./ICollectionItems.interfaces";

export interface ICategoryData{
    categoryName:string;
    id:number;
    product:ICollectionItems[];
}