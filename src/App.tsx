import React, { FC } from 'react';
import { Canvas } from 'react-three-fiber';
import Controls from 'components/Controls';
import Box from 'components/Box';

const App: FC = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Controls isControl />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
};

export default App;
