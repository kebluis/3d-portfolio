import { useGLTF } from "@react-three/drei";
import React from "react";
import roomPrefab from "../assets/plot/room.glb";

const Room = (props) => {
  const { nodes, materials } = useGLTF(roomPrefab);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008_flowers000_0.geometry}
        material={materials["flowers.000"]}
        position={[160.935, 93.885, 298.59]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Snake_Plant003_flowers000_0.geometry}
        material={materials["flowers.000"]}
        position={[-168.202, 80.631, 37.396]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_Furniture_0.geometry}
        material={materials.Furniture}
        position={[0, 3.828, 247.84]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.prop_book_03_inst_002_decor_set_0.geometry}
        material={materials.decor_set}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006_room_0.geometry}
        material={materials.room}
        position={[0, 425.726, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004_sf_0.geometry}
        material={materials.material}
        position={[43.738, 5.049, 63.303]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001_flowers000_0.geometry}
        material={materials["flowers.000"]}
        position={[160.935, 80.278, -167.77]}
        rotation={[-Math.PI / 2, 0, -1.251]}
        scale={85.79}
      />
    </group>
  );
};

useGLTF.preload("/room.glb");

export default Room;
