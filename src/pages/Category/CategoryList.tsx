import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {setCategory} from "../../redux/reducers/categoryReducer";
import {getFilteredCategory} from "../../api/api";
import {List} from "../../components/List/List";
import {CardItem} from "../../components/Card/CardItem";
import {Skelet} from "../../components/Skeleton/Skelet";

export const CategoryList = () => {

    const {name} = useParams<{ name: string }>();

    const dispatch = useAppDispatch();

    useEffect(() => {
        getFilteredCategory(name).then((response) => {
            dispatch(setCategory(response.meals))
        })
        return () => {
            dispatch(setCategory([]))
        }
    }, [name, dispatch]);

    const category = useAppSelector(state => state.category);

    const categoryItems = category.map((categoryItem) => {
        return (
            <CardItem key={categoryItem.idMeal} title={categoryItem.strMeal} btnText={'Watch recipe'}
                      link={`/meal/${categoryItem.idMeal}`} image={categoryItem.strMealThumb}/>
        )
    });

    return (
        <List>
            {category.length ? categoryItems : <Skelet/>}
        </List>
    );
};
