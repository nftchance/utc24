import "./ProjectRoster.css";

export default async function ProjectRoster() {
  const projects = [
    {
      name: "Nuclear Nerds",
      description:
        "A community-driven story world enabled by nfts and blockchain technology.",
      url: "https://nuclearnerds.io",
    },
    {
      name: "True Freeze",
      description:
        "Public good patient primitive locking ethereum for yield on your patience.",
      url: "https://truefreeze.xyz",
    },
    {
      name: "Colorspace",
      description:
        "3D color scale visualizer to create better digital palettes.",
      url: "https://colorspace.utc24.io",
    },
    {
      name: "Badger",
      description:
        "Securely distribute and manage onchain permissions with ERC-1155 Badges.",
      url: "https://trybadger.com",
    },
    {
      name: "Labor Markets Protocol",
      description:
        "A decentralized and onchain labor mechanism to socially coordinate high-quality work.",
      url: "https://metricsdao.xyz",
    },
    {
      name: "Cosanostra",
      description:
        "Research group that explores the intersection of crypto and future consumer cycles.",
      url: "https://cosanostra.gg",
    },
    {
      name: "Fountain Digital",
      description:
        "Fountain Digital facilitates trusted brokerage of high-value NFTs, Backed by Flamingo DAO.",
      url: "https://fountaindigital.xyz/",
    },
  ];

  return (
    projects.length !== 0 && (
      <>
        <h2 className="relative z-[2] text-3xl font-bold">
          GALAXIES BEING EXPLORED
        </h2>
        <p className="relative z-[2] lead text-lg leading-tight">
          At UTC±24 the primary focus lies within positive impact and that
          brings a vast universe to wonder. Together, our members have stepped
          into the unknown and are exploring the depths unlike many others.
        </p>

        <div className="projects grid lg:grid-cols-2 gap-4 mb-32">
          {projects.map((obj: any) => {
            return (
              <a
                key={`project:${obj.name}`}
                href={obj.url}
                target="_blank"
                rel="noreferrer"
              >
                <div className="project">
                  <h3 className="project__header">{obj.name}</h3>
                  <p className="mt-2">{obj.description}</p>
                </div>
              </a>
            );
          })}
        </div>
      </>
    )
  );
}
