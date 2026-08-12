import BreadcumbTwelve from "~/sections/Shop-Details/BreadcumbTwelve";
import ProductDetails from "~/sections/Shop-Details/ProductDetails";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import CorporateFooter from "~/sections/Common/Footer/CorporateFooter";
import Scroll from "~/sections/Common/Scroll";
export default function ShopDetailsPage() {
    return (
        <div className="altekmar-inner-page">
            <HeaderFour />
            <BreadcumbTwelve />
            <ProductDetails />
            <CorporateFooter />
            <Scroll />
        </div>
    );
}