import "./styles/Work.css";

const projects = [
  {
    title: "Amazon Robotics Deployments",
    category: "Robotics & Industrial BIM",
    tools: "Revit, Navisworks, ACC, 6000+ Clashes Resolved, 10+ Retrofit Sites",
    image: "/images/project-robotics-bim.jpg",
  },
  {
    title: "Reality Capture & LiDAR Scanning",
    category: "Digital Twins & As-Built Validation",
    tools: "RTC-360, BLK360, NavVis VLX, Trimble X7, Leica Cyclone 360, 500+ Scans",
    image: "/images/project-lidar-scan.jpg",
  },
  {
    title: "Parametric Revit & Dynamo Automation",
    category: "Computational BIM & Scripting",
    tools: "Parametric Families, Dynamo Scripts, Automated Data Extraction, -25% Modeling Time",
    image: "/images/project-dynamo-revit.jpg",
  },
  {
    title: "Commercial VDC Coordination",
    category: "Joeris General Contractors",
    tools: "15+ Commercial Projects, Multi-Trade Coordination, OpenSpace, BIM Execution Plans",
    image: "/images/project-vdc-coordination.jpg",
  },
  {
    title: "Drone Photogrammetry & 4D Logistics",
    category: "UAV Aerial Surveillance & Mapping",
    tools: "FAA Part 107 Remote Pilot, Pix4D Digital Elevation, Synchro 4D, 300+ Images/Flight",
    image: "/images/project-drone-mapping.jpg",
  },
  {
    title: "AGC Innovation Steering Committee",
    category: "Industry Leadership (2023-24)",
    tools: "Project Delivery Innovation, Technology Adoption, VDC Best Practices Steering",
    image: "/images/project-agc-leadership.jpg",
  },
];

const Work = () => {
  return (
    <div className="work-section section-container" id="work">
      <div className="work-container">
        <h2>
          Featured <span>Work</span>
        </h2>
        <div className="work-grid">
          {projects.map((project, index) => (
            <div className="work-card" key={index}>
              <div className="work-card-image-wrap">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="work-card-num">0{index + 1}</div>
              </div>
              <div className="work-card-body">
                <div>
                  <div className="work-card-meta">
                    <span className="work-card-category">{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                </div>
                <div className="work-card-tools">
                  <h5>Tools & Key Highlights</h5>
                  <p>{project.tools}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
