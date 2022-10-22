import { useQuery } from 'react-query';

import MemberCard from "../Dashboard/Member/MemberCard";

const fetchMembers = async () => {
    return fetch('members/')
        .then(res => res.json())
}

const Roster = () => {
    const query = useQuery(['members'], fetchMembers);

    const members = query.data?.filter(member => member.name);

    return (
        <>
            {
                members &&
                members.length !== 0 &&
                <>
                    <h2>THE MEMBERS</h2>
                    <p className="lead">The members of UTC±24 are from all around the world, but we all share one thing in common. A massive interest in building the future of Web3.</p>

                    <div className="members">
                        {members.map(member => {
                            return <MemberCard member={member} />
                        })}
                    </div>
                </>
            }
        </>
    )
}

export default Roster;