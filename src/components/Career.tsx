import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Reality Capture BIM Engineer</h4>
                <h5>Amazon Fulfillment Technologies & Robotics • Austin, TX</h5>
              </div>
              <h3>2024 – PRESENT</h3>
            </div>
            <p>
              Owned end-to-end project delivery and milestone tracking for 15+
              simultaneous deployment projects (Tote-ASRS, OBD-A, ROBIN).
              Resolved 3,000+ clashes across 50+ active deployment sites,
              captured and integrated 500+ LiDAR scans, developed 20+ parametric
              Revit families (reducing modeling time by ~75%), and built Dynamo
              automation workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior VDC Engineer</h4>
                <h5>Joeris General Contractors, LLC • San Antonio, TX</h5>
              </div>
              <h3>2023 – 2024</h3>
            </div>
            <p>
              Led regional Virtual Design & Construction (VDC) processes across
              commercial projects. Supported 3D trade coordination, site
              logistics, 4D sequencing, and field equipment setup (total stations,
              laser scanners, and UAVs). Collaborated on project-specific VDC
              strategies and trade buyout contract language.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Virtual Design and Construction Engineer</h4>
                <h5>Joeris General Contractors, LLC • San Antonio, TX</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Planned and executed drone flights, 3D laser scanning with Leica
              Cyclone processing, and 3D site logistics modeling in CM Builder.
              Managed reality capture 360 platforms, tracked Tech Hub GPS units,
              and developed SOPs for operational technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BIM / VDC Intern</h4>
                <h5>Baker Concrete Construction, Inc. • Miami, FL</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Created integrated models for trade coordination, integrated 3D
              printing prototyping, executed field reality capture (Trimble
              laser scanning and drone photogrammetry), generated 2D/3D
              elevation maps, and managed RFIs and submittal reviews.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>M.S. Construction Management</h4>
                <h5>Texas A&M University • Scholarship Recipient</h5>
              </div>
              <h3>2021 – 2022</h3>
            </div>
            <p>
              Master of Science in Construction Management (MSCM). Focus on
              Virtual Design & Construction, BIM coordination, reality capture,
              field technology integration, and operational leadership.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Program Manager</h4>
                <h5>7 Frames • Thane, Maharashtra, India</h5>
              </div>
              <h3>2020 – 2021</h3>
            </div>
            <p>
              Spearheaded program delivery across strict timelines with 100%
              milestone adherence. Managed a 50+ person team, vendor
              collaborations, technical onboarding, quality assurance, and project
              risk parameters.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. & Diploma in Civil Engineering</h4>
                <h5>University of Mumbai & VJTI • Mumbai, India</h5>
              </div>
              <h3>2013 – 2019</h3>
            </div>
            <p>
              Bachelor of Engineering and Diploma in Civil Engineering.
              Hands-on surveying (Total Station, Auto Level), concrete
              management per BBS, structural analysis, and construction jobsite
              safety protocols.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

