import React, {FC} from 'react';
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

type SkeletListType = {
    amount?: number
}


export const SkeletList:FC<SkeletListType> = ({amount}) => {

    const skeletItem = Array.from(new Array(amount)).map((item, index) => {
        return (
            <Grid key={index} item xs={3} sm={4} md={4}>
                <Skeleton variant="rectangular" height={550}/>
            </Grid>
        )
    })

    return (
        <>
            {skeletItem}
        </>
    );
};
