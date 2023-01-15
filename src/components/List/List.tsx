import React, {FC, memo, ReactNode} from 'react';
import Grid from "@mui/material/Grid";

type ListType = {
    children?: ReactNode[] | ReactNode
}

export const List: FC<ListType> = memo(({children}) => {
    return (
        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
            {children}
        </Grid>
    );
});
