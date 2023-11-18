"use client";
import React, { useState } from 'react';
import Project from '../project';
import Sidebar from '../sidebar';
import DStudios from "public/images/DStudios.svg";
import Kezan from "public/images/Kezan.svg";
import Grainscape from "public/images/Grainscape.svg";
import getRequest from '../utility';

export default function Projects() {
  interface Repo {
    owner: {
      avatar_url: string;
    };
    name: string;
    html_url: string;
    description: string;
    img: string;
    id: string;
  }
  const [repos, setRepos] = useState<Repo[]>([]);

  const fetchRepos = async () => {
    try {
      const data = await getRequest('https://api.github.com/users/lightbringerdev/repos');
      setRepos(data);
    } catch (error) {
      console.error('Error fetching repo data:', error);
      return 0;
    }
  };
  fetchRepos();

  return (
      <main className="flex min-h-screen flex-col items-center px-6 lg:px-24 py-12">
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
              <Project
                name="Red Sea Fox"
                link='not-live'
                description='Red Sea Fox was a dynamic online learning platform designed to empower students with practical skills in various domains. With a focus on recorded sessions, the platform provided a flexible and accessible way for learners to enhance their expertise in areas such as marketing and beyond.'
                img={repos[0]?.owner.avatar_url}
              />
          </div>
          <h1 className="font-bold text-2xl mb-2 mt-4 tracking-tighter">
            Mini Projects
          </h1>
          <div className="my-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {repos.map((repo:Repo) => (
              <Project
                key={repo.id}
                name={repo.name}
                link={repo.html_url}
                description={repo.description}
                img={repo.owner.avatar_url}
              />
            ))}
          </div>
        </div>
      </main>
  );
}