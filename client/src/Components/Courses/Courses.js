import Card from "../Card/Card";
import TitleCard from "../Card/TitleCard";
import { CoursesContainer } from "./Courses.styled";

const Courses = () => {
    return ( 
        <CoursesContainer>
            <TitleCard/>
            <Card cardImgSrc="../assets/icon-animation.svg" title="Animation" description="Learn the latest animation techniques to create stunning motion design and captivate your audience." link="#" linkName="Get Started"/>
            <Card cardImgSrc="../assets/icon-design.svg" title="Design" description="Create beautiful, usable interfaces to help shape the future of how the web looks." link="#" linkName="Get Started"/>
            <Card cardImgSrc="../assets/icon-photography.svg" title="Photography" description="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos." link="#" linkName="Get Started"/>
            <Card cardImgSrc="../assets/icon-crypto.svg" title="Crypto" description="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course." link="#" linkName="Get Started"/>
            <Card cardImgSrc="../assets/icon-business.svg" title="Business" description="A step-by-step playbook to help you start, scale, and sustain your business without outside investment." link="#" linkName="Get Started"/>
        </CoursesContainer>
     );
}
 
export default Courses;