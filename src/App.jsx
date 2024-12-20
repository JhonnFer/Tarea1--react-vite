import PersonalData from './components/PersonalData';
import StudiesList from './components/StudiesList';
import ToolsList from './components/ToolsList';
import SportsGallery from './components/SportsGallery';
import Formulario from './components/formulario'; // Cambia "formulario" a "Formulario"
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

      <div>
        <h1>Taller: Formulario</h1>
        <Formulario /> {/* Cambia "<formulario />" a "<Formulario />" */}
      </div>
    </div>
  );
}

export default App;
