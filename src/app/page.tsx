import Image from "next/image";

const projectHighlights = [
  {
    title: "Case Packing and Palletizing Cell (ABB RobotStudio)",
    description:
      "Built a production-style simulation using ABB IRB 1600 and IRB 360 robots, with dynamic conveyor interaction and RAPID programming for synchronized pick-and-place throughput.",
    focus: ["RobotStudio", "RAPID", "Workcell Simulation", "Industrial Robotics"],
    demoUrl: "https://www.youtube.com/watch?v=dqE8qXcoY_k&ab_channel=DavidAlex",
  },
  {
    title: "3D-Printed Humanoid End Effector Manipulation",
    description:
      "Developed trajectory and arm control strategies using forward and inverse kinematics with IKPY in CoppeliaSim to enable realistic human-robot interaction behaviors.",
    focus: ["CoppeliaSim", "Python", "IKPY", "URDF"],
    demoUrl: "https://www.youtube.com/watch?v=zvvTky5I0sY&ab_channel=DavidAlex",
  },
  {
    title: "4-DOF Robotic Arm Ball Sorter",
    description:
      "Implemented a real-time vision-guided pick-and-place workflow for color-based sorting, combining image processing and motion control for repeatable task execution.",
    focus: ["Computer Vision", "Robotic Control", "Python", "Automation Logic"],
    demoUrl: "https://www.youtube.com/watch?v=e0FPujOunZM&ab_channel=DavidAlex",
  },
  {
    title: "Autonomous Solar Panel Replacement Robot",
    description:
      "Designed a fully autonomous field robot with PID motor control, sensor-based state transitions, and a four-bar linkage arm system to detect and replace faulty panels.",
    focus: ["Embedded Control", "PID", "State Machines", "Mechanism Design"],
    demoUrl: "https://www.youtube.com/watch?v=hEN6wp8c0yQ&ab_channel=DavidAlex",
  },
];

const toYouTubeEmbedUrl = (url: string) => {
  const idFromWatch = url.match(/[?&]v=([^&]+)/)?.[1];
  const idFromShort = url.match(/youtu\.be\/([^?&]+)/)?.[1];
  const videoId = idFromWatch ?? idFromShort;

  if (!videoId) {
    return url;
  }

  return `https://www.youtube.com/embed/${videoId}`;
};

