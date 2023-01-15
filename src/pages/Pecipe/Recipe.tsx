import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {SkeletList} from "../../components/Skeleton/SkeletList";
import {setRecipeAC, setRecipeLoadingAC} from "../../redux/reducers/recipeReducer";
import {getMealByID} from "../../api/api";
import {useParams} from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Recipe = () => {

    const {id} = useParams<{ id: string }>();

    const dispatch = useAppDispatch();
    const {isLoading, recipe} = useAppSelector(state => state.recipe)

    useEffect(() => {
        dispatch(setRecipeLoadingAC(true));
        getMealByID(id).then((response) => {
            dispatch(setRecipeLoadingAC(false));
            dispatch(setRecipeAC(response.meals[0]));
        })
    }, [dispatch, id])

    return (
        <>
            {
                !isLoading ?
                    (
                        <Grid columnSpacing={{xs: 1, sm: 2, md: 3}} container columns={{xs: 4, sm: 8, md: 12}}>
                            <Grid item xs={12} sm={12} md={6}>
                                <img style={{width: '100%', height: '100%'}}
                                     src={recipe?.strMealThumb ? recipe?.strMealThumb : ''} alt={''}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Typography gutterBottom variant="h3" component="h3">
                                    {recipe?.strMeal}
                                </Typography>
                                <Typography gutterBottom component="p">
                                    <span style={{fontWeight: 600}}>Category:</span> {recipe?.strCategory}
                                </Typography>
                                <Typography gutterBottom component="p">
                                    <span style={{fontWeight: 600}}>Area:</span> {recipe?.strArea}
                                </Typography>
                                <Typography component="p">
                                    {recipe?.strInstructions}
                                </Typography>
                            </Grid>
                        </Grid>
                    )
                    :
                    <SkeletList amount={2}/>
            }
        </>
    );
};

export default Recipe;