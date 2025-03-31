
import { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs';

const YogaPoseRecognizer = () => {
  const webcamRef = useRef<Webcam>(null);
  const [detector, setDetector] = useState<poseDetection.PoseDetector>();

  useEffect(() => {
    const loadModel = async () => {
      const model = poseDetection.SupportedModels.MoveNet;
      const detectorConfig = {
        modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING
      };
      const detector = await poseDetection.createDetector(model, detectorConfig);
      setDetector(detector);
    };
    loadModel();
  }, []);

  return (
    <div className="yoga-pose-recognizer">
      <h1>Yoga Pose Recognizer</h1>
      <Webcam
        ref={webcamRef}
        style={{
          width: '640px',
          height: '480px',
        }}
      />
    </div>
  );
};

export default YogaPoseRecognizer;
