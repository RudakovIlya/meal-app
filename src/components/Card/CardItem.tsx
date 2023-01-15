import {FC, memo} from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

type CardItemType = {
    title?: string
    image?: string
    link?: string
    btnText?: string
    description?: string
}

export const CardItem: FC<CardItemType> = memo((props) => {

    const {title, image, link, btnText, description} = props

    return (
        <Grid item xs={4} sm={4} md={4} height={"100%"}>
            <Card>
                <CardMedia component="img" alt={title} image={image}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    {description && <Typography gutterBottom variant="body1" component="p">
                        {`${description.slice(0, 60)}...`}
                    </Typography>}
                </CardContent>
                <CardActions/>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0 16px 16px 16px"
                    }}
                >
                    <Link to={`${link}`}>
                        <Button variant={'outlined'} style={{color: "#000000", border: "1px solid #000000"}}>
                            {btnText}
                        </Button>
                    </Link>
                </div>
            </Card>
        </Grid>
    );
});