import fs from "fs";

const file = "github_stats.svg";
let svg = fs.readFileSync(file, "utf8");

// Патч фона и текста
svg = svg.replace(
  /<svg/,
  '<svg><style>.a{fill:#0d1117 !important}.f,.g,.h,.i,.k{fill:#36BCF7 !important}</style>'
);

// Патч текста
svg = svg.replace("whoami", "./ctf_prep");
svg = svg.replace("Full Stack Developer", "Binary Security Researcher");

// Добавляем дополнительную информацию
svg = svg.replace(
  "</svg>",
  `<text x="10" y="180" fill="#36BCF7" font-size="14">CTF Team: qwertyfix</text></svg>`
);

fs.writeFileSync(file, svg, "utf8");
console.log("SVG patched successfully!");
