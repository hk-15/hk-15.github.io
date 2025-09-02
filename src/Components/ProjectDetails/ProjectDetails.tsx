import { Project } from "../../Data/ProjectData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
    project: Project;
};

export const ProjectDetails: React.FC<Props> = ({ project }) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        accessibility: true,
    };

    return (
        <div className="project-details-container">
            <div className="project-description">
                {project.description.map(paragraph => (
                    <p>{paragraph}</p>
                ))}
                <a href={project.gitHubLink} target="_blank" rel="noreferrer">View on GitHub</a> {project.deployLink !== "" &&<span>| <a href={project.deployLink} target="_blank" rel="noreferrer">Visit the deployed site</a></span>}
            </div>

            <div className="carousel-container">
                <Slider {...sliderSettings}>
                    {project.images.map(image => (
                        <img key={image.name} src={`${process.env.PUBLIC_URL}/Images/${image.name}`} alt={image.alt} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}