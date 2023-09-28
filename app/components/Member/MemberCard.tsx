import Image from "next/image";

const MemberCard = ({
  member,
}: {
  member: {
    username: string;
    avatar: string;
  };
}) => {
  return (
    <a
      href={`https://twitter.com/${member.username}`}
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src={member.avatar}
        alt="avatar"
        className="rounded-full w-14 h-14 hover:scale-95 transition-all duration-200"
        width={400}
        height={400}
      />
    </a>
  );
};

export default MemberCard;
