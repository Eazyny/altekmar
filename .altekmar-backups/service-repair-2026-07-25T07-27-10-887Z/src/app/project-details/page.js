import BreadcumbEight from "~/sections/Project-Details/BreadcumbEight";
import ContactSix from "~/sections/Project-Details/ContactSix";
import ProjectDetails from "~/sections/Project-Details/ProjectDetails";
import HeaderFour from "~/sections/Common/Header/HeaderFour";
import FooterThree from "~/sections/Common/Footer/FooterThree";
import Scroll from "~/sections/Common/Scroll";
export default function ProjectDetailsPage() {
    return (
        <div className="altekmar-inner-page" style={{overflow: 'hidden'}}>
            <HeaderFour />
            <BreadcumbEight />
            <ProjectDetails />
            <ContactSix />
            <FooterThree />
            <Scroll />
        </div>
    );
}