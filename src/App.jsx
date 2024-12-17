// src/App.jsx
import PersonalData from './components/PersonalData';
import StudiesList from './components/StudiesList';
import ToolsList from './components/ToolsList';
import SportsGallery from './components/SportsGallery';
import './App.css';  
import './index.css'; // Para estilos globales

function App() {
  return (
    <div>
      <h1>Mi Proyecto con React y Vite</h1>
      <PersonalData />
      <StudiesList />
      <ToolsList />
      <SportsGallery />
    </div>
  );
}

export default App;
