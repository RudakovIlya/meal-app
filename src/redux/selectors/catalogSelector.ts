import {CatalogType} from "../reducers/catalogReducer";

export const setVisibleCatalogItems = (catalog: CatalogType[], filter: string): CatalogType[] => {
    return catalog.filter(c => c.strCategory.toLowerCase().includes(filter.toLowerCase()))
}