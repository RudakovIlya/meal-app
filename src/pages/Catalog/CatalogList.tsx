import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {useCallback, useEffect} from "react";
import {getAllCategories} from "../../api/api";
import {CatalogType, setCatalogCategories, setIsLoading} from "../../redux/reducers/catalogReducer";
import {CardItem} from "../../components/Card/CardItem";
import {List} from "../../components/List/List";
import {SkeletList} from "../../components/Skeleton/SkeletList";
import Search from "../../components/Search/Search";
import {useLocation, useNavigate} from "react-router-dom";
import {setVisibleCatalogItems} from "../../redux/selectors/catalogSelector";
import ErrorPage from "../ErrorPage/ErrorPage";

export const CatalogList = () => {

    const {pathname, search} = useLocation();
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const isLoading = useAppSelector(state => state.catalog.isLoading)
    const catalog = useAppSelector(state => state.catalog.catalog)

    useEffect(() => {
        dispatch(setIsLoading(true))
        getAllCategories().then((response) => {
            dispatch(setCatalogCategories(search ?
                setVisibleCatalogItems(response.categories, search.slice(search.indexOf('=') + 1))
                :
                response.categories
            ))
            dispatch(setIsLoading(false))
        })
    }, [dispatch, search])

    const handleSearch = useCallback((str: string) => {
        setVisibleCatalogItems(catalog, str)
        navigate(`${pathname}?search=${str}`)
    }, [catalog, navigate, pathname])

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
            <Search handleSearch={handleSearch}/>
            <List>
                {!isLoading ? catalogItems : <SkeletList amount={12}/>}
                {!catalogItems.length && <ErrorPage/>}
            </List>
        </>
    );
};
