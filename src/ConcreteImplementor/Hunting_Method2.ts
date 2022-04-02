import {IHunting_Handler} from "../Implementor/IHunting_Handler";

export class Hunting_Method2 implements IHunting_Handler {

    Find_Quarry():void
    {
        console.log("지상에서 찾는다");
    }
    Detected_Quarry():void
    {
        console.log("노루 발견");
    }
    attack():void
    {
        console.log("물어뜯는다.");
    }
}
