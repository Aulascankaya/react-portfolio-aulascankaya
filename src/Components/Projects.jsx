import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Projects = () => {
  const lang = useSelector((state) => state.language);
  const { title, items } = lang.projects;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div
      id="projects"
      className="text-left max-w-[80%] xl:max-w-6xl m-auto place-content-between"
    >
      <h2 className="font-bold text-black-heading dark:text-bluish-gray text-4xl mb-8">
        {title}
      </h2>
      <Slider {...settings} className="text-light-mode">
        {items?.map((project, index) => (
          <div key={index} className="pb-8 lg:pb-16">
            <img src={`./${project.image}`} alt={project.title} className="rounded-md" />
            <h3 className="text-dark-purple dark:text-dark-mode-name text-2xl my-4 font-medium">
              {project.title}
            </h3>
            <p className="my-4 max-w-72 min-h-80 text-gray dark:text-white">
              {project.description}
            </p>
            <div className="my-8">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 text-navy-blue px-4 py-2 border-2 border-navy-blue rounded-md dark:text-dark-logo-font dark:border-dark-logo-font dark:bg-dark-gray-button"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex place-content-between underline pr-10">
              <a
                className="text-navy-blue dark:text-dark-mode-hire"
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.github}
              </a>
              <a
                className="text-navy-blue dark:text-dark-mode-hire"
                href={project.viewSiteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.viewSiteLabel}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
