import React, {memo, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {SkeletList} from "../../components/Skeleton/SkeletList";
import {RecipeType, setRecipeAC, setRecipeLoadingAC} from "../../redux/reducers/recipeReducer";
import {getMealByID} from "../../api/api";
import {useNavigate, useParams} from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Recipe = memo(() => {

    const {id} = useParams<{ id: string }>();

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const {isLoading, recipe} = useAppSelector(state => state.recipe)

    useEffect(() => {
        dispatch(setRecipeLoadingAC(true));
        getMealByID(id).then((response) => {
            dispatch(setRecipeLoadingAC(false));
            dispatch(setRecipeAC(response.meals[0]));
        }).catch(() => {
            dispatch(setRecipeLoadingAC(true));
            navigate(-1)
        })
    }, [dispatch, id, navigate])

    return (
        <>
            {
                !isLoading ?
                    (
                        <>
                            <Grid sx={{mb: 2}} columnSpacing={{xs: 1, sm: 2, md: 3}} container
                                  columns={{xs: 4, sm: 8, md: 12}}>
                                <Grid item xs={12} sm={12} md={6}>
                                    <img style={{width: '100%', height: 'auto'}}
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
                            <TableContainer sx={{mb: 4}} component={Paper} elevation={3}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{fontWeight: 600}} align="center">Ingredient</TableCell>
                                            <TableCell sx={{fontWeight: 600}} align="center">Measure</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            recipe && (Object.keys(recipe) as string[]).map((key: string) => {
                                                if (key.includes('Ingredient') && (recipe[key as keyof RecipeType])) {
                                                    return (
                                                        <TableRow key={key}>
                                                            <TableCell
                                                                align="left">{recipe[key as keyof RecipeType]}</TableCell>
                                                            <TableCell align="center">{
                                                                recipe[`strMeasure${key.slice(13)}` as keyof RecipeType]
                                                            }</TableCell>
                                                        </TableRow>
                                                    )
                                                }
                                                return null
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            {
                                recipe?.strYoutube ? <div style={{
                                    margin: '0 auto',
                                    width: '57%',
                                    position: 'relative',
                                    padding: '0px 0px 42.25% 0px'
                                }}>
                                    <iframe style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        top: 0,
                                        left: 0,
                                        objectFit: 'cover',
                                        border: 'none'
                                    }}
                                            title={recipe?.idMeal}
                                            allowFullScreen
                                            src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}/>
                                </div> : null
                            }
                        </>
                    )
                    :
                    <SkeletList amount={2}/>
            }
        </>
    );
});

export default Recipe;
