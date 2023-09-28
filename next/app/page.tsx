import React from "react";
import { Metadata } from "next";

import DiscordButton from "./components/DiscordButton";
import TwitterButton from "./components/TwitterButton";

import ProjectRoster from "./components/Roster/ProjectRoster";
import Roster from "./components/Roster/Roster";

import "./page.css";



export default function Page() {
  return (
    <div className="home">
      <div className="container">
        <div className="hero">
          <div className="content">
            <h1 className="text-4xl font-bold">
              UTC±24: The Home of Crypto Focused Professionals
            </h1>
            <p className="lead text-lg leading-tight">
              A park for those building and participating in the crypto industry
              to come together and share ideas, collaborate, and build the
              future with a curated group of people that share the same
              interests as you.
            </p>

            <div className="flex items-center">
              <DiscordButton />
              <TwitterButton />
            </div>
          </div>
        </div>

        <ProjectRoster />
        <Roster />

        <div className="mb-[120px] mt-[40px]">
          <h2 className="text-3xl font-bold">Think You Would Be A Good Fit?</h2>
          <p className="text-lg leading-tight lead mb-[40px] max-w-[650px]">
            With no application fee and little focus on revenue generation,
            UTC±24 is always open and focused on building a family of incredibly
            talented and passionate people. We are always looking for new
            members to join the squad.
          </p>

          <DiscordButton />
        </div>
      </div>
    </div>
  );
}
