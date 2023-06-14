import { ICollectionItems } from "./ICollectionItems.interfaces";

export interface ISlideShow{
    id:number;
    image:string;
    text:string;
    buttonUrl:string;
    description:string;
    collectionItems:ICollectionItems[];
}