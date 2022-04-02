import {Animal} from "../Abstraction/Animal";
import {IHunting_Handler} from "../Implementor/IHunting_Handler";

export class Tiger extends Animal
{
    constructor(hunting: IHunting_Handler)
    {
        super(hunting);
    }
    hunt():void
    {
        console.log("호랑이의 사냥방식");
        this.Find_Quarry();
        this.Detected_Quarry();
        this.attack();
    }


}