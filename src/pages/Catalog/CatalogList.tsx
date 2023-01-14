import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {useEffect} from "react";
import {getAllCategories} from "../../api/api";
import {CatalogType, setCatalogCategories} from "../../redux/reducers/catalogReducer";
import {CardItem} from "../../components/Card/CardItem";
import {List} from "../../components/List/List";
import {Skelet} from "../../components/Skeleton/Skelet";

export const CatalogList = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        getAllCategories().then((response) => {
            dispatch(setCatalogCategories(response))
        })
        return () => {
            dispatch(setCatalogCategories({categories: []}))
        }
    }, [dispatch])

    const catalog = useAppSelector(state => state.catalog)

    const catalogItems = catalog.map((catalogItem: CatalogType) => {
        return (
            <CardItem key={catalogItem.idCategory} title={catalogItem.strCategory} btnText={'Watch category'}
                      link={`category/${catalogItem.strCategory}`} image={catalogItem.strCategoryThumb}/>
        )
    });

    return (
        <List>
            {
                catalog.length ? catalogItems : <Skelet/>
            }
        </List>
    );
};
