import Wrapper from "../Wrapper/Wrapper";

import CompactCard from "../Card/CompactCard";

const Members = () => {
  const members = [
    {
      name: "John Doe",
      bio: "I am a farmer that lives in Conneticut. Love getting down and dirty with the Web3 family.",
      avatar:
        "https://pbs.twimg.com/profile_images/1565900598028951553/YFH6gxAc_400x400.jpg",
      birthday: new Date("1999-01-01"),
      social: {
        twitter: {
          icon: ["fab", "twitter"],
          link: "",
        },
        github: {
          icon: ["fab", "github"],
          link: "",
        },
      },
      family: {
        role: "",
        projects: [
          {
            name: "Project 1",
            description:
              "This is a project that I am working on with my family.",
            avatar:
              "https://pbs.twimg.com/profile_images/1565900598028951553/YFH6gxAc_400x400.jpg",
            link: "",
          },
        ],
        grants: [],
      },
      season: {
        badge: {
          icon: ["fas", "seedling"],
          generation: 0,
          generationColor: "red",
          gold: 0,
          daysSinceMinting: 0,
        },
        points: 0,
        rank: 0,
        season: 0,
        gold: 0,
      },
    },
  ];

  return (
    <Wrapper>
      <div className="members">
        <div className="members__header">
          <h1 className="members__title">Members</h1>
        </div>

        <div className="members__list">
          {members.map((member, index) => (
            <CompactCard
              key={index}
              avatar={member.avatar}
              title={member.name}
              description={member.bio}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Members;
