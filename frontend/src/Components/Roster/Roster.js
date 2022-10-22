import { useQuery } from 'react-query';

import { fetchMembers } from '../Controllers/Api';

import MemberCard from "../Dashboard/Member/MemberCard";

const Roster = () => {
    const query = useQuery(['members'], fetchMembers);

    return (
        <>
            {
                query.data &&
                query.data?.length !== 0 &&
                <>
                    <h2>THE MEMBERS</h2>
                    <p className="lead">The members of UTC±24 are from all around the world, but we all share one thing in common. A massive interest in building the future of Web3.</p>

                    <div className="members">
                        {query.data.map(member => {
                            return <MemberCard member={member} />
                        })}
                    </div>
                </>
            }
        </>
    )
}

export default Roster;