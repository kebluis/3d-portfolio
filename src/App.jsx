import { PerspectiveCamera, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { useContext } from "react";
import styled from "styled-components";
import "./App.css";
import Contents from "./layout/Contents";
import Introduction from "./components/Introduction";
import Navigation from "./components/Navigation";
import ScrollManager from "./components/ScrollManager";
import Avatar from "./models/Avatar";
import Bird from "./models/Bird";
import Room from "./models/Rooms";
import { ScrollContext } from "./store/scrollContext";

const Container = styled.div`
  height: ${window.innerHeight}px;
`;

function App() {
  const {scrollY } = useContext(ScrollContext)
  return (
    <Container>
      <Navigation />
      <Introduction />
      <Canvas>
        <PerspectiveCamera position={[0.5, -2.8, 4]}>
          <ambientLight intensity={2} />
          <ScrollControls pages={3} damping={0.8}>
            <ScrollManager />
            <Physics timeStep={"vary"}>
              <RigidBody type="fixed" colliders="trimesh">
                <Room
                  scale={0.0155}
                  rotation={[0, 5, 0]}
                  position={[0, 0, 0]}
                />
              </RigidBody>
              <Bird
                position={[-0.45, 2.08, -1.6]}
                scale={1.5}
                rotation={[0, -0.5, 0]}
              />
              <Avatar scale={2} rotation={[0, -0.3, 0]} />
            </Physics>

            <Contents />
            
          </ScrollControls>
        </PerspectiveCamera>
      </Canvas>
    </Container>
  );
}

export default App;