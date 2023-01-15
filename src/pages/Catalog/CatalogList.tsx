import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {useEffect} from "react";
import {getAllCategories} from "../../api/api";
import {CatalogType, setCatalogCategories, setIsLoading} from "../../redux/reducers/catalogReducer";
import {CardItem} from "../../components/Card/CardItem";
import {List} from "../../components/List/List";
import {SkeletList} from "../../components/Skeleton/SkeletList";
import Search from "../../components/Search/Search";

export const CatalogList = () => {

    const dispatch = useAppDispatch();

    const isLoading = useAppSelector(state => state.catalog.isLoading)
    const catalog = useAppSelector(state => state.catalog.catalog)

    useEffect(() => {
        dispatch(setIsLoading(true))
        getAllCategories().then((response) => {
            dispatch(setCatalogCategories(response.categories))
            dispatch(setIsLoading(false))
        })
    }, [dispatch])

    const catalogItems = catalog.map((catalogItem: CatalogType) => {
        return (
            <CardItem
                key={catalogItem.idCategory}
                description={catalogItem.strCategoryDescription}
                title={catalogItem.strCategory}
                btnText={'Watch category'}
                link={`category/${catalogItem.strCategory}`}
                image={catalogItem.strCategoryThumb}/>
        )
    });

    return (
        <>
            <Search/>
            <List>
                {!isLoading ? catalogItems : <SkeletList amount={12}/>}
            </List>
        </>
    );
};
