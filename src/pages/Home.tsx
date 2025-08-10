import React from 'react';
import ImageProcessor from '../components/ImageProcessor';
import SampleImages from '../components/SampleImages';

const Home: React.FC = () => {
  return (
    <main className="flex-grow flex flex-col items-center justify-start p-4 md:p-8 space-y-8">
      <ImageProcessor />
      <SampleImages />
    </main>
  );
};

export default Home;