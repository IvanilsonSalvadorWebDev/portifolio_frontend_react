import { Hero } from './components/Hero';
import { ServiceCard } from './components/ServiceCard';
import { services } from './data/services';

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen font-sans">
      {/* Header Simplificado */}
      <header className="flex justify-between items-center px-10 py-8 max-w-7xl mx-auto">
        <div className="text-white text-2xl font-black">Leinad<span className="text-[#10b981]">.</span></div>
        <button className="bg-[#10b981] text-black px-6 py-2 rounded-lg font-bold flex items-center gap-2">
          View Resume <Code size={16} />
        </button>
      </header>

      <Hero />

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
           <span className="text-[#10b981] uppercase tracking-widest text-xs font-bold">Services</span>
           <h3 className="text-white text-4xl font-black mt-2">What <span className="text-[#10b981] italic">I do.</span></h3>
        </div>

        {/* Layout Horizontal dos Cards no Desktop */}
        <div className="flex flex-col md:flex-row justify-between gap-8 max-w-7xl mx-auto">
          {services.map((s) => (
            <ServiceCard 
              key={s.id}
              number={s.id}
              title={s.title}
              description={s.description}
              icon={s.icon}
              isPrimary={s.isPrimary}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;