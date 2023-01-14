import {Routes, Route,} from 'react-router-dom'
import {Layout} from "./components/Layout/Layout";
import {CategoryList} from "./pages/Category/CategoryList";
import {CatalogList} from "./pages/Catalog/CatalogList";
import Recipe from "./pages/Pecipe/Recipe";

export const App = () => {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/'} element={<CatalogList/>}/>
                    <Route path={'/category/:name'} element={<CategoryList/>}/>
                    <Route path={'/meal/:id'} element={<Recipe/>}/>
                </Route>
            </Routes>
        </>
    );
}
