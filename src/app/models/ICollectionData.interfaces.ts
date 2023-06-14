import { ICollectionType } from "./ICollectionType.inerfaces";

export interface ICollectionData{
    id: number;
    title:string;
    collectionsType:ICollectionType[];
}