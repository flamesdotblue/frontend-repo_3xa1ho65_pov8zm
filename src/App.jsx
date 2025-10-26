import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero3D />
        <ServicesSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
