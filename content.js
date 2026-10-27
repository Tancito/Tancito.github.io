/* =====================================================================
   YOUR PORTFOLIO CONTENT  -  the only file you need to edit.

   HOW TO EDIT
   - Change text between the quotes "like this". Keep the quotes and commas.
   - Text can include simple HTML:  <b>bold</b>  <a href='https://...'>link</a>
     Use single quotes ' inside links, never double quotes ".
   - To add something, copy a whole { ... }, block and paste it below itself.
   - To remove something, delete its whole { ... }, block.
   - Photos: upload to the main folder (next to this file), then use the filename without .jpg
     (example: "race-final" means race-final.jpg).
   - If the page goes blank, a quote or comma is missing: look for the error
     message shown on the page, or paste this file into Claude and ask it to
     find the mistake.
   ===================================================================== */

window.PORTFOLIO = {

  /* ---------- HOME PAGE ---------- */
  site: {
    name: "Sebastian Fernandez Del Castillo",
    fullName: "Sebastian Fernandez Del Castillo",
    eyebrow: "The University of Texas at Austin",
    headline: "I design, build and test mechanical systems.",
    degree: "B.S. Mechanical Engineering, The University of Texas at Austin, December 2027",
    focus: ["Design", "Manufacturing", "Systems", "Process engineering"],
    intro: "Mechanical engineering student focused on mechanical design, manufacturing and hands-on hardware. Recent work includes leading production for ASCEND Texas's hybrid aerial-terrestrial robot, designing its laser-cut avionics enclosure, and developing test hardware layouts and cooling concepts for a reaction-wheel experiment at Texas Spacecraft Laboratory.",
    looking: "Looking for internships and co-ops in automotive, aerospace, robotics and advanced manufacturing.",
    /* To add your photo: upload it (example: headshot.jpg) and set photo: "headshot".
       Leave photo as "" to show the ASCEND photo instead. */
    photo: "headshot",
    photoCaption: "",
    heroImage: "ascend-atv",
    heroCaption: "The ASCEND hybrid aerial-terrestrial robot platform, with the avionics enclosure I designed and fabricated.",
    email: "sebastianfcas@utexas.edu",
    linkedin: "https://www.linkedin.com/in/sebastian-fernandezdc",
    resume: "Sebastian_Fernandez_Resume.pdf",
    projectsIntro: "Case studies of what I built, how I decided, and what I learned.",
    contactIntro: "Open to internships and co-ops in mechanical design, manufacturing, systems and process engineering.",
  },

  /* ---------- EXPERIENCE (newest first) ---------- */
  experience: [
    { dates: "May 2025 - May 2026", title: "ASCEND Texas, Production Lead", link: "project.html?p=ascend-integration", text: "Led production integration and trained a 5-member shop team. Before that, Mechanical Design &amp; Production Engineer (Jan - May 2025)." },
    { dates: "Jan 2025 - present", title: "Texas Spacecraft Laboratory, REACT Hardware Engineer", link: "project.html?p=react", text: "Test hardware layout for reaction-wheel magnetic measurements; now developing cooling concepts." },
    { dates: "May - Jul 2025", title: "ARTS Lab, Student Researcher", link: "project.html?p=arts", text: "MATLAB analysis of fiber-optic shape sensing against motion capture." },
    { dates: "May 2022 - present", title: "Cubes4Good, Founder", link: "https://cubes4good.org", text: "Teaching Rubik's Cube techniques to children in long-term medical treatment." },
  ],

  /* ---------- SKILLS ---------- */
  skills: [
    { group: "Software", items: ["SolidWorks", "Fusion 360", "FEA", "CAM", "MATLAB", "Arduino"] },
    { group: "Fabrication", items: ["3D printing", "Laser cutting", "CNC", "Manual mill", "Manual lathe", "Welding", "Soldering"] },
    { group: "Design practice", items: ["GD&amp;T", "Design for manufacturing", "Prototyping", "Testing"] },
    { group: "Languages", items: ["English", "Spanish (fluent)"] },
  ],

  /* ---------- CURRENTLY WORKING ON (short cards on the home page) ---------- */
  now: [
    { title: "REACT: cooling concepts", text: "Proof-of-concept designs to cool the motor and Helmholtz coil without disturbing the magnetometers.", link: "project.html?p=react" },
    { title: "Senior design: fluid test bench", text: "With a team of five, designing a closed-loop test bench for Longhorn Racing Electric that circulates and heats fluid through a cooling component and logs flow, pressure and temperature. I lead physical prototyping and logistics. Currently in requirements and concept generation.", link: "" },
    { title: "Longhorn Lemons", text: "Hands-on automotive racing team at UT Austin.", link: "" },
  ],

  /* ---------- LEADERSHIP / COMMUNITY ---------- */
  leadership: {
    title: "Cubes4Good",
    text: "In 2022 I founded Cubes4Good to teach children in long-term medical treatment or with disabilities how to solve Rubik's Cubes. I designed the instructions, built the website, and raised donations for free cubes. Workshops in Houston, Dallas and Mexico City have reached 150+ children, and hospital TV broadcasts reached 600+ rooms.",
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
      cardPos: "50% 90%",
      cardImage: "avionics-build",
      cardOrg: "ASCEND Texas",
      cardBlurb: "Laser-cut enclosure for a flight controller, sensors and batteries. Packaging, EMI, airflow, serviceability.",
      cardTags: [
        ["Individual design", "own"],
      ],
      kicker: "ASCEND Texas &middot; Individual design project",
      stats: [],
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
                  "The mechatronics team defined the servo-control hardware and battery needs, and we adjusted the design together as they changed.",
                ],
                teamTitle: "Built with",
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
            {
              images: [
                [
                  "avionics-schematic",
                  "Early avionics wiring block diagram (Feb 2025) used to plan component placement. It kept changing as the hardware evolved.",
                ],
              ],
              contain: true,
            },
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
            { p: "The enclosure was fabricated, assembled and installed on the ASCEND ATV, housing the flight electronics. Decisions came from layout planning, fit checks and repeated rebuilds as the electronics changed." },
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
      cardPos: "",
      cardImage: "actuator-atv",
      cardOrg: "ASCEND Texas",
      cardBlurb: "Actuator mounts, a CNC steering plate and test stands. I led production and coordinated the build.",
      cardTags: [
        ["Production lead", "own"],
      ],
      kicker: "ASCEND Texas &middot; Production Lead, May 2025 - May 2026",
      stats: [
        ["5", "person production team trained"],
        ["12 mo", "as Production Lead"],
      ],
      tags: [
        ["Production leadership", "own"],
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
            { p: "This was a team effort across avionics, actuation, steering and propulsion. The avionics enclosure has its own <a href='project.html?p=avionics-enclosure'>case study</a>." },
            {
              images: [
                [
  "ascend-cage-platform",
  "ASCEND platform with the propulsion cage attached",
],
                ["ascend-atv", "Early configuration (spring 2025)"],
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
              ],
            },
            { p: "The parafoil is steered with linear actuators. They began on a standalone test arrangement, and the goal was to move them onto the ATV for steering tests." },
            { p: "<b>Constraints:</b> actuator stroke and travel, alignment and side loads, mounting stiffness and support locations, clearance to the frame and cage, and interference with propulsion and surrounding structure." },
            { p: "<b>Design progression.</b> Each concept was a different answer to the same question: where the actuator load acts relative to the frame, and how much moment arm and side loading that creates." },
            { list: [
  "<b>Standalone setup:</b> actuators on an aluminum extrusion frame, used for the first parafoil steering tests.",
  "<b>First ATV mount:</b> printed mounts low on the bottom rails, keeping the layout close to a powered-parachute design.",
  "<b>Puzzle-piece mount:</b> a three-piece printed design between the top rails, with a middle piece connecting both ends.",
  "<b>Frame-integrated vertical mount:</b> CNC plates and U-bolts clamping extrusion to the top and bottom rails, for better packaging, stiffness and cage clearance.",
] },
            {
              role: {
                mine: [
                  "Planned the move from standalone setup to ATV integration",
                  "Helped develop the mount CAD",
                  "Led CAD reviews and prototype iterations against the constraints above",
                  "Coordinated prototype development",
                ],
                team: [
                  "Developed with teammates through CAD reviews and 3D-printed prototypes.",
                ],
              },
            },
            {
              images: [
                ["actuator-test", "Standalone actuator test setup"],
                ["actuator-mount1", "Early printed mount at the rail"],
                ["actuator-frame", "Latest: vertical mount with plates and U-bolts"],
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
                ["CAM and machining", "own"],
              ],
            },
            { p: "A steering plate had to go from a drawing to a machined part so the steering system could be assembled and tested." },
            { p: "Working with a shop employee, I prepared the Fusion 360 CAM workflow from the plate DXF. Hole recognition needed troubleshooting, so we organized the job into clear operations: surfacing, drilling, outer profiling, tabs for holding the part, and tool changes." },
            { p: "<b>A sourcing decision.</b> The preferred stock dimensions were unavailable. A teammate and I decided to use thicker stock and surface it down to the final dimensions, trading extra machining for a part we could actually get." },
            { p: "The finished plate moved the steering subsystem into physical assembly and functional testing." },
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
                ["Built with teammates", "own"],
              ],
            },
            { p: "Before the subsystems were on the vehicle, the team built stands to test them separately. One configuration supported propulsion and static testing. Another supported actuator and parafoil experiments with strain gauges, camera hardware, a Raspberry Pi and a Jetson." },
            { p: "The stands needed to be rigid enough for repeatable testing and easy to modify as test needs changed. Testing off the vehicle let the team troubleshoot hardware and collect early data without waiting for full integration." },
            {
              images: [
                ["teststand-b", "Short stand for actuator and parafoil experiments"],
                [
  "propulsion-cage",
  "Taller stand holding the motor and propeller cage for propulsion static tests",
],
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
              ],
            },
            { p: "The parafoil attaches to the ATV top rails through custom hardware. It has to mount securely, stay compact, be practical to fabricate, and work with the actuator steering layout." },
            { p: "The concept evolved from an initial rail-mounted geometry to a more supported interface that wraps around the tube. That improved attachment stability, and simpler internal cutouts made it easier to manufacture. I guided that development and reviewed the design directions." },
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
          id: "status",
          title: "Where ASCEND stands",
          blocks: [
            { p: "By the end of spring 2026 the team had moved from separate subsystem work to a vehicle that drives and carries its own hardware:" },
            { list: [
  "Steering plate and components integrated early in the semester, with refinement continuing into April.",
  "Linear actuators running under Raspberry Pi control and tested with the parafoil setup, strain gauges and a Jetson camera.",
  "Actuator mounting moved from the puzzle-piece design to a frame-integrated vertical mount with plates and U-bolts, refined into late spring.",
  "A cage-to-ATV support structure became the central workstream. The cage was assembled and a wood-and-extrusion prototype used to test rigidity and cage angle before final fabrication.",
  "The ATV was moving by early April, and new braking components were purchased.",
] },
            { p: "The team is now working toward the GoAERO Final Fly-Off, which requires a flying prototype. Qualifying closes in December 2026 and the Fly-Off is scheduled for February 2027 at NASA Ames. My Production Lead term ran through May 2026." },
          ],
        },
        {
          id: "results",
          title: "Results",
          blocks: [
            { p: "Subsystems moved from standalone setups toward ATV integration, and hardware was fabricated to support steering and propulsion testing." },
          ],
        },
      ],
    },
    {
      id: "racecar",
      title: "RC Racecar",
      cardPos: "",
      cardImage: "race-final",
      cardOrg: "ME 338",
      cardBlurb: "Rear-wheel-drive car with a laser-cut chassis and ~10:1 gearbox. 21.05 s over three laps.",
      cardTags: [
        ["Led fabrication &amp; assembly", "own"],
      ],
      kicker: "ME 338 Machine Elements &middot; Team project, Aug - Dec 2025",
      stats: [
        ["21.05 s", "three-lap race time"],
        ["~10:1", "gear reduction"],
        ["< $100", "project budget"],
      ],
      tags: [
        ["Led fabrication &amp; assembly", "own"],
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
                  "Led fabrication and assembly of the complete car",
                  "Integrated the chassis, steering, drivetrain, wheels and tires, electronics packaging and fasteners into one working vehicle",
                  "Took part in testing and race day",
                ],
                team: [
                  "Designed together with my teammates, who developed the CAD and printed parts, the gear-ratio and torque-speed calculations, and the chassis FEA that guided the build.",
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
      cardPos: "",
      cardImage: "react-board-front",
      cardOrg: "Texas Spacecraft Lab",
      cardBlurb: "Test layouts and materials for a reaction-wheel magnetic experiment, plus cooling concepts for the motor and coil.",
      cardTags: [
        ["Ongoing", "wip"],
      ],
      kicker: "Texas Spacecraft Laboratory &middot; Jan 2025 - present",
      stats: [],
      tags: [
        ["Layout complete", "ok"],
        ["Cooling ongoing", "wip"],
      ],
      lede: "Test hardware for studying the magnetic field of a spinning reaction wheel. I work on the Interior Hardware side: test layouts, materials, and now cooling for the motor and Helmholtz coil.",
      spec: [
        [
  "Role",
  "Interior Hardware: test layout, materials, test-board CAD, cooling concepts",
],
        ["Period", "Jan 2025 - present"],
        ["Tools", "SolidWorks"],
        ["Status", "Layouts done; test board in build; cooling at concept stage"],
      ],
      sections: [
        {
          id: "overview",
          title: "Overview",
          blocks: [
            { p: "REACT investigates magnetic-field behavior from a motor-driven flywheel (a reaction wheel) in a controlled test environment. The setup involves the wheel and motor, magnetometers, cameras, electronics, test fixtures and a Helmholtz coil, all arranged so that nothing in the hardware disturbs what the magnetometers measure." },
            {
              images: [
                ["react-board-front", "Test board with the motor, aluminum flywheel and printed mounts"],
                ["react-board-top", "Top view of the same board"],
              ],
            },
            { p: "These photos show part of the setup. The damping hardware, magnetometer supports and Helmholtz coil are not in these shots." },
          ],
        },
        {
          id: "role",
          title: "My role",
          blocks: [
            {
              role: {
                mine: [
                  "Developed SolidWorks test-layout concepts: an optical-table variant and a camera-slider variant",
                  "Researched non-ferromagnetic material options for the test environment",
                  "Put together the SolidWorks assembly of the current test board",
                  "Developing proof-of-concept cooling designs for the motor and Helmholtz coil",
                ],
                team: [
                  "Damping, mounting and support hardware for the setup was built with teammates.",
                ],
              },
            },
          ],
        },
        {
          id: "done",
          title: "Test-field layout",
          blocks: [
            {
              tags: [
                ["Completed", "ok"],
              ],
            },
            { p: "I developed SolidWorks layouts for the test environment. They had to place magnetometers and cameras where they could measure and see what mattered, keep magnetic material away from the sensors, and keep the flywheel visible during testing." },
            { list: [
  "<b>Optical-table variant:</b> a table with a grid of screw holes for the flywheel, magnetometers, battery and motor.",
  "<b>Slider variant:</b> a camera slider that reaches more angles and goes around the table's screw holes. The team's view was that the best design combines the slider for cameras with the optical table for everything else.",
  "<b>Camera positioning:</b> sliders and an extendable pole were explored for more viewing angles; the sliding mechanism has not been built yet.",
] },
            {
              images: [
                ["react-layout", "Optical-table test field (SolidWorks)"],
              ],
            },
            { h3: "Supporting hardware" },
            { p: "The test setup also relies on damping hardware, mounts and holders for the magnetometers, built with teammates. A few of the printed and machined pieces:" },
            {
              images: [
                ["react-tower", "Printed standing structure"],
                ["react-a", "Table-leg damper"],
                ["react-b", "Damper rod"],
              ],
              contain: true,
            },
            {
              images: [
                ["react-c", "Mount stabilizer"],
                ["react-d", "Mount shelf"],
              ],
              contain: true,
            },
          ],
        },
        {
          id: "wip",
          title: "Ongoing: cooling the motor and coil",
          blocks: [
            {
              tags: [
                ["Concept stage, not validated", "wip"],
              ],
            },
            { p: "This fall the team added a Helmholtz coil to the test board. Both the motor and the coil overheat, and when the motor heats up its electrical resistance rises and it loses power. The whole setup will sit inside a plexiglass cage, which raises the temperature further. Any cooling has to use non-ferromagnetic materials and cannot disturb the magnetometers or load the flywheel." },
            { h3: "What I am investigating" },
            { list: [
  "Fan-driven motor cooling",
  "Clamp-on aluminum motor heat sinks",
  "3D-printed ducting and airflow manifolds",
  "Stand-off clips for the coil windings",
  "External blowers feeding air through non-ferromagnetic tubing, so fans stay away from the sensors",
  "Gear- or belt-driven cooling alternatives, weighed against the extra mechanical load on flywheel measurements",
] },
            { p: "<b>Current preferred direction:</b> external electric blowers pushing air through non-ferromagnetic tubing into the enclosure, directed over the motor and copper windings. For the coil, two opposing side-slot manifolds, possibly fed by a Y-split duct." },
            { p: "Open questions the team is working through include how much any airflow disturbs the measurement, whether that effect can be factored out, and how much heat the motor and coil actually produce." },
            { callout: "<b>Where this stands.</b> These are design concepts. None has been manufactured or tested yet, so no temperature results are claimed. I will add results here as they come in.", type: "wip" },
          ],
        },
      ],
    },
    {
      id: "drawing-machine",
      title: "MechaSketch: Cam-Driven Drawing Machine",
      cardPos: "",
      cardImage: "cam-build",
      cardOrg: "ME 350R",
      cardBlurb: "One motor, three cams: coordinated X, Y and pen-lift motion with no electronics.",
      cardTags: [
        ["Team project", ""],
      ],
      kicker: "ME 350R Robot Mechanism Design &middot; Team project, Aug - Dec 2025",
      stats: [
        ["1 motor", "drives all motion"],
        ["3 cams", "X, Y and pen lift"],
      ],
      tags: [
        ["Team project", ""],
      ],
      lede: "A fully mechanical machine that turns one motor input into coordinated X, Y and pen-lift motion, with no sensors and no programming.",
      spec: [
        ["Role", "Cam analysis, CAD, prototyping, assembly and testing"],
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
                  "Took part in concept discussions and early physical prototypes",
                  "Worked through the cam position and velocity analysis, CAD and programming with the team",
                  "Assembled the cam, follower, slider, spring and linkage systems",
                  "Tested and troubleshot the machine",
                ],
                team: [
                  "Designed and built together as a team project.",
                ],
              },
            },
          ],
        },
        {
          id: "iterations",
          title: "Design decisions",
          blocks: [
            { p: "<b>Three prototype stages</b>, each fixing a problem the last one exposed:" },
            { list: [
  "<b>Cardboard, pens and tape:</b> proved the linkage idea, but taped joints flexed and the pen dragged unevenly, so we needed stiffer materials and real joints.",
  "<b>Wood base and compass arm:</b> smoother and stiffer, but loose joints and elastic parts added variation and the range of motion was too small, so we moved to rigid printed parts.",
  "<b>3D-printed links on metal rods:</b> accurate and repeatable. The claw that couples each cam to its slider was the fragile part.",
] },
            { p: "<b>Checked before printing.</b> We confirmed each slider mechanism has one degree of freedom (Gr&uuml;bler's equation) and modeled slider position and velocity in Python." },
            { p: "<b>Fixed during testing:</b>" },
            { list: [
  "<b>Drooping X-slider:</b> it made the machine top-heavy and the pen contact uneven, so we added a sliding brace underneath, which steadied the motion.",
  "<b>Motor:</b> a slow 12 V, 27 rpm gearmotor keeps the drawing easy to watch. When the load grew and it stalled, we moved to a higher-torque motor.",
  "<b>Cam profile trade-off:</b> raw profiles had steep sections that stalled the motor. Smoothing and limiting the slope fixed that, but too much smoothing distorted the drawing, so the profiles balance accuracy against reliability.",
  "<b>Friction and contact:</b> springs keep each follower on its cam, and lubricant went on the sliding parts.",
] },
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
      cardPos: "",
      cardImage: "arts-rig-obstacle-a",
      cardOrg: "ARTS Lab",
      cardBlurb: "Comparing fiber-optic shape reconstruction against motion capture in MATLAB.",
      cardTags: [
        ["Research", ""],
      ],
      kicker: "ARTS Lab &middot; Student researcher, May - Jul 2025",
      stats: [],
      tags: [
        ["Research", "own"],
        ["Data analysis", ""],
      ],
      lede: "Checking how well fiber-optic sensing can reconstruct the shape of a flexible surgical screw as it bends, using motion capture as ground truth, then animating the screw along the reconstructed shapes.",
      spec: [
        ["Role", "Student researcher: data analysis and visualization"],
        ["Period", "May - Jul 2025"],
        ["Tools", "MATLAB"],
        ["Equipment", "LUNA fiber-optic sensing, VICON motion capture"],
      ],
      sections: [
        {
          id: "overview",
          title: "Overview",
          blocks: [
            { p: "The Advanced Robotic Technologies for Surgery (ARTS) Lab at UT Austin develops flexible, dexterous instruments and implants for minimally invasive surgery. This work belongs to a project on flexible pedicle screws for spinal procedures, designed to reach regions of a vertebra that rigid instruments cannot." },
            { p: "To steer a flexible screw safely you need to know its shape while it is inside the body. The approach here is to infer the shape from fiber-optic strain readings. My question: how closely does that reconstructed shape match what motion capture measures?" },
            {
              flow: [
                ["Bend", "A motor-driven ball screw bends the flexible screw in fixed steps"],
                ["Sense", "LUNA fiber-optic sensing measures strain along the screw"],
                ["Reconstruct", "Strain becomes curvature, then a 2D shape"],
                [
  "Reference",
  "VICON tracks reflective markers on the screw for ground truth",
],
                ["Compare", "Align both in MATLAB and compute tip and shape error"],
              ],
            },
            {
              images: [
                ["arts-ofdr-diagram", "Fiber-optic (OFDR) sensing along a bending beam, schematic"],
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
                  "Learned the lab's setup and ran the MATLAB shape-accuracy analysis on the test data",
                  "Calibrated the data so the fiber-optic and motion-capture shapes could be compared directly",
                  "Plotted strain, curvature and error comparisons, and presented the procedure and data",
                ],
                team: [
                  "The lab built the flexible screw, the sensing and the reconstruction methods, and a PhD student guided my analysis.",
                ],
              },
            },
          ],
        },
        {
          id: "tests",
          title: "What was tested",
          blocks: [
            { p: "Each test bends the screw in eleven steps across 25 mm of actuator travel, on both the left and right sides. Conditions covered free bending with no obstacle, and bending around round and sharp obstacles." },
            {
              images: [
                ["arts-rig-obstacle-a", "Test rig: the screw bending around an obstacle"],
                ["arts-rig-obstacle-b", "Another trial in the same rig"],
              ],
              contain: true,
            },
          ],
        },
        {
          id: "process",
          title: "Lining up the two measurements",
          blocks: [
            { p: "The fiber sensor and motion capture measure the same bend in different ways, so before comparing them I had to line them up. For each position I worked in the same order:" },
            { list: [
  "Set the spacing between the motion-capture markers.",
  "Adjust where the sensor data starts and ends, holding the sensor length fixed at 17 cm, until the reconstructed tip landed on the tracked tip.",
  "Place the obstacle model at the recorded position and angle.",
] },
            { p: "Some positions lined up right away, and others did not. When the same inputs left the tip error high at a position, I compared my numbers with a teammate's and with the lab's tutorial to find what was different." },
          ],
        },
        {
          id: "results",
          title: "Results",
          blocks: [
            { p: "Reconstructed shapes tracked the motion-capture reference closely at most positions in the obstacle tests, with larger errors in free bending. I also plotted how the strain signal changes with motor displacement for free, round and sharp bending." },
            {
              images: [
                ["arts-strain-stage1", "Strain derivatives vs. motor displacement, left side"],
                ["arts-strain-stage2", "Strain derivatives vs. motor displacement, left side, second obstacle placement"],
              ],
            },
          ],
        },
      ],
    },
  ],

  /* ---------- SMALLER BUILDS (shown on the "More builds" page) ---------- */
  more: [
    { image: "spinner-part", title: "Fidget Spinner", tags: [["Individual design", "own"], ["SolidWorks, FEA", ""]], text: "I modeled the spinner in SolidWorks using circular patterns, ran FEA on stress distribution and factor of safety, and made prototypes by 3D printing and laser cutting. The challenge was fit between a press-fit bearing, weighted inserts and the manufactured body, where small dimensional errors caused misfits. It taught me to validate CAD assumptions against physical parts and to account for tolerancing." },
    { image: "stand-a", title: "Sheet Metal Phone Stand", tags: [["Fabrication", "own"], ["Manufacturing processes", ""]], text: "A two-piece stand made from flat stock using a shear, notching, a bead roller, a press brake and resistance spot welding. Manual operations accumulate error, so cutting and bend accuracy decided how the pieces fit." },
    { image: "slider-part", title: "Slider-Crank Mechanism", tags: [["Fabrication and assembly", "own"], ["Team design", ""]], text: "A hand-actuated slider-crank that lifts a 1 lb load, built from laser-cut and 3D-printed parts on dual guide rods. I helped laser-cut and assemble it, then adjust alignment and pivot clearances to reduce friction. The mechanism design and kinematic analysis were a team effort." },
    { image: "audio-board", title: "Analog Audio Frequency Visualizer", tags: [["Team project", ""]], text: "An analog circuit (input buffer, high- and low-pass filters, amplifiers, peak detectors, comparators) that lights a green LED near 150 Hz and a red LED near 2830 Hz. Our team built and tuned it together." },
  ],
};
