export interface mainMenu {
    defaultOptions: defaultOptions[],
    accessLink: accessLink[]
}


export interface defaultOptions {
    name: string
    icon: string
    router: string[],
    query?: any
}

export interface accessLink {
    name: string
    icon: string
}

export interface customOptions{
    name:string,
    router:string[]
}