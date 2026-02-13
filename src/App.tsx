import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Stars, Gift } from 'lucide-react';
import Layout from './components/Layout';
import Slide from './components/Slide/Slide';
import Bloom from './components/Bloom';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  // Audio ref if we want to add music later (optional)
  // const audioRef = useRef<HTMLAudioElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const handleNoHover = () => {
    // Move the button to a random position
    const x = Math.random() * (window.innerWidth - 200) - (window.innerWidth / 2 - 100);
    const y = Math.random() * (window.innerHeight - 200) - (window.innerHeight / 2 - 100);
    setNoPosition({ x, y });
  };

  const handleYesClick = () => {
    setCurrentSlide(4);
    // Fire confetti
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  return (
    <Layout>
      <AnimatePresence mode="wait">
        {/* Slide 0: Intro */}
        {currentSlide === 0 && (
          <Slide key="intro" isActive={currentSlide === 0}>
            <motion.div>
              <Heart className="w-16 h-16 text-red-500 mx-auto mb-6 animate-pulse" fill="#dc2626" />
              <h1 className="text-5xl md:text-7xl font-romantic text-pink-200 mb-8">
                Hey bebita...
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-lg mx-auto leading-relaxed">
                Después de casi dos años juntos.
              </p>
              <button
                onClick={nextSlide}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Ajaaam.. ?
              </button>
            </motion.div>
          </Slide>
        )}

        {/* Slide 1: Memories */}
        {currentSlide === 1 && (
          <Slide key="memories" isActive={currentSlide === 1}>
            <motion.div>
              <Stars className="w-12 h-12 text-yellow-300 mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-romantic text-pink-200 mb-8">
                Creo que ya te ganaste el puesto....
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-lg mx-auto leading-relaxed">
                ...Pero igual mi amor hacia ti sigue creciendo.
              </p>
              <button
                onClick={nextSlide}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Mas te vale maldito
              </button>
            </motion.div>
          </Slide>
        )}

        {/* Slide 2: Build up */}
        {currentSlide === 2 && (
          <Slide key="buildup" isActive={currentSlide === 2}>
            <motion.div>
              <Gift className="w-12 h-12 text-pink-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-romantic text-pink-200 mb-8">
                Así que tengo una pregunta...
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-md mx-auto">
                ¿Estás lista?
              </p>
              <button
                onClick={nextSlide}
                className="bg-red-500/80 hover:bg-red-600 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                Ya te habias tardado embe
              </button>
            </motion.div>
          </Slide>
        )}

        {/* Slide 3: The Proposal */}
        {currentSlide === 3 && (
          <Slide key="proposal" isActive={currentSlide === 3}>
            <div className="relative z-50">
              <h1 className="text-6xl md:text-8xl font-romantic text-red-500 mb-12 animate-pulse">
                ¿Quieres ser mi San Valentín?
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
                <button
                  onClick={handleYesClick}
                  className="bg-green-500 hover:bg-green-600 text-white text-xl px-12 py-4 rounded-full transition-all hover:scale-110 transform active:scale-95"
                >
                  ¡SÍ!
                </button>

                <motion.button
                  onHoverStart={handleNoHover}
                  onClick={handleNoHover}
                  animate={{ x: noPosition.x, y: noPosition.y }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-gray-500/50 hover:bg-gray-600/50 text-white/80 text-xl px-12 py-4 rounded-full transition-colors cursor-not-allowed absolute md:static"
                >
                  Nieh
                </motion.button>
              </div>
            </div>
          </Slide>
        )}

        {/* Slide 4: Success */}
        {currentSlide === 4 && (
          <Slide key="success" isActive={currentSlide === 4}>
            <Bloom />
          </Slide>
        )}
      </AnimatePresence>
    </Layout>
  );
}

export default App;
