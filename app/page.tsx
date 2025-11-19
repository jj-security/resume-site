import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <main className="bg-background">

        {/* ============================= */}
        {/* HERO (modernized styling only) */}
        {/* ============================= */}
        <section
          id="hero"
          className="min-h-[600px] flex items-center justify-center bg-gradient-to-b from-panel/40 to-background border-b border-border"
        >
          <div className="text-center max-w-4xl mx-auto px-6">
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-4 text-foreground">
              <span className="text-primary">Julian Johnson</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted mb-6">
              Security Analyst
            </p>

            <p className="max-w-xl mx-auto text-muted leading-relaxed text-lg">
              Professional security analyst with experience in vulnerability management, automation, remediation coordination, and hardening of hybrid cloud and on-premise environments.
            </p>
          </div>
        </section>

        {/* ============================= */}
        {/* ABOUT SECTION (modern cards)  */}
        {/* ============================= */}
        <section id="about" className="py-24 bg-panel border-b border-border">
          <div className="container mx-auto px-6 max-w-6xl">

            <h2 className="text-4xl font-bold text-primary mb-14">About Me</h2>

            {/* Modern 2×2 Grid */}
            <div className="grid md:grid-cols-2 gap-10">

              {/* Summary */}
              <div className="bg-background border border-border p-8 rounded-2xl shadow-md hover:shadow-lg transition">
                <h3 className="text-primary font-semibold mb-4 text-xl">Summary</h3>
                <p className="text-muted leading-relaxed text-base">
                  Cybersecurity analyst with experience in vulnerability management, 
                  network security, automation, and scripting. Skilled in Qualys, Nessus, 
                  Python, Bash, remediation coordination, and secure infrastructure practices.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-background border border-border p-8 rounded-2xl shadow-md hover:shadow-lg transition">
                <h3 className="text-primary font-semibold mb-4 text-xl">Contact</h3>
                <ul className="space-y-3 text-muted text-base">
                  <li>
                    <span className="font-medium text-foreground">Email:</span>{" "}
                    <a 
                      href="mailto:julian@justsecure.org"
                      className="text-primary hover:text-primary-light underline"
                    >
                      julian@justsecure.org
                    </a>
                  </li>
                  <li>
                    <span className="font-medium text-foreground">GitHub:</span>{" "}
                    <a 
                      href="https://github.com/jj-security"
                      target="_blank"
                      className="text-primary hover:text-primary-light underline"
                    >
                      github.com/jj-security
                    </a>
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Location:</span>{" "}
                    Olympia, WA (Remote-friendly)
                  </li>
                </ul>
              </div>

              {/* Certifications */}
              <div className="bg-background border border-border p-8 rounded-2xl shadow-md hover:shadow-lg transition">
                <h3 className="text-primary font-semibold mb-4 text-xl">Certifications</h3>
                <ul className="list-disc list-inside space-y-3 text-muted text-base">
                  <li>GIAC Certified Enterprise Defender (GCED)</li>
                  <li>GIAC Web Application Penetration Tester (GWAPT)</li>
                  <li>CompTIA A+, Security+, Project+</li>
                </ul>
              </div>

              {/* Education */}
              <div className="bg-background border border-border p-8 rounded-2xl shadow-md hover:shadow-lg transition">
                <h3 className="text-primary font-semibold mb-4 text-xl">Education</h3>
                <ul className="list-disc list-inside space-y-3 text-muted text-base">
                  <li>B.S. Software Development — Western Governors University</li>
                  <li>A.A.S Information Technology — Community College of the Air Force</li>
                  <li>Music Theory & Composition — Saddleback College / Irvine Valley College</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ============================= */}
        {/* EXPERIENCE SECTION            */}
        {/* ============================= */}
        <section id="experience" className="py-20 bg-background border-b border-border">
          <div className="container mx-auto px-6 max-w-5xl">
            
            <h2 className="text-3xl font-bold text-primary mb-10">Experience</h2>

            <div className="space-y-8">
              {/* Job 1 */}

              <div className="bg-panel border border-border p-6 rounded-lg">
                <div className="flex justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    Security Analyst III
                  </h3>
                  <span className="text-muted">2021 – Present</span>
                </div>
                <p className="text-primary mb-2">InComm Payments • Atlanta, Georgia</p>

                <p className="space-y-2">
                  InComm Payments provides a broad range of financial services and payment solutions. Our Vulnerability Management team handles scanning and reporting for multiple merchants and compliance frameworks.
                </p>
                <br />

                <ul className="space-y-2 text-muted">
                  <li>• Expand our vulnerability orchestration framework using third-party tools such as Dazz, Nucleus, and custom Python scripts.</li>
                  <li>• Communicate emerging threats and zero-day vulnerabilities to stakeholders for immediate response.</li>
                  <li>• Enable penetration test engagements by preparing attack systems, collaborating with testers, and translating results into clear remediation recommendations for clients.</li>
                  <li>• Perform PCI-compliant network segmentation testing to validate that cardholder-data environments (CDE) remain fully isolated from non-trusted networks.</li>
                  <li>• Assess and document PCI “significant changes,” ensuring that architectural updates, segmentation adjustments, and new systems are revalidated for compliance and security impact.</li>
                </ul>
              </div>

              {/* Job 2 */}

              <div className="bg-panel border border-border p-6 rounded-lg">
                <div className="flex justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    Application Engineer
                  </h3>
                  <span className="text-muted">2020 – 2021</span>
                </div>
                <p className="text-primary mb-2"> Cincinnati Bell Technology Solutions • Cincinnati, Ohio</p>

                <ul className="space-y-2 text-muted">
                  <li>• Built and configured McAfee ePolicy Orchestrator architecture for disaster recovery and testing environments.</li>
                  <li>• Analyzed logs during exploitation testing. Created HIPS and DLP signatures to protect against failed attack vectors.</li>
                </ul>
              </div>

              {/* Job 3 */}

              <div className="bg-panel border border-border p-6 rounded-lg">
                <div className="flex justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    Supervisor, Weapons and Tactics
                  </h3>
                  <span className="text-muted">2018 – 2020</span>
                </div>
                <p className="text-primary mb-2"> United States Air Force • Honolulu, Hawaii</p>

                <ul className="space-y-2 text-muted">
                  <li>• In charge of planning and execution of all security operations assigned to the unit.</li>
                  <li>• Distributed all-source intelligence and modeled threats.</li>
                  <li>• Trained in the Air Force's PBED (Plan, Brief, Execute, Debrief) process, used for continuous improvement and mission planning.</li>
                  <li>• Launched Cyber Defender Playbooks within PACAF, later used across broader Air Force cyber units. Documented adversarial and defensive TTPs and trained defenders in their application. Efforts were formally recognized by 24th Air Force.</li>
                </ul>
              </div>

              {/* Job 4 */}

              <div className="bg-panel border border-border p-6 rounded-lg">
                <div className="flex justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    Endpoint Protection Specialist
                  </h3>
                  <span className="text-muted">2016 – 2018</span>
                </div>
                <p className="text-primary mb-2"> United States Air Force • Honolulu, Hawaii</p>

                <ul className="space-y-2 text-muted">
                  <li>• McAfee (Trellix) ePolicy Orchestrator technician. Set up server architecture and managed all software products. </li>
                  <li>• Created HIPS signatures, DLP rules, rogue system detection, whitelisted software. </li>
                </ul>
              </div>

              {/* Job 5 */}

              <div className="bg-panel border border-border p-6 rounded-lg">
                <div className="flex justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    Systems Administrator/Vulnerability Management Technician
                  </h3>
                  <span className="text-muted">2014 – 2016</span>
                </div>
                <p className="text-primary mb-2"> United States Air Force • Yigo, Guam</p>

                <ul className="space-y-2 text-muted">
                  <li>• Protected critical infrastrucure during Category 5 typhoon. Redirected subfloor flooding back outside, and fixed failing HVAC systems. Prevented datacenter outage, electrical disasters, and kept bombing operations online with zero downtime.</li>
                  <li>• Maintained cool server temps and kept them online for 48 hours during total HVAC/UPS outage while awaiting replacement parts. Gathered every fan from across the base, and configured them for max airflow and positive pressure. Created security checkpoint with defensive posture to protect critical infrastructure.</li>
                  <li>• Automated client health using PowerShell scripts at logon.</li>
                  <li>• Enhanced scanning, patching, and Active Directory administration using scripts. Passing cyber readiness inspection (DISA CCRI) with 95% compliance rating.</li>
                  <li>• Maintained offsite backup storage of classified data in accordance with our data retention and disaster recovery plans. </li>
                </ul>
              </div>

              {/* More jobs as needed... */}

            </div>
          </div>
        </section>

        {/* ============================= */}
        {/* SKILLS SECTION                */}
        {/* ============================= */}
        <section id="skills" className="py-24 bg-panel border-b border-border">
          <div className="container mx-auto px-6 max-w-6xl">

            <h2 className="text-4xl font-bold text-primary mb-14">Skills</h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-background border border-border p-6 rounded-2xl shadow-sm">
                <h3 className="text-primary mb-3 font-semibold">Security Tools + Languages</h3>
                <ul className="text-muted space-y-2 text-sm">
                  <li>• Qualys, Nessus, Retina</li>
                  <li>• Wiz, Dazz, Nucleus</li>
                  <li>• SIEM/Log Analysis (Splunk, Exabeam)</li>
                  <li>• Trellix ePolicy Orchestrator (f.k.a. McAfee)</li>
                  <li>• CommVault, ADIC Scalar</li>
                  <li>• Python, Bash, PowerShell</li>
                  <li>• Copilot, OpenAI</li>
                </ul>
              </div>

              <div className="bg-background border border-border p-6 rounded-2xl shadow-sm">
                <h3 className="text-primary mb-3 font-semibold">Infrastructure</h3>
                <ul className="text-muted space-y-2 text-sm">
                  <li>• Linux (Ubuntu, RHEL, Kali)</li>
                  <li>• Windows Server</li>
                  <li>• Docker</li>
                </ul>
              </div>

            </div>
          </div>
        </section>
        
        {/* ============================= */}
        {/* PROJECTS SECTION              */}
        {/* ============================= */}
        {/* <section id="projects" className="py-24 bg-background border-b border-border">
          <div className="container mx-auto px-6 max-w-6xl">

            <h2 className="text-4xl font-bold text-primary mb-14">Projects</h2>

            <div className="grid md:grid-cols-2 gap-8">

              <div className="bg-panel border border-border p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Vulnerability SLA Dashboard
                </h3>
                <p className="text-muted mb-3 text-sm">
                  Python-based reporting tool for SLA evaluation and visibility.
                </p>
              </div>

              <div className="bg-panel border border-border p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Network Hardening Lab
                </h3>
                <p className="text-muted mb-3 text-sm">
                  VLAN-segmented lab used to simulate production-style enterprise architectures.
                </p>
              </div>

            </div>
          </div>
        </section> */}

        {/* ============================= */}
        {/* CONTACT SECTION               */}
        {/* ============================= */}
        <section id="contact" className="py-24 bg-panel">
          <div className="container mx-auto px-6 max-w-4xl text-center">

            <h2 className="text-4xl font-bold text-primary mb-10">Contact</h2>

            <div className="bg-background border border-border p-10 rounded-2xl shadow-sm max-w-xl mx-auto">
              <p className="text-muted mb-6">
                Always open to opportunities or collaboration. Feel free to reach out.
              </p>

              <a
                href="mailto:julian@justsecure.org"
                className="inline-block bg-primary hover:bg-primary-dark text-foreground px-6 py-3 rounded-xl transition"
              >
                Contact Me
              </a>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
