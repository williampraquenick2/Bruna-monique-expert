import React from 'react';
import { MapPin, Instagram, CheckCircle2 } from 'lucide-react';
import { Section } from './components/Section';
import { Button } from './components/Button';
import { Gallery } from './components/Gallery';
import { IMAGES, EXPERT_NAME, PROFESSION, FEATURES, STEPS, INSTAGRAM_LINK, LOCATION } from './constants';

function App() {
  return (
    <div className="min-h-screen font-sans text-slate-700 overflow-x-hidden pb-24 md:pb-0">
      
      {/* 1. HERO SECTION */}
      <div className="relative bg-stone-50 overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-brand-50/50 -skew-x-12 translate-x-1/4 z-0 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left order-2 md:order-1">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-brand-800 uppercase bg-brand-100 rounded-full">
                Vila Moreira • Guarulhos/SP
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-dark-900 leading-[1.1] mb-6">
                Eu sou <span className="text-brand-700">{EXPERT_NAME}</span>, sua dentista de confiança.
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Transformo sorrisos com segurança e naturalidade. {PROFESSION}. <br/>
                <span className="font-semibold text-brand-800">Cuidado especial para você e sua família.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Button 
                  text="Agendar Primeira Consulta Gratuita" 
                  subtext="Resposta Rápida • Sem Compromisso"
                  fullWidth={true}
                  className="sm:w-auto"
                />
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-1 relative order-1 md:order-2 w-full max-w-[400px] md:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] md:aspect-[3/4]">
                <img 
                  src={IMAGES.hero} 
                  alt={EXPERT_NAME} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-center md:hidden backdrop-blur-sm bg-black/20 p-2 rounded-lg">
                  <p className="font-serif font-bold text-xl">{EXPERT_NAME}</p>
                  <p className="text-xs opacity-90">{PROFESSION}</p>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="hidden md:flex absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl items-center gap-3 max-w-[200px]">
                <div className="bg-brand-100 p-2 rounded-full text-brand-700">
                  <CheckCircle2 size={24} />
                </div>
                <p className="text-sm font-semibold leading-tight text-dark-800">
                  Atendimento Personalizado
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. WHO AM I (Authority) */}
      <Section id="sobre" light={true}>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative">
             <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] md:aspect-[4/5] max-w-md mx-auto">
                <img 
                  src={IMAGES.about} 
                  alt="Dra Bruna atendendo" 
                  className="w-full h-full object-cover"
                />
             </div>
             {/* Decorative pattern */}
             <div className="absolute -z-10 top-[-20px] left-[-20px] w-full h-full border-2 border-brand-200 rounded-2xl hidden md:block" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-900 mb-6">
              Muito prazer, sou a <span className="text-brand-700">Dra. Bruna</span>
            </h2>
            <div className="prose prose-lg text-slate-600 mb-8">
              <p className="mb-4">
                Minha missão é simples: oferecer uma odontologia que vai além dos dentes. Eu cuido de <strong>pessoas</strong>.
              </p>
              <p className="mb-4">
                Seja para realizar um procedimento estético transformador como as facetas em resina, ou para cuidar da saúde bucal do seu filho com todo carinho, estou aqui para garantir que você se sinta seguro e acolhido.
              </p>
              <ul className="space-y-3 mt-6">
                {[
                  "Formada em Odontologia com foco em estética",
                  "Especialista em Harmonização Facial (Botox)",
                  "Atendimento lúdico e paciente para crianças",
                  "Consultório no Edifício Clavi EccoTower, Guarulhos"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-brand-600 bg-brand-50 p-0.5 rounded-full">
                      <CheckCircle2 size={18} />
                    </span>
                    <span className="font-medium text-dark-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button text="Conhecer o Consultório" variant="secondary" />
          </div>
        </div>
      </Section>

      {/* 3. RESULTS (Visual Proof) */}
      <Section id="resultados" className="bg-stone-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-900 mb-4">
            Resultados Reais
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Veja algumas transformações realizadas no consultório. Sorrisos renovados com naturalidade.
          </p>
        </div>

        <Gallery />
        
        <p className="text-center text-xs text-slate-500 mt-6 italic">
          * Imagens meramente ilustrativas. Os resultados podem variar de acordo com as características biológicas de cada paciente.
        </p>
      </Section>

      {/* 4. WHY TRUST ME */}
      <Section id="diferenciais">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-900">
            Por que confiar em meu trabalho?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="bg-stone-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-stone-100 text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 text-brand-700 mb-6">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. INTERMEDIATE CTA */}
      <section className="py-20 bg-brand-900 relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ainda com dúvidas se é o tratamento certo para você?
          </h2>
          <p className="text-brand-100 text-lg mb-8 max-w-2xl mx-auto">
            Não se preocupe. A primeira consulta serve exatamente para nos conhecermos e avaliarmos o seu caso sem compromisso.
          </p>
          <Button 
            text="Tirar Dúvidas no WhatsApp" 
            subtext="Fale diretamente com minha equipe"
            variant="secondary"
          />
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <Section id="como-funciona" className="bg-stone-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-900 mb-4">
            Como funciona a Primeira Consulta
          </h2>
          <p className="text-slate-600">Simples, rápido e transparente.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center p-6">
              {idx !== STEPS.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-stone-200 -z-10" />
              )}
              <div className="w-16 h-16 rounded-full bg-white border-4 border-brand-100 text-brand-700 flex items-center justify-center text-2xl font-bold shadow-sm mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-brand-50 border border-brand-200 rounded-lg px-6 py-3 text-brand-800 font-medium">
            <span className="font-bold">Nota:</span> A avaliação é 100% gratuita e sem compromisso de fechamento.
          </div>
        </div>
      </Section>

      {/* 8. FINAL CTA */}
      <Section className="pb-0 mb-12">
        <div className="bg-white border-2 border-stone-100 rounded-3xl p-8 md:p-12 shadow-2xl text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-400 to-brand-700" />
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark-900 mb-6">
            Vamos cuidar do seu sorriso?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Não adie mais o seu bem-estar. Clique abaixo e agende o melhor horário para você. Estou te esperando!
          </p>
          
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Button 
              text="AGENDAR CONSULTA GRATUITA AGORA" 
              subtext="Vagas limitadas para esta semana"
              className="w-full sm:w-auto shadow-brand-500/40 shadow-2xl"
            />
          </div>
        </div>
      </Section>

      {/* 9. FOOTER */}
      <footer className="bg-dark-900 text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center justify-center gap-6 mb-8">
            <h3 className="text-2xl font-serif text-white font-bold">{EXPERT_NAME}</h3>
            
            <div className="flex flex-col items-center gap-2 text-sm max-w-lg">
              <div className="flex items-center justify-center gap-2 text-brand-500">
                <MapPin size={18} />
                <span className="font-semibold text-stone-300">Rua Joseph Zarzour, 93 - Sala 516</span>
              </div>
              <span className="block">Vila Moreira - Guarulhos/SP</span>
              <span className="block text-stone-500">Edifício Clavi EccoTower (Próximo ao Hotel Slaviero)</span>
            </div>
            
            <a 
              href={INSTAGRAM_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-brand-400 transition-colors mt-2"
            >
              <Instagram size={20} />
              <span>@drabrunamonique</span>
            </a>
          </div>
          
          <div className="w-full h-px bg-stone-800 mb-8" />
          
          <p className="text-xs">
            © {new Date().getFullYear()} {EXPERT_NAME}. Todos os direitos reservados.
            <br className="md:hidden" /> Desenvolvido com foco em alta performance.
          </p>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-100 md:hidden z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
         <Button 
            text="Agendar Consulta Gratuita" 
            fullWidth={true}
            className="shadow-none"
         />
      </div>
    </div>
  );
}

export default App;