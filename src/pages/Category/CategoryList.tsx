import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {setCategory, setIsLoading} from "../../redux/reducers/categoryReducer";
import {getFilteredCategory} from "../../api/api";
import {List} from "../../components/List/List";
import {CardItem} from "../../components/Card/CardItem";
import {SkeletList} from "../../components/Skeleton/SkeletList";

export const CategoryList = () => {

    const {name} = useParams<{ name: string }>();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setIsLoading(true))
        getFilteredCategory(name).then((response) => {
            dispatch(setCategory(response.meals))
            dispatch(setIsLoading(false))
        })
    }, [name, dispatch]);

    const {category, isLoading} = useAppSelector(state => state.category);

    const categoryItems = category.map((categoryItem) => {
        return (
            <CardItem key={categoryItem.idMeal} title={categoryItem.strMeal} btnText={'Watch recipe'}
                      link={`/meal/${categoryItem.idMeal}`} image={categoryItem.strMealThumb}/>
        )
    });

    return (
        <List>
            {!isLoading ? categoryItems : <SkeletList amount={12}/>}
        </List>
    );
};
