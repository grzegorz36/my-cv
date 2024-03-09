import React from 'react'
import ReactDOM from 'react-dom/client'
import photo from './assets/photo.svg'
interface Experience {
  description: string;
  year: number;
}
interface CV {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  experience: Experience[];
  education: string[];
} 

const cv: CV = {
  photo: photo,
  name: 'Grzegorz',
  lastName: 'Błaszczuk',
  position: 'Nauczyciel informatyki',
  experience: [{
    year: 2018,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod arcu ornare nibh commodo, in vulputate felis fringilla.',
  }, {
    year: 2019,
    description: 'Suspendisse potenti. Cras fringilla sem risus, sed luctus odio ornare a. Aliquam sit amet volutpat mauris. In euismod ligula non rutrum interdum'
  }],
  education: [
    'Lorem ipsum',
    'Dolor sit amet',
    'Consectetur adipiscing elit',
  ]
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
  </React.StrictMode>,
)
