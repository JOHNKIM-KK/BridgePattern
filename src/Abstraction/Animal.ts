import {IHunting_Handler} from "../Implementor/IHunting_Handler";

export class Animal {

    hunting:IHunting_Handler;

    constructor (hunting:IHunting_Handler)
    {
        this.hunting=hunting;
    }
    Find_Quarry():void
    {
        this.hunting.Find_Quarry();
    }
    Detected_Quarry():void
    {
        this.hunting.Detected_Quarry();
    }
    attack():void
    {
        this.hunting.attack();
    }
    hunt():void
    {
        this.Find_Quarry();
        this.Detected_Quarry();
        this.attack();
    }
}