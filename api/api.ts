import {AddNewProductParams, UpdateProductParams} from "./api.types";

const BASE_URL = 'http://localhost:3000'

const endpoints = {
    ALL_PRODUCTS: `${BASE_URL}/products`,
    ONE_PRODUCT: (id: number) => `${BASE_URL}/products/${id}`
}

export const getAllProducts = async () => {
    const response = await fetch(endpoints.ALL_PRODUCTS)
    return await response.json();
}

export const getOneProduct = async (id: number) => {
    const response = await fetch(endpoints.ONE_PRODUCT(id))
    return await response.json();
}

export const addNewProduct = async (params: AddNewProductParams) => {
    const response = await fetch(endpoints.ALL_PRODUCTS, {method: "POST", body: JSON.stringify(params)})
    return await response.json();
}

export const deleteProduct = async (id: number) => {
    const response = await fetch(endpoints.ONE_PRODUCT(id), {method: "DELETE"})
    return await response.json()
}

export const updateProduct = async (id: number, params: UpdateProductParams) => {
    const response = await fetch(endpoints.ONE_PRODUCT(id), {method: "PUT", body: JSON.stringify(params)})
    return await response.json()
}