const skillGroups = [
  {
    title: "Robotics + Simulation",
    items: [
      "RobotStudio",
      "CoppeliaSim",
      "Industrial Workcell Design",
      "Motion Planning",
      "Robot Kinematics",
    ],
  },
  {
    title: "Programming + Controls",
    items: ["Python", "MATLAB", "RAPID", "PID Control", "State Machine Architecture"],
  },
  {
    title: "Systems + Team Execution",
    items: [
      "Human-Robot Interaction",
      "Cross-Functional Collaboration",
      "Technical Communication",
      "Leadership Under Pressure",
    ],
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-20 pt-8 sm:px-8 lg:px-10">
      <header className="reveal sticky top-4 z-30 mb-10">
        <div className="section-shell flex flex-wrap items-center justify-between gap-3 px-5 py-4 backdrop-blur">
          <a
            href="#top"
            className="font-[family-name:var(--font-montserrat)] text-base font-semibold tracking-tight text-[var(--color-accent-strong)]"
          >
            David Alex
          </a>
          <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[var(--color-muted)]">
            <a
              className="rounded-full px-3 py-1.5 transition hover:bg-[rgba(224,224,224,0.12)] hover:text-[var(--color-text)]"
              href="#about"
            >
              About
            </a>
            <a
              className="rounded-full px-3 py-1.5 transition hover:bg-[rgba(224,224,224,0.12)] hover:text-[var(--color-text)]"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="rounded-full px-3 py-1.5 transition hover:bg-[rgba(224,224,224,0.12)] hover:text-[var(--color-text)]"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="rounded-full px-3 py-1.5 transition hover:bg-[rgba(224,224,224,0.12)] hover:text-[var(--color-text)]"
              href="#contact"
            >
              Contact
            </a>
            <a
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-3 py-1.5 text-[var(--color-text)] transition hover:bg-[rgba(224,224,224,0.18)]"
              href="/resumeUp.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="section-shell reveal reveal-delay-1 relative mb-10 overflow-hidden px-6 py-10 md:px-10"
      >
        <div className="pointer-events-none absolute -left-24 top-14 h-60 w-60 rounded-full bg-[rgba(224,224,224,0.08)] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-[rgba(176,176,176,0.1)] blur-3xl" />
        <div className="relative grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="section-label mb-4">Robotics Portfolio</span>
            <h1 className="mb-3 text-4xl leading-tight sm:text-5xl lg:text-6xl">Hi, I&apos;m David Alex.</h1>
            <p className="mb-4 text-lg font-semibold text-[var(--color-accent-strong)] sm:text-xl">
              Robotics Engineer | Automation | Simulation
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
              I build reliable robotic systems from simulation to deployment, with a focus on controls,
              perception, and scalable automation workflows.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                className="rounded-xl bg-[#444444] px-5 py-3 text-sm font-semibold text-[#e0e0e0] transition hover:bg-[#555555]"
                href="/resumeUp.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
              <a
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-5 py-3 text-sm font-semibold text-[#e0e0e0] transition hover:bg-[rgba(224,224,224,0.18)]"
                href="#projects"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm md:justify-self-end">
            <div className="relative mx-auto aspect-square w-64 overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] shadow-2xl sm:w-72">
              <Image
                src="/1748491854712.jpg"
                alt="Portrait of David Alex"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell reveal reveal-delay-2 mb-10 px-6 py-9 md:px-8">
        <span className="section-label mb-4">About</span>
        <h2 className="mb-4 text-2xl md:text-3xl">Engineering profile</h2>
        <div className="space-y-4 text-[15px] leading-relaxed text-[var(--color-muted)] md:text-base">
          <p>
            My project work is centered on robotics system integration, where software, controls, and
            mechanical constraints all have to work together under realistic operating conditions. I prioritize
            reliable behavior, clear architecture, and measurable performance over one-off demos.
          </p>
          <p>
            In research and coursework, I have implemented robotic manipulation pipelines, simulated full
            automation cells, and built autonomous workflows that combine sensing, kinematics, and control
            logic. I enjoy solving edge cases and translating complex technical systems into dependable results.
          </p>
          <p>
            Outside engineering, I served as captain of the WPI Valorant Esports Team, where I led team
            preparation and high-pressure decision making. That leadership experience directly strengthened my
            collaboration and communication when shipping technical projects.
          </p>
        </div>
      </section>

      <section id="skills" className="section-shell reveal reveal-delay-2 mb-10 px-6 py-9 md:px-8">
        <span className="section-label mb-4">Skills</span>
        <h2 className="mb-6 text-2xl md:text-3xl">Core capability stack</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[rgba(68,68,68,0.24)] p-5"
            >
              <h3 className="mb-3 text-lg">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-shell reveal reveal-delay-3 mb-10 px-6 py-9 md:px-8">
        <span className="section-label mb-4">Projects</span>
        <h2 className="mb-3 text-2xl md:text-3xl">Selected robotics work</h2>
        <p className="mb-8 max-w-3xl text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
          Each project includes a playable demo and the key engineering focus areas behind the work.
        </p>
        <div className="ml-2 border-l border-[var(--color-border)] pl-6">
          {projectHighlights.map((project, index) => (
            <article
              key={project.title}
              className={`relative rounded-2xl border border-[var(--color-border)] bg-[rgba(68,68,68,0.2)] p-5 ${
                index !== projectHighlights.length - 1 ? "mb-8" : ""
              }`}
            >
              <span
                className="absolute -left-[33px] top-7 h-3.5 w-3.5 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-surface)]"
                aria-hidden="true"
              />
              <h3 className="mb-4 text-lg leading-snug md:text-xl">{project.title}</h3>
              <div className="mb-4 aspect-video overflow-hidden rounded-xl border border-[var(--color-border)] bg-[#121212]">
                <iframe
                  className="h-full w-full"
                  src={toYouTubeEmbedUrl(project.demoUrl)}
                  title={`${project.title} demo`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <p className="mb-4 text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
                {project.description}
              </p>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.11em] text-[var(--color-accent)]">
                Project Focus
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.focus.map((area) => (
                  <span key={area} className="chip">
                    {area}
                  </span>
                ))}
              </div>
              <a
                className="inline-flex rounded-lg bg-[#444444] px-4 py-2 text-sm font-semibold text-[#e0e0e0] transition hover:bg-[#555555]"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open on YouTube
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell reveal reveal-delay-3 px-6 py-9 md:px-8">
        <span className="section-label mb-4">Contact</span>
        <h2 className="mb-3 text-2xl md:text-3xl">Let&apos;s connect</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
          I am actively looking for opportunities to contribute to robotics and automation teams where I can
          build reliable systems, iterate quickly, and collaborate on challenging engineering problems.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="rounded-xl bg-[#444444] px-5 py-3 text-sm font-semibold text-[#e0e0e0] transition hover:bg-[#555555]"
            href="/resumeUp.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
          <a
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-5 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[rgba(224,224,224,0.14)]"
            href="#projects"
          >
            View Project Demos
          </a>
        </div>
      </section>
    </main>
  );
}
