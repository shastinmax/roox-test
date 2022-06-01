import {UserType} from "./usersType";

export type ButtonTypeProps = {
    className:string
    disabled?:boolean
    type?:string
    text: string
    onHandlerCLick?: (value:boolean) => void
}