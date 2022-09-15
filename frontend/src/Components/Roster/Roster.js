import { useEffect, useState } from 'react';

import MemberCard from "../Dashboard/Member/MemberCard";

const Roster = () => {
    const [roster, setRoster] = useState([]);

    useEffect(() => {
        const getRoster = () => {
            fetch('projects/')
                .then(response => response.json())
                .then(data => setRoster(data))
        }

        getRoster();
    }, [])

    return(
        <>
            {roster.map(member => {
                <MemberCard member={member} />
            })}
        </>
    )
}

export default Roster;