import { useState } from 'react';

import { Button } from '@mui/material'

const DashboardSidebar = () => {
    const tabs = [
        ['', [
            'Dashboard',
            'Profile',
            'Season Badge',
        ]],
        ['Family', [
            'Members',
            'Projects',
        ]],
        ['Docs', [
            'Getting Started',
            'API Reference',
            'Guides',
        ]],
    ]

    const [activeTab, setActiveTab] = useState('dashboard');

    return (
        <div className="sidebar">
            <div className="sidebar__tabs">
                {tabs.map(([tabName, tabItems]) => (
                    <div className="sidebar__tab">
                        <h5>{tabName}</h5>
                        <div className="sidebar__tab__items">
                            {tabItems.map((tabItem) => (
                                <Button
                                    className={`sidebar__tab__item ${activeTab === tabItem.toLowerCase() ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tabItem.toLowerCase())}
                                >
                                    {tabItem}
                                </Button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DashboardSidebar;