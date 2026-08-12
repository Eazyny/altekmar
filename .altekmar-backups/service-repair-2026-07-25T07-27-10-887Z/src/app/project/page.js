import BreadcumbSeven from "~/sections/Project/BreadcumbSeven";
import Project from "~/sections/Project/Project";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Scroll from "~/sections/Common/Scroll";
export default function ProjectPage() {
    return (
        <div className="altekmar-inner-page">
            <HeaderFour />
            <BreadcumbSeven />
            <Project />
            <FooterThree />
            <Scroll />
        </div>
    );
}