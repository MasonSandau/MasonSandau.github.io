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
          <li><strong>Windows undocumented api:</strong> internal api (ntoskrnl, win32...) via pointer swaps and method hijacking</li>
        </ul>
      `,
    },
    {
      title: "Interests",
      content: `
        <ul>
          <li><strong>Cryptology:</strong> Passion for encryption, cryptology, and security.</li>
          <li><strong>Reverse Engineering:</strong> Focus on reverse engineering, malware analysis, and low-level Windows API.</li>
          <li><strong>Unique :</strong> Focus on reverse engineering, malware analysis, and low-level Windows API.</li>
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
      githubLink: "https://github.com/MasonSandau/python-obfuscator", // Add GitHub link
    },
    {
      title: "Python Junk Code Generator",
      content: `
        <p>A Python junk code generator for signature evasion and webflow obfuscation, along with non-English ASCII-supported Unicode, fake socket requests, and dummy string manipulations.</p>
        <p><strong>Languages/Tools:</strong> Python | ASCII, WebSockets</p>
      `,
      githubLink: "https://github.com/MasonSandau/python-junkcode-generator", // Add GitHub link
    },
    {
      title: "QuickEvent",
      content: `
        <p>QuickEvent is a event managment tool that simplifies event managment to 4 roles and easy access to everything. It serves as an event management system where users can register, log in, create events, manage attendees, and generate QR codes for attendee validation. Admins can access everything and create tokens for registration, actives can create invites and invite people along with check qr codes at the door for validation, and attendees can generate their own qr code based on an invite.</p>
        <p><strong>Languages/Tools:</strong> Python Flask, HTML, CSS, JavaScript, NeonDB, deployment enviornments | GET/POST Requests, Flask Templates, Cookies, Sessions, NeonDB, Vercel hosting, github posting/version control, Styling</p>
      `,
      mainPageLink: "https://QuickEvent.vercel.app/", // Add main page link
      githubLink: "https://github.com/MasonSandau/List", // Add GitHub link
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
        ${item.mainPageLink || item.githubLink ? `
          <div class="project-links">
            ${item.mainPageLink ? `<a href="${item.mainPageLink}" target="_blank">Main Page</a>` : ''}
            ${item.githubLink ? `<a href="${item.githubLink}" target="_blank">GitHub</a>` : ''}
          </div>
        ` : ''}
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
