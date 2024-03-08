import React from 'react'
import ReactDOM from 'react-dom/client'
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


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

  </React.StrictMode>,
)
