import BreadcumbFifteen from "~/sections/Wishlist/BreadcumbFifteen";
import Wishlist from "~/sections/Wishlist/Wishlist";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Scroll from "~/sections/Common/Scroll";
export default function WishlistPage() {
    return (
        <div className="altekmar-inner-page">
            <HeaderFour />
            <BreadcumbFifteen />
            <Wishlist />
            <FooterThree />
            <Scroll />
        </div>
    );
}