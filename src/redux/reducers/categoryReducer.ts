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

export const setIsLoading = (isLoading: boolean) => {
    return {
        type: '@@category/SET_IS_LOADING',
        payload: isLoading
    } as const
}

export type CategoriesAllActionsTypes = ReturnType<typeof setCategory> | ReturnType<typeof setIsLoading>

type CategoryStateType = {
    isLoading: boolean
    category: CategoryType[]
}

const initialState: CategoryStateType = {
    category: [],
    isLoading: false
};

export const categoryReducer = (state: CategoryStateType = initialState, action: CategoriesAllActionsTypes): CategoryStateType => {
    switch (action.type) {
        case "@@category/SET_CATEGORIES": {
            return {
                ...state,
                category: action.payload
            }
        }
        case "@@category/SET_IS_LOADING": {
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