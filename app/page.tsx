"use client";
import React, { useState } from 'react';
import Channel from "./channel";
import Project from './project';
import GitHub from "public/images/GitHub.svg";
import Gmail from "public/images/gmail.svg";
import Yashu from "public/images/yashu.webp";
import Resume from "public/images/resume.webp";
import ResumeIcon from "public/images/resume.svg";
import DStudios from "public/images/DStudios.svg";
import Kezan from "public/images/Kezan.svg";
import Grainscape from "public/images/Grainscape.svg";
import getRequest from "./utility";
import Sidebar from './sidebar';
import Badge from './badge';

export default function Home() {
  const [reposCount, setReposCount] = useState(0);

  const fetchReposCount = async () => {
    try {
      const data = await getRequest('https://api.github.com/users/lightbringerdev/repos');
      setReposCount(data.length);
    } catch (error) {
      console.error('Error fetching repo data:', error);
      return 0;
    }
  };

  fetchReposCount();

  return (
    <main className="flex min-h-screen flex-col items-center px-24 py-12">
      <Sidebar />
      <div className="z-10 flex-col max-w-5xl w-full text-sm lg:flex">
        <h1 className="font-bold text-2xl mb-8 tracking-tighter">
          Hey, I'm Yaswanth &#128075;
        </h1>
        <p className="prose prose-neutral dark:prose-invert mb-2">
          {`I'm a developer and a part-time designer. I currently
          work as a Member of Technical Staff at 42Gears Mobility Systems. 
          I enjoy developing aesthetically pleasing designs and  stable
          backend environments. It's more like a hobby to me than work, a fun pastime.`}
        </p>
        <p className="prose prose-neutral dark:prose-invert mb-2">
          {`I worked as a freelancer for 3-4 years. Though, I have a handful of projects 
          I can showcase, I never thought of tailoring them into a portfolio. One reason is 
          that most designs are client requested and I didn't really like them 😅 and the
          second, I just really didn't get a chance.`}
        </p>
        <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
          <Channel
            img={'https://github.com/lightbringerdev.png'}
            icon={GitHub}
            name="@lightbringerdev"
            count={reposCount.toString()}
            countType={"repos"}
            link='https://github.com/lightbringerdev'
          />
          <Channel
            img={Yashu}
            icon={Gmail}
            name="yaswanthchowdary2806"
            count=""
            countType={"repos"}
            link='mailto:yaswanthchowdary2806@gmail.com'
          />
          <Channel
            img={Resume}
            icon={ResumeIcon}
            name="Resume"
            count=""
            countType={"repos"}
            link='/Resume.pdf'
          />
        </div>
        <h1 className="font-bold text-2xl mb-8 tracking-tighter">
          Projects &#128640;
        </h1>
        <p className="prose prose-neutral dark:prose-invert mb-2">
          {`Here are some of my client works. You can `}
          <Badge href="/projects">
            view all
          </Badge>
          {` my projects here.`}
        </p>
        <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      </div>
    </main>
  );
}
