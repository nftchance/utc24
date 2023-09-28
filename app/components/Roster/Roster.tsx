import { members } from "@/app/lib/members";

import MemberCard from "../Member/MemberCard";

export default async function Roster() {
  return (
    <>
      {members.length !== 0 && (
        <div className="mb-32">
          <h2 className="text-3xl font-bold">THE MEMBERS</h2>
          <p className="lead text-lg leading-tight">
            The members of UTC±24 are from all around the world, but we all
            share one thing in common: a massive interest in the future of Web3.
          </p>

          <div className="members grid grid-cols-3 lg:grid-cols-7 gap-10">
            {members.map((member) => (
              <MemberCard key={member.avatar} member={member} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
