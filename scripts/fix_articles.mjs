import { readdirSync, readFileSync, writeFileSync, unlinkSync } from 'fs';
import { join } from 'path';

const sourceDirs = [
  join(process.cwd(), '../Pathmaker/content/intelligence'),
  join(process.cwd(), '../Roials-Alpha/content/intelligence'),
  join(process.cwd(), '../Hylten-Invest/content/insights')
];

for (const dir of sourceDirs) {
  try {
    const files = readdirSync(dir).filter(f => f.endsWith('.md'));
    for (const file of files) {
      const filePath = join(dir, file);
      let content = readFileSync(filePath, 'utf-8');
      
      // Remove asterisks
      content = content.replace(/\*/g, '');
      
      // Replace agentik
      content = content.replace(/\bagentik\b/gi, 'agentiska arbetsflöden');
      content = content.replace(/agentiken/gi, 'agentiska arbetsflödena');
      
      writeFileSync(filePath, content, 'utf-8');
    }
  } catch(e) {}
}
console.log("Fixed asterisks and agentik words in markdown files.");
