import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

interface WhyDeepWorkProps {
  onStartTimer?: () => void;
}

export function WhyDeepWork({ onStartTimer }: WhyDeepWorkProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Animate sections on load
      const sections = containerRef.current.querySelectorAll('.animate-section');
      animate(sections, {
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        delay: stagger(200),
        ease: 'out-quad',
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Hero Section */}
        <section className="animate-section opacity-0 text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Why <span className="text-indigo-600 dark:text-indigo-400">Deep Work</span> Matters
          </h1>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic leading-relaxed mb-8 border-l-4 border-indigo-600 pl-6">
              "Professional activities performed in a state of distraction-free concentration 
              that push your cognitive capabilities to their limit. These efforts create new value, 
              improve your skill, and are hard to replicate."
            </blockquote>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              — Cal Newport, Author of Deep Work
            </p>
          </div>
        </section>

        {/* The Crisis Section */}
        <section className="animate-section opacity-0 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl dark:shadow-gray-900/25 border dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              🚨 The Distraction Crisis
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-6xl font-bold text-red-600 dark:text-red-400 mb-2">60%</div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A 2012 McKinsey study found that the average knowledge worker spends 
                  <strong> more than 60 percent of the workweek</strong> engaged in electronic 
                  communication and Internet searching.
                </p>
                <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">30%</div>
                <p className="text-gray-700 dark:text-gray-300">
                  Close to <strong>30 percent of a worker's time</strong> is spent on shallow work 
                  that creates little new value.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  The Shallow Work Trap
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  "Noncognitively demanding, logistical-style tasks, often performed while 
                  distracted. These efforts tend to not create much new value in the world 
                  and are easy to replicate."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Opportunity Section */}
        <section className="animate-section opacity-0 mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 rounded-2xl p-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-center">
              💡 The Deep Work Hypothesis
            </h2>
            <div className="text-center mb-8">
              <blockquote className="text-xl italic leading-relaxed">
                "The ability to perform deep work is becoming increasingly rare at exactly 
                the same time it is becoming increasingly valuable in our economy. As a consequence, 
                the few who cultivate this skill, and then make it the core of their working life, 
                will thrive."
              </blockquote>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Two Core Abilities for Success:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2">1.</span>
                    The ability to quickly master hard things
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2">2.</span>
                    The ability to produce at an elite level, in terms of both quality and speed
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">The Deep Work Formula:</h3>
                <div className="text-center py-4">
                  <div className="text-2xl font-mono bg-white/20 rounded-lg p-4">
                    High-Quality Work = <br />
                    <span className="text-yellow-300">(Time Spent)</span> × <span className="text-green-300">(Intensity of Focus)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Science Section */}
        <section className="animate-section opacity-0 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl dark:shadow-gray-900/25 border dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              🧠 The Neuroscience of Flow
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic mb-4 border-l-4 border-blue-500 pl-4">
                  "The best moments usually occur when a person's body or mind is stretched 
                  to its limits in a voluntary effort to accomplish something difficult and worthwhile."
                </blockquote>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  — Mihaly Csikszentmihalyi, Flow researcher
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Research shows that to increase the time you spend in a state of depth 
                  is to leverage the complex machinery of the human brain in a way that 
                  <strong> maximizes the meaning and satisfaction</strong> you'll associate 
                  with your working life.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🌊</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  The Flow State
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Deep work creates the optimal conditions for flow—a mental state of 
                  complete immersion and effortless concentration that leads to peak performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Story Section */}
        <section className="animate-section opacity-0 mb-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-700 dark:to-blue-700 rounded-2xl p-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-center">
              🚀 The Power of Deep Work
            </h2>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">💻</div>
              <h3 className="text-2xl font-semibold mb-4">Bill Gates & Microsoft's Origin Story</h3>
            </div>
            
            <blockquote className="text-lg italic text-center mb-6 max-w-3xl mx-auto leading-relaxed">
              "In the winter of 1974, a young Harvard student named Bill Gates sees the Altair 
              on the cover of Popular Electronics. Gates realizes there's an opportunity to design 
              software for the machine, so he drops everything and spends the next eight weeks 
              hacking together a version of the BASIC programming language."
            </blockquote>
            
            <div className="bg-white/10 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-center text-lg">
                Recent interviews revealed the crucial trait behind this success: 
                <strong> Gates's preternatural deep work ability.</strong>
              </p>
              <div className="mt-4 text-center">
                <p className="text-yellow-300 font-semibold">
                  "Deep work is way more powerful than most people understand."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Four Disciplines Section */}
        <section className="animate-section opacity-0 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl dark:shadow-gray-900/25 border dark:border-gray-700">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              📋 The Four Disciplines of Execution
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  1. Focus on the Wildly Important
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Identify a small number of ambitious outcomes to pursue with your deep work hours.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
                <div className="text-2xl mb-3">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  2. Act on the Lead Measures
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Track your deep work hours—the behavior that drives success on your wildly important goals.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
                <div className="text-2xl mb-3">🏆</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  3. Keep a Compelling Scoreboard
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Display a visual representation of your deep work hours and progress toward your goals.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
                <div className="text-2xl mb-3">🔄</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  4. Create a Cadence of Accountability
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Regular review sessions to confront your scoreboard and plan your next steps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="animate-section opacity-0 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 rounded-2xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Join the Focused Few?
            </h2>
            
            <blockquote className="text-xl italic mb-8 max-w-2xl mx-auto leading-relaxed">
              "To leave the distracted masses to join the focused few is a transformative experience. 
              Depth generates a life rich with productivity and meaning."
            </blockquote>
            
            <div className="mb-8">
              <p className="text-lg mb-4 opacity-90">
                "I'll live the focused life, because it's the best kind there is."
              </p>
              <p className="text-sm opacity-75">— Winifred Gallagher</p>
            </div>
            
            <button
              onClick={onStartTimer}
              className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Deep Work Session ⚡
            </button>
            
            <p className="mt-4 text-sm opacity-75">
              Use our Pomodoro timer to begin your journey toward deep work mastery
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}