import React, {memo, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {setCategory, setIsLoading} from "../../redux/reducers/categoryReducer";
import {getFilteredCategory} from "../../api/api";
import {List} from "../../components/List/List";
import {CardItem} from "../../components/Card/CardItem";
import {SkeletList} from "../../components/Skeleton/SkeletList";

export const CategoryList = memo(() => {

    const {name} = useParams<{ name: string }>();

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setIsLoading(true))
        getFilteredCategory(name).then((response) => {
            if (response.meals) {
                dispatch(setCategory(response.meals ? response.meals : []))
                dispatch(setIsLoading(false))
            } else {
                return Promise.reject()
            }
        }).catch(() => {
            navigate(-1)
        })
    }, [name, dispatch, navigate]);

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
});
