export interface ProjectImage {
    name: string,
    alt: string
};

export interface Project {
    title: string,
    description: string[],
    images: ProjectImage[],
    gitHubLink: string,
    deployLink: string
}

export const projectData: Project[] = [
    {
        title: "Private Library",
        description: [
            "For fun, I have been developing a library management system to enable my friends and I to catalogue our books, curate collections, and build a private library together.",
            "The app allows users to view their own catalogue and search their friends’ books, as well as transfer books to friends. You can tag books and search by tags, add notes, and records lots of juicy bibliographic data.",
            "Using ASP.NET Web API and Identity, I have built a secured backend with a PostgreSQL database. For the frontend, I used React and TypeScript, creating small, reusable components.",
        ],
        images: [
            {
                name: "private-library-home.png",
                alt: "Website screenshot: a minimalist design, showing the heading 'Private Library' and three bar charts "
            },
            {
                name: "private-library-catalogue.png",
                alt: "Website screenshot: a minimalist, text-only design showing the heading 'Catalogue' and a table of books, some with a green background to show that they have been read."
            },
            {
                name: "private-library-details.png",
                alt: "Website screenshot: a minimalist, text-only design showing a pop-up window table of information about a single book with the full table of books in the background behind."
            }
        ],
        gitHubLink: "https://github.com/hk-15/PersonalLibrary",
        deployLink: ""
    },
    {
        title: "Whale Watching",
        description: [
            "Over the last three weeks of the TechSwitch bootcamp, we planned, designed, and developed a website together as a group of nine.",
            "The Whale Watching website requires users to sign up and log in to report a whale sighting, and only admins can confirm or delete a sighting. Importantly, the site encourages people to get involved in looking for whales, providing information, fun stats, and a ‘What Whale Are You?’ quiz – just for fun (and also because we achieved our MVP early and had time to develop additional features...).",
            "I had a lot of fun working on a variety of tickets in pairs across the frontend and backend, including coding API endpoints, implementing Identity, writing React forms, styling the website with Sass, and linking frontend and backend functionality."
        ],
        images: [
            {
                name: "whale-home.png",
                alt: "Website screenshot: teal header with the title 'Whale Watching', below, a sub-header reading 'Join our global community of whale watchers'."
            },
            {
                name: "whale-report.png",
                alt: "Website screenshot: header that reads 'Report sighting' with a form to report a whale sighting, plus a map to allow location selection."
            },
            {
                name: "whale-login.png",
                alt: "Website screenshot: teal header with the title 'Whale Watching', below, a log in form."
            }
        ],
        gitHubLink: "https://github.com/techswitch-learners/whale-watching-june-25",
        deployLink: "https://whale-watching-june-25.onrender.com/"
    },
    {
        title: "Mars Mission",
        description: [
            "As part of the TechSwitch bootcamp, we spent four days developing a prototype website aimed to allow children aged 11–16 to explore information and content returned by NASA’s APIs. As a group of nine, we created a wireframe and set out our development goals, choosing an agile approach.",
            "The website allows a user to see interesting pictures highlighted by NASA, find out more about the Mars Rovers, explore pictures taken by the Rovers and build their own Mars Profile to find out their age on Mars.",
            "In my group of three, we developed the component that fetches images from the Mars Rover Photos API and displays them in a carousel. We also wrote a suite of tests in Jest to support the component.", 
            "After four days of planning and development, we delivered a working prototype."
        ],
        images: [
            {
                name: "mars-home.png",
                alt: "Website screenshot: a dark blue starry background with a central picture of stars in space, captioned 'Astronomy Photo of the Day'."
            },
            {
                name: "mars-home-rover.png",
                alt: "Website screenshot: a dark blue starry background with three cartoon illustrations of Mars rovers. Below, there is an orange table showing information about the rover."
            },
            {
                name: "mars-profile.png",
                alt: "Website screenshot: a dark blue starry background with the heading 'Create your Mars profile' and a form to enter name and birthday. Below, an orange box displaying the information entered and an astronaut cartoon."
            }
        ],
        gitHubLink: "https://github.com/techswitch-learners/mars-mission-apr-25",
        deployLink: "https://gregarious-otter-866740.netlify.app/"
    }
]