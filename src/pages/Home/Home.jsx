import React, { useEffect, useState } from 'react';
import { Link, useNavigation } from 'react-router-dom';
import ChefLayout from '../../layouts/ChefLayout';
import ContactForm from '../../layouts/ContactForm';
import TestimonialSection from '../../layouts/TestimonialSection';
import BannerSection from '../../layouts/BannerSection';


const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://bap-er-hotel-server-mahdiwebx-gmailcom.vercel.app/data')
            .then(res => res.json())
            .then(data => setData(data.chefs))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <BannerSection></BannerSection>
            <h1 className='text-center mt-5'>All chef</h1>
            <div className="chef">
                {
                    data.map(dat =>
                        <ChefLayout
                            key={dat.id}
                            dat={dat}
                        >
                        </ChefLayout>
                    )
                }
            </div>
            <ContactForm></ContactForm>
            <TestimonialSection></TestimonialSection>
        </div>
    );
};

export default Home;
