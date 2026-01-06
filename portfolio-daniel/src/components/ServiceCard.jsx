export const ServiceCard = ({ number, title, description, icon: Icon, isPrimary }) => {
  return (
    <div className={`flex-1 p-10 rounded-3xl flex flex-col min-h-[350px] relative transition-all hover:-translate-y-2 ${
      isPrimary ? 'bg-[#10b981] text-black' : 'bg-[#161616] border border-gray-800 text-white'
    }`}>
      {/* Número decorativo no fundo */}
      <span className={`absolute top-6 right-8 text-7xl font-black opacity-10 ${isPrimary ? 'text-black' : 'text-gray-500'}`}>
        {number}
      </span>

      {/* Ícone */}
      <div className={`mb-8 w-12 h-12 flex items-center justify-center rounded-xl border-2 ${isPrimary ? 'border-black' : 'border-gray-700'}`}>
        <Icon size={24} className={isPrimary ? 'text-black' : 'text-[#10b981]'} />
      </div>

      {/* Texto */}
      <h4 className="text-2xl font-black mb-4">{title}</h4>
      <p className={`text-sm leading-relaxed ${isPrimary ? 'font-semibold opacity-90' : 'text-gray-400'}`}>
        {description}
      </p>
    </div>
  );
};