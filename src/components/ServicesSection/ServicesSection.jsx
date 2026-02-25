import './ServicesSection.css';
import { useState } from 'react';
import ServiceContent from '../ServiceContent/ServiceContent';
import { SERVICES_CONTENT } from './data';


const tabs = ['social', 'seo', 'research', 'content', 'paid'];



function ServicesSection() {
const [activeTab, setActiveTab] = useState('social');

    return(
        <div className='services'>
            <h2>Our services</h2>

            <div className='tabs'>
            {tabs.map(tab => (
                <button
                key={tab}
                className={activeTab === tab ? 'active' : ''}
                onClick={() => setActiveTab(tab)}
                >
                    {SERVICES_CONTENT[tab].tabLabel}
                </button>
            ))}
            </div>
             <ServiceContent activeTab={activeTab} />
        </div>
    )
}

export default ServicesSection;