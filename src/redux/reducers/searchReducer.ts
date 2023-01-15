export const changeSearchValue = (search: string) => {
    return {
        type: '@@search/CHANGE_SEARCH_VALUE',
        payload: search
    } as const
}

export type SearchActionsType = ReturnType<typeof changeSearchValue>

export const searchReducer = (state: string = '', action: SearchActionsType): string => {
    switch (action.type) {
        case '@@search/CHANGE_SEARCH_VALUE' : {
            return action.payload
        }
        default: {
            return ''
        }
    }
}