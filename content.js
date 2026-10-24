/* =====================================================================
   YOUR PORTFOLIO CONTENT  -  the only file you need to edit.

   HOW TO EDIT
   - Change text between the quotes "like this". Keep the quotes and commas.
   - Text can include simple HTML:  <b>bold</b>  <a href='https://...'>link</a>
     Use single quotes ' inside links, never double quotes ".
   - To add something, copy a whole { ... }, block and paste it below itself.
   - To remove something, delete its whole { ... }, block.
   - Photos: upload to the img folder, then use the filename without .jpg
     (example: "race-final" means img/race-final.jpg).
   - If the page goes blank, a quote or comma is missing: look for the error
     message shown on the page, or paste this file into Claude and ask it to
     find the mistake.
   ===================================================================== */

window.PORTFOLIO = {

  /* ---------- HOME PAGE ---------- */
  site: {
    name: "Sebastian Fernandez",
    fullName: "Sebastian Fernandez Del Castillo",
    eyebrow: "Mechanical Engineering &middot; UT Austin &middot; Dec 2027",
    headline: "I design, build and test mechanical systems.",
    lede: "Mechanical engineering student focused on mechanical design, manufacturing, systems and process engineering. Each project page says plainly what I did and what the team did.",
    heroImage: "ascend-atv",
    heroCaption: "The ASCEND hybrid aerial-terrestrial robot platform, with the avionics enclosure I designed and fabricated.",
    email: "sebastianfcas@utexas.edu",
    linkedin: "https://www.linkedin.com/in/sebastian-fernandezdc",
    resume: "assets/Sebastian_Fernandez_Resume.pdf",
    projectsIntro: "Each case study covers constraints, decisions, what was built, and what I contributed.",
    contactIntro: "Open to internships and co-ops in mechanical design, manufacturing, systems and process engineering.",
  },

  /* ---------- EXPERIENCE (newest first) ---------- */
  experience: [
    { dates: "May 2025 - May 2026", title: "ASCEND Texas, Production Lead", link: "project.html?p=ascend-integration", text: "Led production integration and trained a 5-member shop team. Before that, Mechanical Design &amp; Production Engineer (Jan - May 2025)." },
    { dates: "Jan 2025 - present", title: "Texas Spacecraft Laboratory, REACT Hardware Engineer", link: "project.html?p=react", text: "" },
    { dates: "May - Jul 2025", title: "ARTS Lab, Student Researcher", link: "project.html?p=arts", text: "" },
    { dates: "May 2022 - present", title: "Cubes4Good, Founder", link: "https://cubes4good.org", text: "Teaching Rubik's Cube techniques to children in long-term medical treatment." },
  ],

  /* ---------- SKILLS ---------- */
  skills: [
    { group: "Design and analysis", items: "SolidWorks, Fusion 360, FEA, GD&amp;T, MATLAB, Arduino" },
    { group: "Manufacturing", items: "CAM and CNC, manual mill, manual lathe, welding, laser cutting, 3D printing, soldering" },
    { group: "Languages", items: "English, Spanish (fluent)" },
    { group: "Currently", items: "Member of Longhorn Lemons, a hands-on UT Austin automotive racing team" },
  ],

  /* ---------- LEADERSHIP / COMMUNITY ---------- */
  leadership: {
    title: "Cubes4Good",
    text: "In 2022 I founded Cubes4Good to teach children facing long-term medical treatment or disabilities how to solve Rubik's Cubes. I designed the instructions, built the website, raised donations to provide free cubes, and organized workshops in Houston, Dallas and Mexico City with MD Anderson, Texas Children's Hospital, Children's Health, Ronald McDonald House Charities and Casa de la Amistad. It has reached 150+ children, and hospital TV broadcasts reached 600+ rooms.",
    linkLabel: "cubes4good.org",
    link: "https://cubes4good.org",
  },

  /* ---------- FEATURED PROJECTS (these get their own page) ----------
     Order here = order on the home page and the next/previous links.
     Block types inside "blocks":
       { p: "paragraph" }               { h3: "small heading" }
       { list: ["a", "b"] }              { tags: [["Label", "own"]] }  (own, ok, wip, or "")
       { images: [["file", "caption"]] } { callout: "note", type: "wip" }
       { role: { mine: [..], team: [..] } }
       { flow: [["Step", "description"]] }
       { table: [["Head1","Head2"],["a","b"]] }                         */
  projects: [
    {
      id: "avionics-enclosure",
      title: "Avionics Enclosure",
      cardImage: "avionics-build",
      cardOrg: "ASCEND Texas",
      cardBlurb: "Laser-cut enclosure for a flight controller, sensors and batteries. Packaging, EMI, airflow, serviceability.",
      cardTags: [
        ["Individual design", "own"],
      ],
      kicker: "ASCEND Texas &middot; Individual design project",
      tags: [
        ["Individual design", "own"],
        ["Completed", "ok"],
        ["Design for manufacturing", ""],
      ],
      lede: "A laser-cut enclosure that packages the flight electronics of a hybrid aerial-terrestrial robot, designed so it can be serviced and re-wired as the electronics changed.",
      spec: [
        ["Role", "Designer and fabricator of the enclosure"],
        ["Period", "Jan - May 2025"],
        ["Tools", "SolidWorks, laser cutting"],
        ["Status", "Built and mounted on the ATV"],
      ],
      sections: [
        {
          id: "overview",
          title: "Overview",
          blocks: [
            { p: "ASCEND Texas is building a hybrid aerial-terrestrial vehicle for the GoAERO and XPRIZE Wildfire Challenge: an ATV platform with a parafoil, propulsion, steering actuation and flight electronics. The flight electronics (a Pixhawk flight controller, GPS, telemetry, an RC receiver, an airspeed sensor, batteries and supporting hardware) needed a protected home on the vehicle." },
            { p: "I designed and fabricated that enclosure. Not every component lives inside it; some need external connections, so the enclosure is also a wiring hub." },
            {
              images: [
                ["avionics-cad", "Enclosure model in SolidWorks"],
                ["avionics-build", "Enclosure and electronics during integration on the ATV"],
              ],
            },
          ],
        },
        {
          id: "role",
          title: "My role",
          blocks: [
            {
              role: {
                mine: [
                  "Developed the component layout plan",
                  "Modeled the full enclosure in SolidWorks",
                  "Refined panels, cutouts and fit through several iterations",
                  "Fabricated the enclosure",
                  "Coordinated with the mechatronics team as servo-control hardware and battery requirements changed",
                ],
                team: [
                  "The mechatronics team defined the servo-control hardware and battery needs the enclosure had to accommodate",
                ],
                teamTitle: "Who else was involved",
              },
            },
          ],
        },
        {
          id: "constraints",
          title: "Constraints",
          blocks: [
            { list: [
  "<b>Compact packaging</b> on an ATV with limited free space",
  "<b>Wiring access:</b> connections to external sensors, with room to re-route cables",
  "<b>Airflow:</b> electronics and batteries need ventilation",
  "<b>EMI:</b> component placement planned around electromagnetic interference",
  "<b>Serviceability:</b> access for maintenance and modifications",
  "<b>Manufacturing:</b> laser-cut flat parts that assemble with tabs and slots",
] },
          ],
        },
        {
          id: "approach",
          title: "Approach and decisions",
          blocks: [
            { p: "<b>Layout first, box second.</b> I planned where each component would sit before drawing panels, then built the enclosure around that layout. Cable routing and component-specific placement drove the cutouts, not the other way around." },
            { p: "<b>Laser-cut panels with tab-and-slot joints.</b> Flat panels assemble quickly and a revised panel can be recut easily. That mattered because the electronics configuration kept changing." },
            { p: "<b>Ventilation and removable access built into the panels</b> so the enclosure could be opened for maintenance and modification." },
            { p: "<b>Battery compartments and servo-switch hardware</b> were accommodated, with dedicated batteries for avionics and for actuation." },
          ],
        },
        {
          id: "iterations",
          title: "Iterations",
          blocks: [
            { p: "The electronics were not frozen while I designed. As servo-control hardware and battery requirements changed, I worked with the mechatronics team and updated the panel arrangement and cutouts. Each revision refined panel fit, ventilation, cable routing and removable access to improve manufacturability and assembly." },
          ],
        },
        {
          id: "results",
          title: "Results",
          blocks: [
            { p: "The enclosure was fabricated, assembled and installed on the ASCEND ATV, housing the flight electronics." },
            { callout: "<b>Scope note.</b> Design decisions were based on layout planning, fit checks and iteration. I did not run formal FEA or electromagnetic simulation on the enclosure." },
          ],
        },
        {
          id: "takeaways",
          title: "Takeaways",
          blocks: [
            { list: [
  "Package around the components and their interfaces first; the housing follows.",
  "Design for change: when requirements keep moving, flat laser-cut parts and good access beat a perfect first design.",
  "Manufacturing method shapes geometry from the first sketch.",
] },
          ],
        },
      ],
    },
    {
      id: "ascend-integration",
      title: "ASCEND: Integration &amp; Manufacturing",
      cardImage: "actuator-atv",
      cardOrg: "ASCEND Texas",
      cardBlurb: "Actuator mounts, a CNC steering plate and test stands. I led production and coordinated the build.",
      cardTags: [
        ["Production lead", "own"],
      ],
      kicker: "ASCEND Texas &middot; Production Lead, May 2025 - May 2026",
      tags: [
        ["Production leadership", "own"],
        ["Team project", ""],
      ],
      lede: "How a hybrid aerial-terrestrial robot moved from separate subsystem tests to hardware mounted on the ATV, and my part in getting it built.",
      spec: [
        [
  "Role",
  "Production Lead: integration planning, design reviews, CAM/CNC, training",
],
        ["Period", "May 2025 - May 2026"],
        ["Tools", "Fusion 360 CAM, CNC, manual mill and lathe, welding, 3D printing"],
        ["Status", "Hardware built for subsystem and steering tests"],
      ],
      sections: [
        {
          id: "overview",
          title: "Overview",
          blocks: [
            { p: "ASCEND's vehicle combines an ATV platform, a parafoil, a propulsion system, steering actuation and avionics. Production meant making those subsystems fit together on one vehicle, and making sure parts actually got fabricated, by people who could do it safely." },
            { p: "This was a team effort, so each section says what was mine and what was not. The avionics enclosure, which I designed myself, has its own <a href='project.html?p=avionics-enclosure'>case study</a>." },
            {
              images: [
                ["ascend-atv", "The ASCEND ATV platform"],
                ["propulsion-cage", "Propulsion cage and propeller"],
              ],
            },
          ],
        },
        {
          id: "lead",
          title: "Production Lead",
          blocks: [
            { p: "As Production Lead I coordinated fabrication across mechanical and electrical interfaces: reviewing CAD as it progressed, tracking fabrication readiness, working with other subteams on interface changes, and organizing shop-related work." },
            { p: "I also trained a five-member production team on shop safety, basic manual mill and lathe practice, and welding preparation and practice, so more people could contribute to fabrication." },
          ],
        },
        {
          id: "actuator",
          title: "Linear actuator mounting",
          blocks: [
            {
              tags: [
                ["Guided and coordinated", "own"],
                ["Team design", ""],
              ],
            },
            { p: "The parafoil is steered with linear actuators. They began on a standalone test arrangement, and the goal was to move them onto the ATV for steering tests." },
            { p: "<b>Constraints:</b> actuator stroke and travel, alignment and side loads, mounting stiffness and support locations, clearance to the frame and cage, and interference with propulsion and surrounding structure." },
            { p: "<b>Decisions:</b> the team explored several mounting approaches through CAD reviews and 3D-printed prototypes, and moved toward U-bolts and machined plates for better packaging, stiffness and cage clearance." },
            {
              role: {
                mine: [
                  "Planned the move from standalone setup to ATV integration",
                  "Led CAD reviews and prototype iterations against the constraints above",
                  "Coordinated prototype development",
                ],
                team: ["Team members developed the detailed mount CAD, some under my guidance"],
              },
            },
            {
              images: [
                ["actuator-frame", "Actuator on the ATV frame"],
                ["actuator-mount1", "Early printed mount at the rail"],
                ["actuator-atv", "Vehicle layout for integration"],
              ],
            },
          ],
        },
        {
          id: "plate",
          title: "Steering plate: CAD to CNC",
          blocks: [
            {
              tags: [
                ["CAM and machining prep", "own"],
                ["Plate designed by a teammate", ""],
              ],
            },
            { p: "A steering plate had to go from a drawing to a machined part so the steering system could be assembled and tested." },
            { p: "Working with a shop employee, I prepared the Fusion 360 CAM workflow from the plate DXF. Hole recognition needed troubleshooting, so we organized the job into clear operations: surfacing, drilling, outer profiling, tabs for holding the part, and tool changes." },
            { p: "<b>A sourcing decision.</b> The preferred stock dimensions were unavailable. A teammate and I decided to use thicker stock and surface it down to the final dimensions, trading extra machining for a part we could actually get." },
            { p: "The finished plate moved the steering subsystem into physical assembly and functional testing. Another team member designed the plate geometry." },
            {
              images: [
                ["plate-cad", "Plate model"],
                ["plate-drawing", "Drawing"],
                ["plate-part", "Machined plate on the vehicle"],
              ],
            },
          ],
        },
        {
          id: "stands",
          title: "Test stands",
          blocks: [
            {
              tags: [
                ["Worked with teammates", "own"],
                ["Team design", ""],
              ],
            },
            { p: "Before the subsystems were on the vehicle, the team built stands to test them separately. One configuration supported propulsion and static testing. Another supported actuator and parafoil experiments with strain gauges, camera hardware, a Raspberry Pi and a Jetson." },
            { p: "The stands needed to be rigid enough for repeatable testing and easy to modify as test needs changed. Testing off the vehicle let the team troubleshoot hardware and collect early data without waiting for full integration." },
            {
              images: [
                ["teststand-a", "Actuator and parafoil test frame"],
                ["teststand-b", "Test stand structure"],
              ],
            },
          ],
        },
        {
          id: "parafoil",
          title: "Parafoil connection hardware",
          blocks: [
            {
              tags: [
                ["Guided development", "own"],
                ["Team design", ""],
              ],
            },
            { p: "The parafoil attaches to the ATV top rails through custom hardware. It has to mount securely, stay compact, be practical to fabricate, and work with the actuator steering layout." },
            { p: "The concept evolved from an initial rail-mounted geometry to a more supported interface that wraps around the tube. That improved attachment stability, and simpler internal cutouts made it easier to manufacture. I guided that development and reviewed design directions; I did not design every part." },
            {
              images: [
                ["parafoil-a", "Supported top-rail interface"],
                ["parafoil-b", "Wrap-around geometry"],
              ],
              contain: true,
            },
          ],
        },
        {
          id: "motor",
          title: "Motor-to-cage mount",
          blocks: [
            {
              tags: [
                ["Guided development", "own"],
                ["Team project", ""],
              ],
            },
            { p: "This mount connects the propulsion motor and propeller to the propulsion cage. It has to hold motor alignment, keep propeller clearance, and carry load into the cage with enough stiffness." },
            { p: "The design started as a 3D-printed mockup for the motor and test stand, then moved to a stronger metal plate for cage attachment, giving a cleaner load path between motor, support rails and cage. I guided development and the production and integration effort." },
            {
              images: [
                ["motor-cad", "Mount plate model"],
                ["motor-print", "Early printed mockup on the test stand"],
                ["propulsion-cage", "Propulsion cage with propeller"],
              ],
            },
          ],
        },
        {
          id: "results",
          title: "Results and scope",
          blocks: [
            { p: "Subsystems moved from standalone setups toward ATV integration, and hardware was fabricated to support steering and propulsion testing." },
            { callout: "<b>Scope note.</b> My direct work here is production leadership, integration planning, design reviews, CAM and machining preparation, training, and collaborative test-stand work. Detailed CAD for the actuator mounts, steering plate, parafoil hardware and motor mount was done by teammates." },
          ],
        },
      ],
    },
    {
      id: "racecar",
      title: "RC Racecar",
      cardImage: "race-final",
      cardOrg: "Machine Elements",
      cardBlurb: "Rear-wheel-drive car with a laser-cut chassis and ~10:1 gearbox. 21.05 s over three laps.",
      cardTags: [
        ["Led fabrication &amp; assembly", "own"],
      ],
      kicker: "Machine Elements &middot; Team project, Aug - Dec 2025",
      tags: [
        ["Led fabrication &amp; assembly", "own"],
        ["Team design", ""],
      ],
      lede: "A rear-wheel-drive RC car designed to finish a three-lap race quickly on a $100 budget. I led fabrication and assembly.",
      spec: [
        ["Role", "Led fabrication and assembly"],
        ["Period", "Aug - Dec 2025"],
        ["Tools", "Laser cutting, 3D printing"],
        ["Result", "3 laps in 21.05 s"],
      ],
      sections: [
        {
          id: "overview",
          title: "Overview",
          blocks: [
            { p: "Our team designed and built a rear-wheel-drive RC racecar for a timed three-lap race, under a $100 budget and with the expectation that it would survive impacts. The tradeoffs were speed, traction, chassis weight, durability and ease of assembly." },
            {
              images: [
                ["race-render", "Team CAD layout"],
                ["race-final", "Finished car"],
              ],
            },
          ],
        },
        {
          id: "role",
          title: "My role",
          blocks: [
            {
              role: {
                mine: [
                  "Led fabrication and assembly of the physical car",
                  "Brought together chassis, steering, drivetrain, wheels and tires, electronics and fasteners",
                  "Contributed to testing",
                ],
                team: [
                  "Our team designed the car, including CAD and printed parts",
                  "Team calculations covered gear ratio and torque-speed tradeoffs",
                  "Team chassis FEA checked durability before fabrication",
                ],
              },
            },
          ],
        },
        {
          id: "architecture",
          title: "Vehicle architecture",
          blocks: [
            {
              table: [
                ["System", "Design"],
                ["Chassis", "Laser-cut Baltic birch"],
                [
  "Drive",
  "Rear-wheel drive; electric motor through a ~10:1 reduction gear train",
],
                ["Steering", "3D-printed steering components"],
                ["Wheels", "PLA hubs with TPU tires"],
              ],
            },
          ],
        },
        {
          id: "tradeoffs",
          title: "Design tradeoffs",
          blocks: [
            { p: "<b>Gear ratio.</b> A ~10:1 reduction trades rotational speed for wheel torque. The team used gear-ratio and torque-speed calculations to guide the choice." },
            { p: "<b>Chassis.</b> Laser-cut Baltic birch is light, inexpensive and quick to manufacture. The team used chassis FEA as a durability check before fabrication." },
            { p: "<b>Printed and cut parts.</b> Steering components and hubs were 3D printed; the chassis was laser cut." },
          ],
        },
        {
          id: "build",
          title: "Fabrication and assembly",
          blocks: [
            { p: "A design becomes a running car through fit, fasteners, wiring and assembly order. I led that work, bringing the chassis, steering, drivetrain, wheels, electronics and fasteners together into one working vehicle." },
            {
              images: [
                ["race-build", "Assembly in progress"],
                ["race-final", "Completed car"],
              ],
            },
          ],
        },
        {
          id: "results",
          title: "Results and limits",
          blocks: [
            { p: "The car completed the three-lap race in <b>21.05 seconds</b>. Two things limited it: tire traction and the reliability of the shaft collars." },
            { p: "Both are problems that show up on a physical car, and they point to where a second iteration would focus." },
          ],
        },
        {
          id: "takeaways",
          title: "Takeaways",
          blocks: [
            { list: [
  "A gear ratio is a tradeoff, and traction can cap the benefit of more torque.",
  "Small hardware like shaft collars can decide reliability.",
  "Fabrication-minded design makes assembly faster and easier.",
] },
          ],
        },
      ],
    },
    {
      id: "react",
      title: "REACT: Reaction-Wheel Magnetic Test Setup",
      cardImage: "react-layout",
      cardOrg: "Texas Spacecraft Lab",
      cardBlurb: "Test layout for reaction-wheel magnetic measurements, plus cooling concepts in progress.",
      cardTags: [
        ["Ongoing", "wip"],
      ],
      kicker: "Texas Spacecraft Laboratory &middot; Jan 2025 - present",
      tags: [
        ["Layout complete", "ok"],
        ["Cooling ongoing", "wip"],
      ],
      lede: "Test hardware for studying the magnetic field of a spinning reaction wheel. Completed layout work is kept separate from cooling concepts that are still under investigation.",
      spec: [
        ["Role", "Hardware engineer: test layout, now cooling concepts"],
        ["Period", "Jan 2025 - present"],
        ["Tools", "SolidWorks"],
        ["Status", "Layout done; cooling is concept stage"],
      ],
      sections: [
        {
          id: "overview",
          title: "Overview",
          blocks: [
            { p: "REACT investigates magnetic-field behavior from a motor-driven flywheel (a reaction wheel) in a controlled test environment. The setup involves the wheel and motor, magnetometers, cameras, electronics, test fixtures and a Helmholtz coil." },
            {
              images: [
                ["react-layout", "Test board layout concept (SolidWorks)"],
                ["react-c", "Support hardware used to visualize the broader test setup"],
              ],
              contain: true,
            },
          ],
        },
        {
          id: "done",
          title: "Completed: test layout",
          blocks: [
            {
              tags: [
                ["Completed", "ok"],
              ],
            },
            { p: "I developed SolidWorks layouts for the test environment. The layout had to place magnetometers and cameras where they could measure and see what mattered, avoid magnetic material near the sensors, and keep the flywheel visible during testing." },
            { list: [
  "<b>Magnetometer placement:</b> sensor positions chosen with interference in mind.",
  "<b>Non-ferromagnetic materials:</b> hardware near the sensors must not distort the field being measured.",
  "<b>Camera positioning:</b> optical-table and slider-based camera mounting concepts to improve visibility and positioning.",
] },
            { callout: "I did not CAD every structural support, damping component or magnetometer mount shown in the broader setup, and some camera mounting concepts were not fully implemented." },
          ],
        },
        {
          id: "wip",
          title: "Ongoing: cooling concepts",
          blocks: [
            {
              tags: [
                ["Concept stage, not validated", "wip"],
              ],
            },
            { p: "The motor and the Helmholtz coil overheat. The whole setup is intended to sit inside a plexiglass enclosure. Any cooling has to avoid disturbing the magnetometers or loading the flywheel." },
            { h3: "Concepts under investigation" },
            { list: [
  "Fan-driven motor cooling",
  "Clamp-on aluminum motor heat sinks",
  "3D-printed ducting and airflow manifolds",
  "Stand-off clips for the coil windings",
  "External blowers delivering air through non-ferromagnetic tubing, to keep cooling hardware away from the sensors",
  "Gear- or belt-driven cooling alternatives, weighed against the added mechanical load on flywheel measurements",
] },
            { p: "<b>Current preferred direction:</b> external electric blowers pushing air through non-ferromagnetic tubing into the enclosure, directed over the motor and copper windings. For the coil, two opposing side-slot manifolds, potentially fed by a Y-split duct." },
            { callout: "None of these concepts has been manufactured or tested, and none has been shown to reduce temperature. I will update this page when there are results.", type: "wip" },
          ],
        },
        {
          id: "why",
          title: "Why it is interesting",
          blocks: [
            { p: "Measurement quality depends on mechanical details here: what material sits next to a sensor, how airflow moves, how repeatable the setup is. The cooling work is a thermal problem with an unusual constraint: the solution cannot interfere with what is being measured." },
          ],
        },
      ],
    },
    {
      id: "drawing-machine",
      title: "Cam-Driven Drawing Machine",
      cardImage: "cam-build",
      cardOrg: "Mechanism design",
      cardBlurb: "One motor, three cams: coordinated X, Y and pen-lift motion with no electronics.",
      cardTags: [
        ["Team project", ""],
      ],
      kicker: "Robotic Mechanism Design &middot; Team project, Aug - Dec 2025",
      tags: [
        ["Team project", ""],
      ],
      lede: "A fully mechanical machine that turns one motor input into coordinated X, Y and pen-lift motion, with no sensors and no programming.",
      spec: [
        ["Role", "Concept discussions, prototyping, assembly and testing"],
        ["Period", "Aug - Dec 2025"],
        ["Tools", "3D printing, hand tools"],
        ["Result", "Working mechanical drawing system"],
      ],
      sections: [
        {
          id: "overview",
          title: "Overview",
          blocks: [
            { p: "The goal was to convert the rotation of a single motor into a drawing. Three cams, one each for X motion, Y motion and pen lift, drive followers, sliders, springs and linkages so the pen follows a path and lifts at the right times." },
            {
              images: [
                ["cam-cad", "Team CAD model"],
                ["cam-build", "Machine under test"],
              ],
            },
          ],
        },
        {
          id: "how",
          title: "How it works",
          blocks: [
            {
              flow: [
                ["Input", "One motor rotation"],
                ["Cams", "Separate cam profiles for X, Y and pen lift"],
                ["Followers", "Follower contact, with springs"],
                ["Sliders and linkages", "Motion carried to the pen"],
                ["Output", "Pen moves in X and Y and lifts between strokes"],
              ],
            },
            { p: "Every motion has to stay synchronized with the others. The drawing is encoded in the cam profiles, so small errors in timing, friction or alignment show up as distortion in the output." },
          ],
        },
        {
          id: "role",
          title: "My role",
          blocks: [
            {
              role: {
                mine: [
                  "Took part in concept discussions",
                  "Contributed to early physical prototypes",
                  "Assembled the cam, follower, slider, spring and linkage systems",
                  "Tested and troubleshot the machine",
                ],
                team: [
                  "The team did the detailed position and velocity analysis behind the cam profiles",
                  "Other team members did most of the CAD and programming",
                ],
              },
            },
          ],
        },
        {
          id: "iterations",
          title: "From prototype to machine",
          blocks: [
            { p: "The mechanism progressed from low-fidelity prototypes to a 3D-printed assembly. Testing showed how sensitive cam-driven systems are to synchronization, friction and alignment." },
            {
              images: [
                ["cam-output", "Drawing produced by the machine"],
              ],
            },
          ],
        },
        {
          id: "takeaways",
          title: "Takeaways",
          blocks: [
            { list: [
  "Accuracy is limited by the weakest interface: friction and alignment, not only cam geometry.",
  "Cheap early prototypes surface assembly problems before the final build.",
] },
          ],
        },
      ],
    },
    {
      id: "arts",
      title: "Surgical Screw Shape Sensing",
      cardImage: "",
      cardOrg: "ARTS Lab",
      cardBlurb: "Comparing fiber-optic shape reconstruction against motion capture in MATLAB.",
      cardTags: [
        ["Research", ""],
      ],
      kicker: "ARTS Lab &middot; Student researcher, May - Jul 2025",
      tags: [
        ["Research", "own"],
        ["Data analysis", ""],
      ],
      lede: "Analyzing how well fiber-optic sensing can reconstruct the shape of a flexible surgical screw as it bends, using motion capture as the reference.",
      spec: [
        ["Role", "Student researcher: data analysis"],
        ["Period", "May - Jul 2025"],
        ["Tools", "MATLAB"],
        ["Equipment", "LUNA fiber-optic sensing, VICON motion capture"],
      ],
      sections: [
        {
          id: "overview",
          title: "Overview",
          blocks: [
            { p: "The lab studies a flexible surgical screw whose shape can be inferred from fiber-optic strain measurements. The question I worked on: how closely does the reconstructed shape match the reference from motion capture?" },
            {
              flow: [
                ["Bend", "A flexible screw is bent in the test setup"],
                ["Sense", "LUNA fiber-optic sensing measures strain along the screw"],
                ["Reconstruct", "Strain is used to reconstruct the shape"],
                ["Reference", "VICON tracks reflective markers for reference data"],
                ["Compare", "Align data in MATLAB and evaluate error"],
              ],
            },
          ],
        },
        {
          id: "role",
          title: "My role",
          blocks: [
            {
              role: {
                mine: [
                  "Analyzed experimental bending data in MATLAB",
                  "Adjusted inputs such as origin alignment, tip position and marker intervals so LUNA reconstructions lined up with VICON data",
                  "Compared accuracy using plots of strain, curvature, and tip and shape error",
                  "Covered free, sharp and round bending cases",
                ],
                team: [
                  "The lab developed the fiber-optic sensing technology and the shape-reconstruction methods",
                ],
              },
            },
          ],
        },
        {
          id: "method",
          title: "Analysis approach",
          blocks: [
            { p: "Comparing two measurement systems is largely an alignment problem. The reconstruction and the VICON markers need to share an origin and be compared at matching positions before error means anything." },
            { p: "I tuned those inputs in MATLAB, then examined strain, curvature, and tip and shape error for each bending condition." },
          ],
        },
        {
          id: "results",
          title: "Results",
          blocks: [
            { p: "Some calibration results achieved submillimeter tip-position accuracy against the VICON reference." },
            { callout: "My contribution was MATLAB data processing, parameter adjustment, visualization and comparison. I did not develop the fiber-optic sensing technology or the shape-reconstruction algorithms." },
          ],
        },
        {
          id: "takeaways",
          title: "Takeaways",
          blocks: [
            { list: [
  "Evaluating a sensor against a reference measurement, including the alignment work that comes first.",
  "Reading strain, curvature and error plots to judge a result.",
] },
          ],
        },
      ],
    },
  ],

  /* ---------- SMALLER BUILDS (shown on the "More builds" page) ---------- */
  more: [
    { image: "spinner-part", title: "Fidget Spinner", tags: [["Individual design", "own"], ["SolidWorks, FEA", ""]], text: "I modeled the spinner in SolidWorks using circular patterns, ran FEA on stress distribution and factor of safety, and made prototypes by 3D printing and laser cutting. The challenge was fit between a press-fit bearing, weighted inserts and the manufactured body, where small dimensional errors caused misfits. It taught me to validate CAD assumptions against physical parts and to account for tolerancing." },
    { image: "stand-a", title: "Sheet Metal Phone Stand", tags: [["Fabrication", "own"], ["Manufacturing processes", ""]], text: "A two-piece stand made from flat stock using a shear, notching, a bead roller, a press brake and resistance spot welding. Manual operations accumulate error, so cutting and bend accuracy decided how the pieces fit." },
    { image: "slider-part", title: "Slider-Crank Mechanism", tags: [["Fabrication and assembly", "own"], ["Team design", ""]], text: "A hand-actuated slider-crank that lifts a 1 lb load, built from laser-cut and 3D-printed parts on dual guide rods. I helped laser-cut and assemble it, then adjust alignment and pivot clearances to reduce friction. The mechanism design and kinematic analysis were not mine." },
    { image: "audio-board", title: "Analog Audio Frequency Visualizer", tags: [["Team project", ""]], text: "An analog circuit (input buffer, high- and low-pass filters, amplifiers, peak detectors, comparators) that lights a green LED near 150 Hz and a red LED near 2830 Hz. This was a team project and I was not the primary person responsible for building the full circuit." },
  ],
};
