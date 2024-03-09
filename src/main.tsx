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
    <main>
      <header className='cv-header'>
        <h1>CV {cv.name} {cv.lastName}</h1>
      </header>

      <aside className='cv-personal'>
        <h2>Personal data</h2>
        <img className='cv-photo' src={cv.photo}></img>
        <h3>{cv.name} {cv.lastName}</h3>
        <p>{cv.position}</p>
      </aside>

      <section className='cv-details'>
        <h2>Experience</h2>
        <ul>
          {cv.experience.map(el => 
          <li key={el.year}>
            <strong>{el.year}</strong> - {el.description}
          </li>
            )}
        </ul>

        <h2>Education</h2>
        <ul>
          {cv.education.map((el, index) => <li key={index}>{el}</li>)}
        </ul>
      </section>
    </main>
  </React.StrictMode>,
)
