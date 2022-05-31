import {UserType} from "./usersType";

export type ButtonTypeProps = {
    disabled?:boolean
    type?:string
    text: string
    onHandlerCLick?: () => void
}