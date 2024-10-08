import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import HomePage from "../pages/HomePage/HomePage";
import ProductListingPage from "../pages/productListingPage/ProductListingPage";
import ProductDetails from "../components/productDetails/ProductDetails";
import NotFound from "../pages/notFound/NotFound";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout/>}>
                        <Route path="/Digital-Store" element={<HomePage/>}/>
                        <Route path="/produtos" element={<ProductListingPage/>}/>
                        <Route path="/produto-detalhe/:name/:imageQuery/:price/:priceDiscount" element={<ProductDetails/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
 
export default Paths;