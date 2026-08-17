import "./styles/Certifications.css";
import { RiAwardLine } from "react-icons/ri";

const certs = [
  {
    title: "CM-BIM",
    issuer: "Certificate of Management - Building Information Modeling",
    category: "BIM Management",
  },
  {
    title: "FAA Part 107 Remote Pilot",
    issuer: "Commercial Drone Operations & Aerial Photogrammetry",
    category: "UAV Operations",
  },
  {
    title: "Autodesk Revit Certified",
    issuer: "Parametric BIM Modeling & Architectural Design",
    category: "BIM Software",
  },
  {
    title: "Autodesk AutoCAD Certified",
    issuer: "2D/3D Drafting, Detailing & Technical Standards",
    category: "CAD Systems",
  },
  {
    title: "Procore Certified",
    issuer: "Construction Financials, Field Management & Quality Control",
    category: "Project Tech",
  },
  {
    title: "CMIT",
    issuer: "Construction Manager in Training (CMAA)",
    category: "Construction Mgmt",
  },
  {
    title: "OSHA 10",
    issuer: "Construction Safety & Health Standards",
    category: "Safety & Compliance",
  },
  {
    title: "Diploma in Architectural Design",
    issuer: "Building Systems & Spatial Architecture",
    category: "Design",
  },
];

const Certifications = () => {
  return (
    <div className="certifications-section section-container" id="certifications">
      <div className="certifications-container">
        <h2>
          Certifications <span>&</span>
          <br /> Leadership
        </h2>

        <div className="cert-grid-layout">
          {certs.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div>
                <div className="cert-badge-tag">{cert.category}</div>
                <h3>{cert.title}</h3>
              </div>
              <p>{cert.issuer}</p>
            </div>
          ))}
        </div>

        <div className="leadership-banner">
          <h3>
            <RiAwardLine style={{ color: "#aa42ff", fontSize: "28px" }} />
            AGC of America Project Innovation & Delivery Steering Committee
            <span>2023 - 2024</span>
          </h3>
          <p>
            Selected to contribute to industry-wide discussions and strategic
            initiatives focused on project delivery innovation, construction
            technology adoption, operational excellence, digital twins, and VDC
            best practices across the nationwide construction sector.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
