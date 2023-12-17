import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { MathUtils } from "three";
import kebPrefab from "../assets/characters/kebatar.glb";

const Avatar = ({ position = [0.7, 0.3, -1.65], ...props }) => {
  const scroll = useScroll();
  const group = useRef();
  const [modelPosition, setModelPosition] = useState(position);
  const { nodes, materials, animations } = useGLTF(kebPrefab);
  const { actions } = useAnimations(animations, group);

  useEffect(
    () => void (actions["CompiledAction"].play().paused = true),
    [actions]
  );

  useFrame((state, delta, frame) => {
    const action = actions["CompiledAction"];
    const targetPoint = action.getClip().duration;
    const startActionTime = 1.9755;
    const endActionTime = 3.5862;
    const postZoomingStartTime = 4.5016;
    const postZoomingEndTime = 6;
    const period = endActionTime - startActionTime;


    if (action.time >= startActionTime && action.time <= endActionTime) {
      const xPosition = 0.7 + (-1.2 / period) * (action.time - startActionTime);
      const yPosition = action.time === startActionTime ? 0.1 : 0.3;
      const zPosition =
        -1.65 + (2.65 / period) * (action.time - startActionTime);
      setModelPosition([xPosition, yPosition, zPosition]);
    }
    if (action.time >= 1.5 && action.time <= endActionTime) {
      state.camera.position.x =
        -(1 / (endActionTime - 1.5)) * (action.time - 1.5);
      state.camera.position.z =
        5 + (4.5 / (endActionTime - 1.5)) * (action.time - 1.5);
    }

    if (action.time >= postZoomingStartTime && action.time <= postZoomingEndTime) {
      state.camera.position.y =
        - ( 1 / (postZoomingEndTime - postZoomingStartTime)) * (action.time - postZoomingStartTime);
      state.camera.position.z =
        9.5 - (2 / (postZoomingEndTime - postZoomingStartTime)) * (action.time - postZoomingStartTime);
    }

    action.time = MathUtils.damp(
      action.time,
      targetPoint * scroll.offset,
      100,
      delta
    );
  });
  return (
    <group ref={group} position={modelPosition} {...props} dispose={null}>
      <group name="Scene">
        <group name="MainChar">
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials["Wolf3D_Eye.004"]}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials["Wolf3D_Eye.004"]}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials["Wolf3D_Body.004"]}
            skeleton={nodes.Wolf3D_Body.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials["Wolf3D_Hair.004"]}
            skeleton={nodes.Wolf3D_Hair.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials["Wolf3D_Skin.004"]}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials["Wolf3D_Outfit_Bottom.004"]}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials["Wolf3D_Outfit_Footwear.004"]}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials["Wolf3D_Outfit_Top.004"]}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials["Wolf3D_Teeth.004"]}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
          />
          <primitive object={nodes.Hips} />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/6563c9ebc6f00168f3688496.glb");

export default Avatar;
