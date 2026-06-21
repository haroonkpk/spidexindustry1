const fs = require('fs');
const path = require('path');

const files = [
  'components/sections/WhyChooseUs.tsx',
  'components/sections/Stats.tsx',
  'components/sections/Testimonials.tsx',
  'components/sections/ProcessTimeline.tsx',
  'components/sections/ManufacturingCapabilities.tsx',
  'components/sections/FactoryShowcase.tsx'
];

for (const file of files) {
  const absolutePath = path.resolve(file);
  let content = fs.readFileSync(absolutePath, 'utf8');

  if (!content.includes('FootballAnimation')) {
    content = content.replace(/import SectionHeader from "(.*?)\/SectionHeader";/, 'import SectionHeader from "$1/SectionHeader";\nimport FootballAnimation from "../ui/FootballAnimation";');
  }

  content = content.replace(/[\s]*const footballRef = useRef<HTMLImageElement>\(null\);/g, '');

  // For WhyChooseUs, Stats, Testimonials, ProcessTimeline, FactoryShowcase
  content = content.replace(/[\s]*\/\* =========================\s*FOOTBALL ANIMATION\s*=========================\s*\*\/[\s]*useEffect\(\(\) => \{[\s\S]*?\}, \[\]\);/g, '');
  
  // Also if any file has just an empty or simple gsap.fromTo for footballRef from previous edits:
  content = content.replace(/[\s]*if \(footballRef\.current\) \{[\s]*gsap\.fromTo\([\s]*footballRef\.current,[\s\S]*?\}\s*\);\s*\}/g, '');

  content = content.replace(/<img[\s\S]*?ref=\{footballRef\}[\s\S]*?src="\/images\/football\.webp"[\s\S]*?(?:alt=".*?"[\s\S]*?)?className="(.*?)"[\s\S]*?\/>/g, '<FootballAnimation className="$1" />');

  fs.writeFileSync(absolutePath, content, 'utf8');
  console.log('Updated ' + file);
}
