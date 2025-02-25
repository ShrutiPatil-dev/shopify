import React,{useState,useEffect} from 'react'
import { aboutList } from '../assets/assets'

function About() {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
      
        setTimeout(() => {
            setLoading(false); 
        }, 1000);
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="spinner-border animate-spin w-16 h-16 border-t-4 border-neutral-800 rounded-full"></div> {/* Custom Spinner */}
            </div>
        );
    }
       
    
         
  return (
    <div>
      <h1 className='text-center text-xl lg:text-3xl text-neutral-800 m-2 font-semibold'>About us</h1>
      <hr className='m-12 mt-5' />
       <p className='w-3/4 m-auto p-2 text-justify'>Shopify is a leading e-commerce platform designed to help businesses of all sizes create, manage, and scale their online stores. Whether you’re a small business owner looking to start your first online shop or an established brand expanding your reach, Shopify offers a user-friendly solution for building a customizable website to sell products, manage inventory, and process payments. 
            One of the standout features of Shopify is its ease of use. With no need for advanced technical skills, anyone can quickly create a professional-looking store using drag-and-drop tools, themes, and an intuitive interface. Shopify supports a wide range of industries, from fashion and beauty to home goods and electronics, offering tailored solutions and templates for different business needs. The platform’s extensive app marketplace allows store owners to integrate additional features, such as marketing tools, customer support systems, shipping solutions, and more, to enhance the functionality of their stores.
            Shopify also excels in payment processing, offering secure, seamless transactions through Shopify Payments. For businesses selling internationally, Shopify supports multiple currencies and languages, making it easy to sell globally. Inventory management is simplified through automated systems that help track products, manage orders, and fulfill shipments efficiently.
            Beyond the basic store-building features, Shopify includes a range of marketing and SEO tools to help businesses increase visibility, attract customers, and improve conversion rates. This includes social media integrations, email marketing automation, discount codes, and detailed analytics.
            With reliable customer support, 24/7, Shopify ensures that help is always available. Whether you’re troubleshooting an issue or seeking advice, their dedicated support team is just a click away.
            In conclusion, Shopify is an all-in-one platform that empowers entrepreneurs to create and grow their e-commerce businesses with ease, offering flexibility, scalability, and support every step of the way.</p>

      <h2 className='text-center text-lg lg:text-2xl text-neutral-800 m-6 font-semibold'>Our Products</h2> 
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
        {aboutList.map((item,index) =>(
            <div key={index} className='flex flex-col justify-center items-center'>
               <img className="w-64 h-58 " src={item.image} alt={item.name}/>
               <h2 className='text-lg m-4 font-semibold'>{item.name}</h2>
            </div>
        ))}
      </div>    
    </div>
    
  )
}

export default About
