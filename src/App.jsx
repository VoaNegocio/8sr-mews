import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import TargetAudience from './components/TargetAudience';
import LearningOutcomes from './components/LearningOutcomes';
import CourseFormat from './components/CourseFormat';
import Differentials from './components/Differentials';
import Offer from './components/Offer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Problem />
        <TargetAudience />
        <LearningOutcomes />
        <CourseFormat />
        <Differentials />
        <Offer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
