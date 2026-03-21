import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const sourceDirs = [
  join(process.cwd(), '../Pathmaker/content/intelligence'),
  join(process.cwd(), '../Roials-Alpha/content/intelligence'),
  join(process.cwd(), '../Hylten-Invest/content/insights')
];
const targetFile = join(process.cwd(), 'src/generatedBlogs.ts');

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-zåäö0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function randomReadTime() {
  return Math.floor(Math.random() * 8) + 5 + ' min'; // 5 to 12 min
}

// Generate an evenly spread date
const startDate = new Date('2026-01-25').getTime();
const endDate = new Date('2026-03-21').getTime();

let validPosts = [];

for (const sourceDir of sourceDirs) {
  let files;
  try {
    files = readdirSync(sourceDir).filter(f => f.endsWith('.md'));
  } catch (e) { continue; }

  for (const file of files) {
    const content = readFileSync(join(sourceDir, file), 'utf8');

    // Skip English articles and non-generated ones
    // Our generated ones usually have "skriv på svenska" in filename or Swedish chars/words
    if (!content.match(/(svenska|Sverige|OpenClaw|företag|att|på|för|med|och)/i) && !file.includes('svensk')) {
        continue;
    }

  // Double check it's not actually English with Swedish keywords scattered
  const enlWords = content.match(/\b(the|and|this|that|with|from|are|have|which)\b/gi);
  if (enlWords && enlWords.length > 20) {
      console.log('Skipping ' + file + ' because it appears to be English.');
      continue;
  }

  // Extract Title from first H1 or first lines
  let title = 'Okänd titel';
  const lines = content.split('\n');
  const h1Match = lines.find(l => l.startsWith('# '));
  if (h1Match) {
    title = h1Match.replace('# ', '').trim();
  } else {
    // If no H1, use filename
    title = file.replace('.md', '').replace(/-/g, ' ');
  }

  // Extract description (first paragraph)
  let description = 'Läs mer om hur AI förändrar framtiden för svenska företag.';
  for (let l of lines) {
    l = l.trim();
    if (l && !l.startsWith('#') && !l.startsWith('-') && !l.startsWith('>') && l.length > 50) {
      description = l.substring(0, 137) + '...';
      break;
    }
  }

  // Clean the markdown content: remove the H1 because React renders it separately
  const cleanedContent = lines.filter(l => !l.startsWith('# ') || !h1Match).join('\n');
  
  // Calculate date based on roughly evenly spread index
  // We don't know total valid posts yet, just distribute randomly
  const randTime = startDate + Math.random() * (endDate - startDate);
  const dateObj = new Date(randTime);
  const dateStr = dateObj.toISOString().split('T')[0];

  validPosts.push({
    file,
    slug: generateSlug(title),
    title,
    description,
    date: dateStr,
    dateValue: randTime,
    readTime: randomReadTime(),
    rawMarkdown: cleanedContent
  });
  } // End of file loop
} // End of sourceDir loop

// Sort posts by date for chronological display
validPosts.sort((a, b) => b.dateValue - a.dateValue);

// Deduplicate slugs
const slugSet = new Set();
for (const p of validPosts) {
  let counter = 1;
  let s = p.slug;
  while (slugSet.has(s)) {
    s = p.slug + '-' + counter;
    counter++;
  }
  p.slug = s;
  slugSet.add(s);
}

// Write the TS file
let tsOutput = `export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

export const generatedBlogPosts: BlogPost[] = [\n`;

validPosts.forEach((post) => {
  tsOutput += `  {
    slug: "${post.slug}",
    title: ${JSON.stringify(post.title)},
    description: ${JSON.stringify(post.description)},
    date: "${post.date}",
    readTime: "${post.readTime}"
  },\n`;
});

tsOutput += `];\n\n`;

tsOutput += `export const generatedArticleContent: Record<string, string> = {\n`;

validPosts.forEach((post) => {
  tsOutput += `  "${post.slug}": ${JSON.stringify(post.rawMarkdown)},\n`;
});

tsOutput += `};\n`;

writeFileSync(targetFile, tsOutput);
console.log('Successfully generated src/generatedBlogs.ts with ' + validPosts.length + ' articles.');
