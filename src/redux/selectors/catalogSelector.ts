import {CatalogType} from "../reducers/catalogReducer";

export const setVisibleCatalogItems = (catalog: CatalogType[], filter: string): CatalogType[] => {
    const filteredItems = catalog.filter(c => c.strCategory.toLowerCase().includes(filter.toLowerCase()))
    return filteredItems.length ? filteredItems : ([] as CatalogType[])
}