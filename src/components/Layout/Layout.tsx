import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {Outlet, useLocation} from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import Search from "../Search";

export const Layout = () => {

    const {pathname} = useLocation()

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    return (
        <>
            <Header/>
            <Container style={{flex: "1", paddingTop: "100px"}}>
                {pathname === '/' ? <Search/> :
                    <Button
                        variant={'outlined'}
                        style={{color: "#000000", border: "1px solid #000000"}}
                        onClick={goBack}>GO BACK</Button>}
                <Outlet/>
            </Container>
            <Footer/>
        </>
    );
};
