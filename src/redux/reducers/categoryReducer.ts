export type CategoryType = {
    strMeal: string
    strMealThumb: string
    idMeal: string
}

export const setCategory = (category: CategoryType[]) => {
    return {
        type: '@@category/SET_CATEGORIES',
        payload: category
    } as const
}

export type CategoriesAllTypes = ReturnType<typeof setCategory>

const initialState: CategoryType[] = [];

export const categoryReducer = (state: CategoryType[] = initialState, action: CategoriesAllTypes): CategoryType[] => {
    switch (action.type) {
        case "@@category/SET_CATEGORIES": {
            return [...action.payload]
        }
        default: {
            return state
        }
    }
}