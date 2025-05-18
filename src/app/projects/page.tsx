import Image from "next/image";
import SingleProject from "../components/singleProject";
export default function Projects() {
  return (
    <div className="text-white/80 flex-col flex gap-y-2 mt-10">
      <SingleProject
        title="Case Packing Simulation Project Using ABB's IRB1600 and IRB360 in RobotStudio"
        description="As part of my Industrial Robotics coursework at WPI, I developed a simulated case packing and palletizing system using ABB IRB 1600 (serial) and ABB IRB 360 FlexPicker (parallel) robots within ABB RobotStudio. The simulation replicated a real-world manufacturing workflow where boxes are dynamically filled with products and stacked for shipment."
        youtubeUrl="https://www.youtube.com/watch?v=dqE8qXcoY_k&ab_channel=DavidAlex"
      />
      <SingleProject
        title="End Effector Manipulation on a 3D-Printed Humanoid Robot"
        description="I was responsible for simulating the humanoid robot using CoppeliaSim, a physics-based robotics simulator. I developed and tested trajectory planning and motion strategies, implementing both forward and inverse kinematics using the IKPY Python library, which allowed us to control the robot’s limbs based on a URDF (Unified Robot Description Format) that described its geometry and joint parameters. To enable the robot to interact with users in a natural and meaningful way, I integrated multiple perception systems."
        youtubeUrl="https://www.youtube.com/watch?v=zvvTky5I0sY&ab_channel=DavidAlex"
      />
      <SingleProject
        title="4-DoF Serial Robotic Arm Ball Sorter"
        description="In this project, I developed a color-sorting pick-and-place system using a 4-DOF robotic arm. The objective was to detect colored balls and sort them into corresponding containers using real-time image processing and robotic control."
        youtubeUrl="https://www.youtube.com/watch?v=e0FPujOunZM&ab_channel=DavidAlex"
      />
      <SingleProject
        title="Solar Panel Replacement Robot"
        description="For the final project in the course, RBE 2001 at WPI, I worked on a fully autonomous robot designed to replace defective solar panels in a mock solar field. The robot used PID-controlled drive motors, sensor feedback, and a custom-built arm to detect, remove, and replace panels without human intervention. I integrated state machines to manage task sequencing and did four-bar linkage calculations to make sure the arm can properly reach 3 different heights."
        youtubeUrl="https://www.youtube.com/watch?v=hEN6wp8c0yQ&ab_channel=DavidAlex"
      />
    </div>
  );
}
