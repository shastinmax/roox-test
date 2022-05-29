import {UsersInfoType} from "../types/usersType";

export const onSortCityClick = (arg3: string, arg4: string, data: Array<UsersInfoType>,setUserData:(data:Array<UsersInfoType>)=>void) => {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const sortUserData = [...data].sort((arg1, arg2) => {
            if (arg3 > arg4) {
                // eslint-disable-next-line @typescript-eslint/no-magic-numbers
                return 1;
            }
            if (arg3 < arg4) {
                // eslint-disable-next-line @typescript-eslint/no-magic-numbers
                return -1;
            }
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
            return 0;
        }
    )
    setUserData(sortUserData)
}