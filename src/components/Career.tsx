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
                <h5>Amazon Robotics • Austin, TX</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Owned end-to-end schedule and digital delivery for 10+
              simultaneous deployment projects (Tote-ASRS, OBD-A, ROBIN).
              Resolved 6,000+ clashes, integrated 500+ LiDAR scans, managed 50+
              active sites, developed 20+ parametric Revit families, and built
              Dynamo automation workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior VDC Engineer</h4>
                <h5>Joeris General Contractors • San Antonio, TX</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Led VDC execution and trade coordination across 15+ commercial
              construction projects. Facilitated stakeholder meetings,
              standardized internal VDC processes, and managed reality capture,
              drone operations, and 360 camera deployments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>VDC Engineer</h4>
                <h5>Joeris General Contractors • San Antonio, TX</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Supported 3D trade coordination, developed BIM execution plans,
              and performed on-site laser scanning (RTC-360, BLK 360, NavVis
              VLX). Managed OpenSpace reality capture setups and provided
              technical training to field teams and trade partners.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BIM / VDC Intern</h4>
                <h5>Baker Concrete Construction • Miami, FL</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Validated 2D/3D/4D virtual models across 6+ projects. Executed
              500+ Trimble X7 3D laser scans, conducted drone photogrammetry
              mapping in Pix4D (300+ aerial images/flight), and coordinated
              100+ RFIs with project engineers.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>M.S. Construction Management</h4>
                <h5>Texas A&M University • GPA: 3.9/4.0</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Master of Science in Construction Management (MSCM) with a 3.9/4.0
              GPA. Advanced study in Virtual Design & Construction, BIM
              coordination, risk mitigation, and construction technology
              innovation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Program Manager</h4>
                <h5>7 Frames • Mumbai, India</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Led end-to-end program delivery across multiple concurrent
              projects with 100% on-time milestone delivery. Managed a 30+
              person team, 30+ vendor partnerships, risk mitigation, and QA
              workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Engineer</h4>
                <h5>Charms Group • Thane, India</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Assisted field execution for a $10M+ construction project.
              Managed formwork for slabs, beams, and columns, assessed
              reinforcement per BBS for two 10,000 sq. ft. slabs, and supervised
              site safety protocols.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

