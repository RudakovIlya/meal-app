export type CatalogType = {
    idCategory: string
    strCategory: string
    strCategoryDescription: string
    strCategoryThumb: string
}

export const setCatalogCategories = (catalog: CatalogType[]) => {
    return {
        type: '@@catalog/SET_CATALOG_CATEGORIES',
        payload: catalog
    } as const
}

export const setIsLoading = (isLoading: boolean) => {
    return {
        type: '@@catalog/SET_IS_LOADING',
        payload: isLoading
    } as const
}

export type CatalogCategoriesAllTypes = ReturnType<typeof setCatalogCategories> | ReturnType<typeof setIsLoading>

type CatalogStateType = {
    catalog: CatalogType[],
    isLoading: boolean
}

const initialState: CatalogStateType = {
    catalog: [],
    isLoading: false
};

export const catalogReducer = (state: CatalogStateType = initialState, action: CatalogCategoriesAllTypes): CatalogStateType => {
    switch (action.type) {
        case "@@catalog/SET_CATALOG_CATEGORIES": {
            return {
                ...state,
                catalog: action.payload
            }
        }
        case "@@catalog/SET_IS_LOADING": {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        default: {
            return state
        }
    }
}