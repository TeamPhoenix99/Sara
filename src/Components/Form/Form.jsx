import React, { useState, useContext, act } from 'react';
import './Form.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {MultiOptionSelector, SimpleOptionsSelector} from './OptionsInput';
import { StoreContext } from '../../contexts/StoreContext';
import { useNavigate } from 'react-router-dom';


export const Form = () => {
  const navigate = useNavigate()

  const [date, setDate] = useState('');
  const [day, setDay] = useState('');
  const [budget, setBudget] = useState('');
  const [places, setPlaces] = useState([]);
  const [themes, setTheme] = useState([]);
  const [activities, setActivities] = useState([]);
  const [accommodation, setAccommodation] = useState('');
  const [foods, setFoods] = useState('');

  const {apiData} = useContext(StoreContext);
  
  const places_options = []
  const activities_options = []

  apiData.map((e)=>{
    if(e['type']=='place') places_options.push(e)
    if(e['type']=='activities') activities_options.push(e)
  })
  console.log(typeof(apiData))

  const themes_options = [
    {
      "name": "Commercial",
      "image": "https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2018/02/thumb_720_450_Jungledreamstime_l_56902828.jpg"
    },
    {
      "name": "Historic",
      "image": "https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2018/02/thumb_720_450_Jungledreamstime_l_56902828.jpg"
    },
    {
      "name": "Religious",
      "image": "https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2018/02/thumb_720_450_Jungledreamstime_l_56902828.jpg"
    },
    {
      "name": "Cultural",
      "image": "https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2018/02/thumb_720_450_Jungledreamstime_l_56902828.jpg"
    },
    {
      "name": "Natural",
      "image": "https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2018/02/thumb_720_450_Jungledreamstime_l_56902828.jpg"
    },
    {
      "name": "Wildlife",
      "image": "https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2018/02/thumb_720_450_Jungledreamstime_l_56902828.jpg"
    }
  ];
  const food_options = [
    {
      'name': 'Non-Vegetarian',
      "image": "https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2018/02/thumb_720_450_Jungledreamstime_l_56902828.jpg"
    },
    {
      'name': 'Vegetarian',
      "image": "https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2018/02/thumb_720_450_Jungledreamstime_l_56902828.jpg"
    }
  ]
  const accommodation_options = [
    {
      'name': 'Simple',
      "image": "https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2018/02/thumb_720_450_Jungledreamstime_l_56902828.jpg"
    },
    {
      'name': 'Cultural',
      "image": "https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2018/02/thumb_720_450_Jungledreamstime_l_56902828.jpg"
    },
    {
      'name': 'Luxurious',
      "image": "https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2018/02/thumb_720_450_Jungledreamstime_l_56902828.jpg"
    }
  ]

  const urlArgs = (data)=>{
    let str = ''
    str = 'days=' + day + '&budget=' + budget + '&accommodation=' + accommodation + '&food=' + foods
    places.forEach(e =>{
      str += '&place='+e
    })
    themes.forEach(e =>{
      str += '&type=' + e
    })
    activities.forEach(e =>{
      str += '&activities=' + e
    })

    return str
  }



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !day || !budget) {
        alert('Please Number of days, date of your visit and your budget');
        return;
    }

    let args = urlArgs();
    navigate('/package' + '?' +args)
  };

  return (
    <form action="" onSubmit={handleSubmit}>

      <div className="form-heading">
        <h1>Plan your trip with Sara</h1>
        <button className="chat-btn">Chat with Sara</button>
      </div>

      {/* Input Field */}
      <div className="input-field">
        <div className="text-input">
          <label htmlFor="">Select dates</label>
          <DatePicker selected={date} onChange={(date) => setDate(date)} />
        </div>

        <div className="text-input">
          <label htmlFor="">Budget</label>
          <input required type="tel" value={budget} onChange={(e) => setBudget(e.target.value)} />
        </div>

        <div className="text-input">
          <label htmlFor="">No of days</label>
          <input required type="tel" value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
      </div>

      <MultiOptionSelector label_text="Which places you don't want to miss ?" given_options={places_options} onOptionsChange={setPlaces}/>
      <MultiOptionSelector label_text="What types of places exited you? " given_options={themes_options} onOptionsChange={setTheme}/>
      <MultiOptionSelector label_text="Are their any activities you want to do in nepaL?" given_options={activities_options} onOptionsChange={setActivities}/>

    
      <SimpleOptionsSelector label_text="What type of food you prefer?" given_options={food_options} onOptionsChange={setFoods}/>
      <SimpleOptionsSelector label_text="What type of accommodation you prefer?" given_options={accommodation_options} onOptionsChange={setAccommodation}/>

      <button type="submit" className="plan-btn">Plan my trip</button>
    </form>
  );
};

export default Form;
