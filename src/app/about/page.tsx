import Image from "next/image";

export default function About() {
  return (
    <div className="text-white/80 flex-col flex gap-y-2 ">
      <p className="mt-5">
        I'm a Robotics Engineering student at Worcester Polytechnic Institute,
        graduating in May 2025, with a strong focus on automation and robotic
        systems integration. My academic and project experience spans industrial
        robotics, kinematics, human-robot interaction, and multi-robot
        simulation, using tools like RobotStudio, CoppeliaSim, MATLAB, and
        Python.
      </p>
      <p>
        In my research, I developed a 3D-printed humanoid robot capable of
        interacting with users through vision, speech, and autonomous motion
        using AI and kinematics libraries. I’ve also engineered a case packing
        and palletizing workcell in RobotStudio using ABB robots, programming
        complex pick-and-place systems with RAPID and integrating dynamic object
        detection on a conveyor belt.
      </p>
      <p>
        In my free time, I lead as the Captain of the WPI Valorant Esports Team,
        where I’ve gained valuable experience in high-stakes teamwork, strategic
        coordination, and communication under pressure. Managing a competitive
        team has strengthened my leadership skills and reinforced the importance
        of collaboration—skills.
      </p>
    </div>
  );
}
