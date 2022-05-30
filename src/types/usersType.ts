// UsersInfo,User
export type UsersInfoType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}
export type UserType = {
    user: UsersInfoType
    callback: (user:UsersInfoType) => void
}

// UserChanged
export type UserChangedPropsType={
    user:UsersInfoType
}

// InputChanged
export type InputChangedPropsType={
    title:string
    name:string
}