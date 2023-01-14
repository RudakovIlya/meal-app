import React from 'react';
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

export const Skelet = () => {

    const skeletItem = Array.from(new Array(12)).map((item, index) => {
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
