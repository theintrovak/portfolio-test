import { SparklesCore } from "@/components/ui/sparkles";
import Button from "../components/button";
import Contactus from "../components/Contactus";
// import profile from '../../public/profile.png'
// import banner from '../../public/banner1.jpg'

export default function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "blog app",
            description: "A modern blogging platform where users can create, edit, and share articles with a clean and responsive design.",
            image: "/project 1.png",
            link: "https://blog-delta-beryl-93.vercel.app/"

        },
        {
            id: 2,
            title: "Project 2",
            description: "A professional and responsive business landing page designed to showcase services, highlight key features, and drive customer engagement with a modern UI.",
            image: "/project 2.png",
            link: "https://landing-page-nine-theta-28.vercel.app/"
        },
        {
            id: 3,
            title: "Project 3",
            description: "A personal portfolio website built to showcase projects, skills, and achievements with a clean, responsive, and modern design.",
            image: "/project 3.png",
            link: "https://anurag-sigma.vercel.app/"
        },
    ]


    return (

        <div className="font-sans text-gray-900 dark:text-gray-100 dark:bg-[#000000] ">
            <section id="home" className="relative bg-gradient-to-b from-[#000000df]  to-[#ffffff00] text-white overflow-hidden">

                <div className="container mx-auto px-6 pt-5 pb-10 text-center relative  z-10">

                    <div className=" mx-auto my-3 bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
                        <img
                            src='/profile.png'
                            alt="Designer"
                            className=" -translate-x-2.5 w-75  "

                        />
                        <div className="w-[40rem] h-20 relative ">
                            {/* Gradients */}
                            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                            <SparklesCore
                                background="transparent"
                                minSize={0.4}
                                maxSize={1}
                                particleDensity={500}
                                className="w-[25rem] ml-[7.5rem]  h-full"
                                particleColor="#FFFFFF"
                            />
                            <div className="absolute inset-0 w-full h-full dark:bg-black [mask-image:radial-gradient(250px_80px_at_top,transparent_20%,white)]"></div>
                        </div>
                    </div>
                    <h1 className="md:text-5xl lg:text-6xl text-3xl mt-0  font-bold text-center text-white relative z-20">
                        ANURAG KURMI
                    </h1>
                    <p className="text-xl mt-3">Front-End Designer & Developer</p>
                    <div className="flex justify-center gap-4 mt-6 mb-0">
                        <Button variant="primary" onClick={() => (window.location.href = '#contact')} >Hire Me</Button>
                        <Button variant="secondary">Get CV</Button>
                    </div>
                </div>
            </section>
            <section id="about" className="  container my-0 py-0 grid md:grid-cols-2 gap-10 items-center ">
                <img
                    src='/banner 1.png'
                    alt="About"
                    className="rounded-2xl h-full w-full shadow-none"
                />
                <div className="mx-3">
                    <h2 className="text-3xl font-bold mb-4">Let’s Introduce About Myself</h2>
                    <p className="text-lg mb-6 mx-4">
                        I’m a passionate front-end designer with expertise in creating
                        visually appealing and user-friendly web interfaces. My goal is to
                        deliver smooth, modern, and engaging digital experiences.
                    </p>
                    <Button variant="primary" >Download CV</Button>
                </div>
            </section>
            <section id="projects" className="  bg-[#0000006e] py-20  ">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-10">
                        Recently Done Projects
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white dark:bg-gray-700 hover:scale-105 hover:shadow-2xl  transition-all duration-500  rounded-2xl shadow overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="font-bold text-lg">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                                    <a target="_blank " href={project.link} className="mt-2 text-blue-500">Visit Page</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="work" className="relative bg-[#0000006e] py-20 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl font-bold text-center mb-10">
                        Work Experience
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white dark:bg-gray-700 rounded-2xl shadow hover:shadow-2xl transition">
                            <h3 className="font-bold text-xl">Front-End Developer</h3>
                            <p className="text-gray-600 dark:text-gray-300">Company XYZ (2021 - Present)</p>
                            <p className="mt-3">
                                Worked on responsive UI, animations, and performance
                                optimization.
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-gray-700 rounded-2xl shadow hover:shadow-2xl transition">
                            <h3 className="font-bold text-xl">UI Designer</h3>
                            <p className="text-gray-600 dark:text-gray-300">Design Studio (2019 - 2021)</p>
                            <p className="mt-3">
                                Designed modern layouts, branding assets, and interactive
                                prototypes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services" className="container mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-center mb-10">Services</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {["UI/UX Design", "Responsive Web Development", "Landing Pages"].map(
                        (service) => (
                            <div
                                key={service}
                                className="p-6 bg-gradient-to-r from-blue-600 to-pink-500 text-white rounded-2xl shadow-lg text-center"
                            >
                                <h3 className="font-bold text-xl mb-2">{service}</h3>
                                <p>High-quality service with attention to detail and creativity.</p>
                            </div>
                        )
                    )}
                </div>
            </section>

            <section id="reviews" className="container mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-center mb-10">Reviews</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {["Great work!", "Loved the design!", "Highly recommend!"].map(
                        (review, i) => (
                            <div
                                key={i}
                                className="p-6 bg-white dark:bg-gray-700 rounded-2xl shadow text-center"
                            >
                                <p className="italic mb-2">“{review}”</p>
                                <h4 className="font-bold">Client {i + 1}</h4>
                            </div>
                        )
                    )}
                </div>
            </section>
            <section id="contact" className="relative bg-gradient-to-b from-[#00000000]  to-[#000000e9] py-20 text-white">
                <Contactus />
            </section>
        </div>
    );
}
