import fs from "fs";

const file = "github_stats.svg";
let svg = fs.readFileSync(file, "utf8");

// Черный фон, синий текст
svg = svg.replace(
  /<svg/,
  '<svg><style>.a{fill:#000000 !important}.f,.g,.h,.i,.k{fill:#1E90FF !important}</style>'
);

// Меняем основной текст
svg = svg.replace("whoami", "./ctf_prep");
svg = svg.replace("Full Stack Developer", "Binary Security Researcher");

// Добавляем дополнительную информацию
svg = svg.replace(
  "</svg>",
  `<text x="10" y="180" fill="#1E90FF" font-size="14">CTF Team: qwertyfix</text></svg>`
);

fs.writeFileSync(file, svg, "utf8");
console.log("SVG patched successfully!");
