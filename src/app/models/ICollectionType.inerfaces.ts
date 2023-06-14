import { ICategoryType } from "./ICategoryType.interfaces";
import { ICollectionItems } from "./ICollectionItems.interfaces";

export interface ICollectionType{
    id:number;
    collectionName:string;
    collectionImg:string;
    url:string;
    collectionItems:ICollectionItems[];
    
}