import React, { useState } from 'react';
import axios from 'axios';
const LocationMapSection = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // https://docs.google.com/forms/d/e/1FAIpQLSeOztujdoCJtrmzyZR8lMwO3r1rTsUC-5CuPjUJgLmyb3WUXA/viewform?usp=pp_url&entry.1688786220=a&entry.1654089662=a&entry.103835594=a&entry.446824356=a&entry.1374261271=a
    // Create FormData to be sent to Google Form
    const formPayload = new FormData();
    formPayload.append('entry.1688786220', formData.firstName);  // Replace with your actual entry ID
    formPayload.append('entry.1654089662', formData.lastName);   // Replace with your actual entry ID
    formPayload.append('entry.103835594', formData.email);      // Replace with your actual entry ID
    formPayload.append('entry.446824356', formData.company);    // Replace with your actual entry ID
    formPayload.append('entry.1374261271', formData.message);    // Replace with your actual entry ID

    // Submit the data to Google Form using axios
    try {
      await axios.post(
        'https://docs.google.com/forms/d/e/1FAIpQLSeOztujdoCJtrmzyZR8lMwO3r1rTsUC-5CuPjUJgLmyb3WUXA/formResponse', // Replace with your form URL
        formPayload,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      alert('Your message has been sent successfully!');
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      alert('Failed to submit the form, please try again.');
    }

    // Reset form data
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-5">
        <svg width="100%" height="100%" className="opacity-10">
          <pattern id="map-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5"></path>
          </pattern>
          <rect width="100%" height="100%" fill="url(#map-grid)"></rect>
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-blue-500/5 rounded-full blur-3xl -mb-20 -ml-20 opacity-30"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3">
            <div className="px-4 py-2 rounded-full border-2 border-primary/20 bg-primary/5 text-primary-light font-medium text-sm">
              Global Presence
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-heading mb-4">
            Where To Find Us
          </h2>
          <p className="text-lg text-neutral-medium max-w-3xl mx-auto">
            With offices around the world, we're ready to help your organization achieve its sustainability goals.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-100">
            <div className="relative aspect-[4/3] bg-neutral-50 overflow-hidden">
              <div className="absolute inset-0 z-0">
              <iframe
  className="w-full h-full rounded-xl border-0"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13330215.753930524!2d-17.56764771943713!3d35.34454638877168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc42e3783261bc8b%3A0xa6ec2c940768a3ec!2sSpain!5e0!3m2!1sen!2sin!4v1741767042778!5m2!1sen!2sin"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  style={{ filter: 'grayscale(0.5) contrast(1.2) opacity(0.8)' }}
></iframe>

                <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
              </div>
              <svg width="100%" height="100%" viewBox="0 0 100 80" className="absolute inset-0 z-10 pointer-events-none"></svg>
            </div>
            {/* <div>
              <div className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 opacity-75 w-8 h-8 bg-primary bg-opacity-50" style={{ left: '20%', top: '38%' }}></div>
              <div className="absolute cursor-pointer rounded-full -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-5 h-5 lg:w-6 lg:h-6 bg-primary text-white" style={{ left: '20%', top: '38%' }}>
                <i className="fas fa-building text-[8px] lg:text-[10px]"></i>
              </div>
            </div>
            <div>
              <div className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 opacity-75 w-8 h-8 bg-blue-500 bg-opacity-50" style={{ left: '48%', top: '30%' }}></div>
              <div className="absolute cursor-pointer rounded-full -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-4 h-4 lg:w-5 lg:h-5 bg-blue-500 text-white" style={{ left: '48%', top: '30%' }}></div>
            </div>
            <div>
              <div className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 opacity-75 w-8 h-8 bg-blue-500 bg-opacity-50" style={{ left: '75%', top: '48%' }}></div>
              <div className="absolute cursor-pointer rounded-full -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-4 h-4 lg:w-5 lg:h-5 bg-blue-500 text-white" style={{ left: '75%', top: '48%' }}></div>
            </div>
            <div>
              <div className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 opacity-75 w-8 h-8 bg-emerald-500 bg-opacity-50" style={{ left: '30%', top: '60%' }}></div>
              <div className="absolute cursor-pointer rounded-full -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-3 h-3 lg:w-4 lg:h-4 bg-emerald-500 text-white" style={{ left: '30%', top: '60%' }}></div>
            </div>
            <div>
              <div className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 opacity-75 w-8 h-8 bg-emerald-500 bg-opacity-50" style={{ left: '52%', top: '65%' }}></div>
              <div className="absolute cursor-pointer rounded-full -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-3 h-3 lg:w-4 lg:h-4 bg-emerald-500 text-white" style={{ left: '52%', top: '65%' }}></div>
            </div> */}
          </div>
          {/* <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-lg border border-neutral-100 shadow-sm">
            <div className="flex flex-col gap-1.5 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span>Headquarters</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Office</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span>Partner</span>
              </div>
            </div>
          </div> */}
          {/* <div className="absolute top-3 right-3 flex flex-col gap-1">
            <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-neutral-100 flex items-center justify-center hover:bg-white transition-colors">
              <i className="fas fa-plus text-neutral-600 text-xs"></i>
            </button>
            <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-neutral-100 flex items-center justify-center hover:bg-white transition-colors">
              <i className="fas fa-minus text-neutral-600 text-xs"></i>
            </button>
          </div> */}
          <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mt-32 -mr-32 z-0"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full -mb-32 -ml-32 z-0"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
              <p className="text-neutral-600 mb-6">
                Interested in our services? Fill out the form below and our team will reach out to you.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            placeholder="Smith"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
          placeholder="john@company.com"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1">Company</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
          placeholder="Your Company"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
          rows="5"
          placeholder="Tell us how we can assist you."
          required
        ></textarea>
      </div>
      <div className="text-center mt-6">
        <button
          type="submit"
          className="inline-block px-6 py-3 text-white bg-primary rounded-full font-medium transition-all hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          Send Message
        </button>
      </div>
    </form>
            </div>
          </div>
        </div>
        </div>
      
      </div>
    </section>
  );
};

export default LocationMapSection;
