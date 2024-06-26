export interface SignUp {
    name: string,
    password: string,
    email: string
}

export interface Login {
    email: string,
    password: string
}

export interface Product {
    name: string,
    price: number,
    color: string,
    category: string,
    description: string,
    image: string,
    id: number,
}

export interface AgDataTypes {
    image: string,
    name: string,
    price: number,
    color: string,
    category: string,
    description: string
}