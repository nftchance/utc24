import { useEffect, useState } from 'react';

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
            {roster.map(obj => {
                return <a
                    key={`member:${obj}`}
                    href={obj.url}
                    target="_blank"
                    rel="noreferrer"
                >
                    {/* Purposefully missing information to increase click-through rates ╰(*°▽°*)╯ */}
                    <div
                        className="member"
                        style={{
                            backgroundImage: `url(${obj.image})`
                        }}
                    ></div>
                </a>
            })}
        </>
    )
}

export default Roster;