import { Github, Mail, Linkedin, Twitter } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-20 px-6 gap-10">
      {/* Coluna de Texto */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white">
          Hi, I am <span className="text-[#10b981]">Daniel Ochi</span>
        </h1>
        <p className="text-gray-400 text-xl md:text-2xl max-w-xl mb-12">
          A seasoned <span className="text-[#10b981]">Frontend Developer</span> transforming ideas into stunning digital experiences. Let's create something amazing!
        </p>
        
        {/* Redes Sociais */}
        <div className="flex space-x-5">
          {[Github, Mail, Linkedin, Twitter].map((Icon, i) => (
            <a key={i} href="#" className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-[#10b981] transition-colors">
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Coluna da Imagem/Animação */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#111] rounded-[40px] border border-gray-800 flex items-center justify-center relative shadow-2xl overflow-hidden">
           {/* Placeholder para a animação de tecnologias */}
           <div className="absolute inset-0 bg-gradient-to-br from-[#10b98111] to-transparent"></div>
           <span className="text-gray-700 font-black text-8xl opacity-20">DEV</span>
        </div>
      </div>
    </section>
  );
};