import { useState } from 'react';
import './SeoAnalysis.css'
import sendData from '../../services/PostServices';

 

function SeoAnalysis() {
   const [form, setForm] = useState({
        name:"",
        email:"",
        url:"",
        communications:false
    });
    
    const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    sendData(form, '')   
  };

    return(
        <div className="containbg">
            <div className="analysis">
            <img src="images/Analysis/illustration.svg" alt="" />
            <div className="formanalysis">
                <h2>Get a Free SEO Analysis!</h2>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">
                        Name
                        <input type="text" 
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        placeholder='Your name' />
                    </label>
                    <label htmlFor="">
                        Email
                        <input type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder='Your working email' />
                    </label>
                    <label htmlFor="">
                        Your website URL
                    <input type="text" 
                    name='url'
                    onChange={handleChange}
                    value={form.url}
                    placeholder='http://yoursite.com'/>
                    </label>
                   <div className="formBottom">
                    <label className="agree">
                        <input className="agreeInput" 
                        type="checkbox" 
                        name="communications"
                        checked={form.communications}
                        onChange={handleChange}/>
                        <span className="agreeText">
                        I agree to receive communications from Createx SEO Agency
                        </span>
                    </label>

                    <input className="submitBtn" type="submit" value="Get a free analysis" />
                    </div>

                </form>
            </div>
        </div>
        </div>
        
    )
}

export default SeoAnalysis;