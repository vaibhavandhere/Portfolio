import "./styles/Certifications.css";
import { RiAwardLine } from "react-icons/ri";

const certs = [
  {
    title: "CM-BIM",
    issuer: "Certificate of Management - Building Information Modeling (AGC)",
    category: "BIM Leadership",
  },
  {
    title: "FAA Part-107 Drone Pilot",
    issuer: "Commercial UAV Aerial Mapping & Photogrammetry",
    category: "Reality Capture",
  },
  {
    title: "Procore Certified: BIM Manager",
    issuer: "Procore Technologies • BIM Coordination & Workflows",
    category: "VDC & Management",
  },
  {
    title: "Autodesk AutoCAD User",
    issuer: "Autodesk Certified User • 2D/3D Design & Standards",
    category: "CAD Systems",
  },
  {
    title: "Bentley STAAD.Pro V8i",
    issuer: "Bentley Systems • Structural Modeling & Analysis",
    category: "Engineering",
  },
  {
    title: "Introduction to BIM 360: Next Gen",
    issuer: "Autodesk • Cloud Collaboration & Model Coordination",
    category: "Cloud BIM",
  },
  {
    title: "Procore Certified: Student",
    issuer: "Procore Technologies • Construction Project Management",
    category: "Project Tech",
  },
  {
    title: "MSCM Scholarship Recipient",
    issuer: "Texas A&M University • Construction Management Honor",
    category: "Honors & Awards",
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
