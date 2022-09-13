import { useEffect } from 'react';

const Roster = () => {
    // const [roster, setRoster] = useState([]);

    const roster = [{
        name: 'CHANCE',
        url: 'https://twitter.com/nftchance/',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1533321078960967681/sxYQ9OIu_400x400.jpg'
    }, {
        name: 'MasonTheChain',
        url: 'https://twitter.com/MasOnTheChain',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1544418511237386242/uOdrCu_J_400x400.png'
    }, {
        name: 'ArtGhost',
        url: 'https://twitter.com/the_art_ghost',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1542914984275021829/6qOVtPJS_400x400.jpg'
    }, {
        name: 'Jerseyborn',
        url: 'https://twitter.com/SeanSemola',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1539265807959588864/wf4r7fzN_400x400.jpg'
    }, {
        name: 'danner',
        url: 'https://twitter.com/drakedanner',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1543463296858202113/EbDRCHBm_400x400.png'
    }, {
        name: 'LoganOP',
        url: 'https://twitter.com/LoganOP_gm',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1536857071026683906/pZExsxmT_400x400.jpg'
    }, {
        name: 'ql-crypto',
        url: 'https://twitter.com/ql_crypto',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1488197535151890438/5V0Asl3f_400x400.jpg'
    }, {
        name: 'jack',
        url: 'https://twitter.com/jack_forlines',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1534210600175341569/aiUai8kU_400x400.png'
    }, {
        name: 'Jenesis',
        url: 'https://twitter.com/jenesisquoi',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1534739338965270531/p8FVX8x3_400x400.jpg'
    }, {
        name: 'Maclunkey',
        url: 'https://twitter.com/TheMaclunkster',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1542147124770603008/T0vscm8t_400x400.jpg'
    }, {
        name: 'segwitnitwit',
        url: 'https://twitter.com/segwitnitwit',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1544176495106707456/cpcx0SSA_400x400.jpg'
    }, {
        name: 'banterlytics',
        url: 'https://twitter.com/banterlytics',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1529515332674666496/U42WUkT1_400x400.jpg'
    }, {
        name: 'bg',
        url: 'https://twitter.com/bg_alt',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1430741853876359168/1Z6PHM-5_400x400.jpg'
    }, {
        name: 'Bhavin',
        url: 'https://twitter.com/RBhavinVaid',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1519322539922763779/y-G_XkkD_400x400.png'
    }, {
        name: 'charliemarketplace',
        url: 'https://twitter.com/charliemktplace',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1537556881819983877/gRYfo8DV_400x400.jpg'
    }, {
        name: 'dfranco',
        url: 'https://twitter.com/0xfranon',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1513939446848266250/AfGNgDMp_400x400.jpg'
    }, {
        name: 'Jonny',
        url: 'https://twitter.com/JonnyThe4th',
        bio: '',
        image: 'https://pbs.twimg.com/profile_images/1428770158978510849/d_w8uXQ3_400x400.jpg'
    }]

    // useEffect(() => {
    //     const getRoster = () => {
    //         fetch('https://api.utc24.io/org/roster')
    //             .then(response => response.json())
    //             .then(data => setRoster(data))
    //     }

    //     getRoster();
    // }, [])

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