// Data for Sections (Easily Expandable)
const sections = {
  aboutme: [
    {
      title: "Degree",
      content: `
        <p><strong>Bachelor in Computer Science</strong><br>
        <strong>Minor:</strong> Mathematics<br>
        <em>University of Minnesota Duluth</em><br>
        <strong>Expected Graduation:</strong> 2027</p>
        <ul>
          <li>Pursuing a Bachelor’s in Computer Science with a focus on cryptology, software security, and low-level hardware-to-software interactions.</li>
        </ul>
      `,
    },
    {
      title: "Experience",
      content: `
        <h4><strong>Languages & Skills</strong></h4>
        <ul>
          <li><strong>Proficient:</strong> Python, Lua, C++/C/C#</li>
          <li><strong>Intermediate:</strong> .NET, JavaScript, x86 Assembly</li>
          <li><strong>Beginner:</strong> HTML, CSS</li>
        </ul>
        <h4><strong>Tools & Frameworks</strong></h4>
        <ul>
          <li><strong>Development Environments:</strong> CLion, IntelliJ IDEA, Visual Studio, XCode, Python IDLE</li>
          <li><strong>Reverse Engineering Tools:</strong> IDA Pro, Cutter.re, Cheat Engine, x86dbg, HxD, ILSpy</li>
        </ul>
      `,
    },
    {
      title: "Interests",
      content: `
        <ul>
          <li><strong>Cryptology:</strong> Passion for encryption, cryptology, and security.</li>
          <li><strong>Reverse Engineering:</strong> Focus on reverse engineering, malware analysis, and low-level Windows API.</li>
        </ul>
      `,
    },
  ],
  projects: [
    {
      title: "Python Obfuscator",
      content: `
        <p>A multi-layered obfuscator for Python including base64 encryption, marshall loads, pickle loads, internal hash checks, modification checks, anti-VM, error code encryption, list obfuscation, and 3rd-party obfuscators.</p>
        <p><strong>Languages/Tools:</strong> Python | Pickle/Marshal object serialization, Base64 encryption, Windows registry, Web requests, Hashing, RSA encryption/One-way encryption.</p>
      `,
    },
    {
      title: "Python Junk Code Generator",
      content: `
        <p>A Python junk code generator for signature evasion and webflow obfuscation, along with non-English ASCII-supported Unicode, fake socket requests, and dummy string manipulations.</p>
        <p><strong>Languages/Tools:</strong> Python | ASCII, WebSockets</p>
      `,
    },
    {
      title: "Custom Whitelist CSV Manager",
      content: `
        <p>A Flask-based application to manage name whitelists stored in a CSV database. Includes functionality for user-limited name submissions (up to 3) and an admin panel for viewing submissions, dates, and other person-specific data.</p>
        <p><strong>Languages/Tools:</strong> Python Flask, HTML, CSS | GET/POST Requests, Flask Templates, Cookies</p>
      `,
    },
  ],
  undocumentedProjects: [
    {
      title: "CSGO Anti-Aim Extension",
      content: `
        <p>An in-game player model desync mechanism for hitbox manipulation, along with custom visual debugging tools for angle and movement data.</p>
        <p><strong>Languages/Tools:</strong> Lua | Internal CSGO DLL Module API, Nixware.cc API</p>
      `,
    },
    {
      title: "Roblox Client-Side Anti-Cheat",
      content: `
        <p>An extension to detect unauthorized model modifications and part additions to characters in Roblox games.</p>
        <p><strong>Languages/Tools:</strong> Lua | Roblox API, SynapseX API</p>
      `,
    },
    {
      title: "Shinjuku 2006 Script",
      content: `
        <p>A Roblox debugging tool displaying item spawn counts, player group affiliations, and other game data.</p>
        <p><strong>Languages/Tools:</strong> Lua | Roblox API, SynapseX API</p>
      `,
    },
  ],
  reverseEngineering: [
    {
      title: "TwitterAIO Reversal",
      content: `
        <p>Reverse-engineered an executable originally developed in Python, which had been obfuscated through multiple layers of undocumented tools. Successfully deconstructed the executable to its base Python bytecode through manual analysis and rebuilt the original functionality.</p>
      `,
    },
    {
      title: "Github Malware Analysis",
      content: `
        <p>Decompiled a GitHub release-only executable claiming to be a Discord self-bot. Discovered and documented its embedded credential-stealing malware, then reported it to GitHub.</p>
      `,
    },
    {
      title: "CrackMe Challenges",
      content: `
        <p>Completed multiple CrackMe challenges of varying difficulty across platforms, including .NET and native C++ applications on crackcmes.one.</p>
      `,
    },
  ],
};

// Function to Generate Cards
function generateCards(sectionId, data) {
  const container = document.querySelector(`#${sectionId} .cards-container`);
  container.innerHTML = data
    .map(
      (item) => `
      <div class="card">
        <h3>${item.title}</h3>
        <div>${item.content}</div>
      </div>
    `
    )
    .join("");
}

// Generate Cards for Each Section
generateCards("aboutme", sections.aboutme);
generateCards("projects", sections.projects);
generateCards("undocumented-projects", sections.undocumentedProjects);
generateCards("reverse-engineering", sections.reverseEngineering);
