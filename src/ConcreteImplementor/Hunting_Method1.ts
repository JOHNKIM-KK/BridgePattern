import {IHunting_Handler} from "../Implementor/IHunting_Handler";

export class Hunting_Method1 implements IHunting_Handler {
    Find_Quarry():void
    {
        console.log("물 위에서 찾는다");
    }
    Detected_Quarry():void
    {
        console.log("물고기 발견!");
    }
    attack():void
    {
        console.log("낚아챈다.");
    }
}