 import { SERVICES_CONTENT } from "../ServicesSection/data";
 import './ServiceContent.css'
 import PrimaryButton from "../PrimaryButton/PrimaryButton";

function ServiceContent({ activeTab }) {
  const data = SERVICES_CONTENT[activeTab];

  return (
    <div className="service-content">
      <div className="text">
        <h3>{data.title}</h3>

        <ul className="list">
          {data.bullets.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="actions">
          {data.buttons.map((btn, i) => (
            <PrimaryButton 
            text={btn.label} 
            key={i} 
            className={`btn--${btn.variant}`} 
            color={btn.variant==='outline' ? '#fff' : '#6C63FF' } 
            border={btn.variant==='outline' ? '1px solid #6C63FF' : '0' }
            textcolor={btn.variant==='outline' ? '#6C63FF' : 'white'}/>
          ))}
        </div>
      </div>

      <div className="image">
        <img src={data.image} alt="" />
      </div>
    </div>
  );
}


export default ServiceContent;