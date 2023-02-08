import { useGLTF } from "@react-three/drei";
import React from "react";

function Model() {
  const model = useGLTF("./Logo.glb");
  return <primitive object={model.scene} />;
}

export default Model;
