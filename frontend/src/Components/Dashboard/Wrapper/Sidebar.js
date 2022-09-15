import { useState } from 'react';

import { Link } from 'react-router-dom';
import { Button } from '@mui/material'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
    const tabs = [
        ['', {
            Dashboard: {
                icon: ['far', 'house'],
                path: '/dashboard',
                tabs: {}
            },
            Profile: {
                icon: ['far', 'person'],
                path: '/dashboard/profile',
                tabs: {}
            },
            "Season Badge": {
                icon: ['far', 'badge'],
                path: '/dashboard/badge',
                tabs: {}
            },
            "Metrics": { 
                icon: ['far', 'chart-bar'],
                path: '/dashboard/metrics',
                tabs: {}
            }
        }],
        ['Family', {
            Members: {
                icon: ['far', 'family'],
                path: '/dashboard/members',
                tabs: {}
            },
            Projects: {
                icon: ['far', 'project-diagram'],
                path: '/dashboard/projects',
                tabs: {}
            },
            Grants: { 
                icon: ['far', 'hand-holding-usd'],
                path: '/dashboard/grants',
                tabs: {}
            }
        }],
        ['Docs', {
            "Getting Started": {
                icon: ['far', 'play'],
                path: '/dashboard/docs/getting-started',
                tabs: {}
            },
            "API Reference": {
                icon: ['far', 'notes'],
                path: '/dashboard/docs/api-reference',
                tabs: {}
            },
            "Tutorials": {
                icon: ['far', 'hand'],
                path: '/dashboard/docs/tutorials',
                tabs: {}
            }
        }],
    ]

    const [activeTab, setActiveTab] = useState('dashboard');

    console.log(activeTab)

    return (
        <div className="sidebar">
            <div className="sidebar__tabs">
                {tabs.map(([tabName, tab]) => (
                    <div className="sidebar__tab">
                        <h5 className="sidebar__tab__name">{tabName}</h5>
                        <div className="sidebar__tab__items">
                            {Object.entries(tab).map(([tabItemName, tabItem]) => (
                                <Button
                                    component={Link}
                                    to={tabItem.path} 
                                    type="button"
                                    className={`sidebar__tab__item ${activeTab === tabItemName.toLowerCase() ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tabItemName.toLowerCase())}
                                >
                                    <div className="sidebar__tab__item__icon">
                                        <FontAwesomeIcon icon={tabItem.icon} />
                                    </div>

                                    <div className="sidebar__tab__item__name">{tabItemName}</div>

                                    {Object.keys(tabItem.tabs).length > 0 && (
                                        <div className="sidebar__tab__item__arrow">
                                            <img src="/assets/icons/arrow.svg" alt="arrow" />
                                        </div>
                                    )}

                                    {Object.keys(tabItem.tabs).length > 0 && (
                                        <div className="sidebar__tab__item__tabs">
                                            {Object.entries(tabItem.tabs).map(([tabItemTabName, tabItemTab]) => (
                                                <div className="sidebar__tab__item__tab">
                                                    <div className="sidebar__tab__item__tab__icon">
                                                        <img src={`/assets/icons/${tabItemTab.icon}.svg`} alt={tabItemTabName} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </Button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;

// <div className="sidebar__tabs">
// {tabs.map(([tabName, tabItems]) => (
//     <div className="sidebar__tab">
//         <h5>{tabName}</h5>
//         <div className="sidebar__tab__items">
//             {tabItems.map((tabItem) => (
//                 <Button
//                     className={`sidebar__tab__item ${activeTab === tabItem.toLowerCase() ? 'active' : ''}`}
//                     onClick={() => setActiveTab(tabItem.toLowerCase())}
//                 >
//                     {tabItem}
//
//                     {/* Dropdown arrow */}
//                     {tabItem === 'Projects' && (
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="24"
//                             height="24"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             className="feather feather-chevron-down"
//                         >
//                             <polyline points="6 9 12 15 18 9"></polyline>
//                         </svg>
//                     )}
//                 </Button>
//             ))}
//         </div>
//     </div>
// ))}
// </div>