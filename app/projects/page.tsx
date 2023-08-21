import Project from '../project';
import Sidebar from '../sidebar';
import DStudios from "public/images/DStudios.svg";
import Kezan from "public/images/Kezan.svg";
import Grainscape from "public/images/Grainscape.svg";

export default function Projects() {
  return (
      <main className="flex min-h-screen flex-col items-center px-24 py-12">
        <Sidebar />
        <div className="z-10 flex-col max-w-5xl w-full text-sm lg:flex">
          <h1 className="font-bold text-2xl mb-2 tracking-tighter">
            Client Projects
          </h1>
          <div className="my-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Project
                name="Download Studios"
                link='https://downloadstudios.in/'
                description='Your Friendly Neighbourhood Entertainment Studio'
                img={DStudios}
              />
              <Project
                name="Kezan Consulting"
                link='https://www.kezanconsulting.com/'
                description='Expert HR services tailored to your specific business needs.'
                img={Kezan}
              />
              <Project
                name="Grainscape"
                link='https://www.grainscape.in/'
                description='Get your food as Natural as it can be'
                img={Grainscape}
              />
          </div>
          <h1 className="font-bold text-2xl mb-2 mt-4 tracking-tighter">
            Mini Projects / Git Repos
          </h1>
          <div className="my-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Project
                name="Dri"
                link='https://downloadstudios.in/'
                description='Your Friendly Neighbourhood Entertainment Studio'
                img={'https://github.com/beppam.png'}
              />
          </div>
        </div>
      </main>
  );
}