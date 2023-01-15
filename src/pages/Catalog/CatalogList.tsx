import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {useEffect} from "react";
import {getAllCategories} from "../../api/api";
import {CatalogType, setCatalogCategories, setIsLoading} from "../../redux/reducers/catalogReducer";
import {CardItem} from "../../components/Card/CardItem";
import {List} from "../../components/List/List";
import {SkeletList} from "../../components/Skeleton/SkeletList";

export const CatalogList = () => {

    const dispatch = useAppDispatch();

    const {catalog, isLoading} = useAppSelector(state => state.catalog)

    useEffect(() => {
        dispatch(setIsLoading(true))
        getAllCategories().then((response) => {
            dispatch(setCatalogCategories(response))
            dispatch(setIsLoading(false))
        })
        return () => {
            dispatch(setCatalogCategories({categories: []}))
        }
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
        <List>
            {!isLoading ? catalogItems : <SkeletList amount={12}/>}
        </List>
    );
};
