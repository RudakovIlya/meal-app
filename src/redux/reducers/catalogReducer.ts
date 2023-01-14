import {ResponseType} from '../type'

export type CatalogType = {
    idCategory: string
    strCategory: string
    strCategoryDescription: string
    strCategoryThumb: string
}

export const setCatalogCategories = (catalog: ResponseType<CatalogType>) => {
    return {
        type: '@@catalog/SET_CATALOG_CATEGORIES',
        payload: catalog.categories
    } as const
}

export type CatalogCategoriesAllTypes = ReturnType<typeof setCatalogCategories>

const initialState: CatalogType[] = [];

export const catalogReducer = (state: CatalogType[] = initialState, action: CatalogCategoriesAllTypes): CatalogType[] => {
    switch (action.type) {
        case "@@catalog/SET_CATALOG_CATEGORIES": {
            return [...action.payload]
        }
        default: {
            return state
        }
    }
}