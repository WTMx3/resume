import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function parseValue(rawValue) {
  const value = rawValue.trim();
  if (value.startsWith('[') && value.endsWith(']')) {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
  return value.replace(/^['"](.*)['"]$/, '$1');
}

function parseFrontmatter(fileContent) {
  const match = /^---\s*\r?\n([\s\S]*?)\r?\n---/.exec(fileContent);
  if (!match) return { metadata: {}, content: fileContent.trim() };

  const metadata = {};
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith('#')) continue;
    const separator = line.indexOf(':');
    if (separator === -1) continue;
    metadata[line.slice(0, separator).trim()] = parseValue(line.slice(separator + 1));
  }

  return {
    metadata,
    content: fileContent.replace(/^---\s*\r?\n([\s\S]*?)\r?\n---/, '').trim(),
  };
}

function collection(name) {
  const directory = path.join(root, 'content', name);
  if (!fs.existsSync(directory)) return [];

  return fs
    .readdirSync(directory)
    .filter((file) => path.extname(file) === '.mdx')
    .map((file) => ({
      slug: path.basename(file, '.mdx'),
      ...parseFrontmatter(fs.readFileSync(path.join(directory, file), 'utf8')),
    }))
    .filter((entry) => entry.metadata.draft !== true)
    .sort((a, b) => Number(a.metadata.order ?? 999) - Number(b.metadata.order ?? 999));
}

function typstText(input) {
  const replacements = new Map([
    ['\\', '\\\\'],
    ['#', '\\#'],
    ['$', '\\$'],
    ['@', '\\@'],
    ['[', '\\['],
    [']', '\\]'],
    ['*', '\\*'],
    ['·', ' | '],
  ]);
  return Array.from(String(input ?? ''), (character) => replacements.get(character) ?? character).join('');
}

function bulletItems(markdown) {
  return markdown
    .split(/\r?\n/)
    .filter((line) => line.trimStart().startsWith('- '))
    .map((line) => {
      const value = line.trim().slice(2);
      const labeled = /^\*\*(.+?)\*\*\s*(.*)$/.exec(value);
      if (!labeled) return '- ' + typstText(value);
      return '- *' + typstText(labeled[1]) + '* ' + typstText(labeled[2]);
    });
}

const profile = collection('profile')[0];
const experience = collection('experience');
const education = collection('education');
const skills = collection('skills');
const projects = collection('projects');
const leadership = collection('leadership');

if (!profile) throw new Error('A profile MDX file is required.');

const lines = [
  '#set document(',
  '  title: "' + typstText(profile.metadata.name) + ' - Master Resume",',
  '  author: ("' + typstText(profile.metadata.name) + '",),',
  '  description: "' + typstText(profile.content) + '",',
  ')',
  '#set page(',
  '  paper: "us-letter",',
  '  margin: (top: 0.42in, bottom: 0.42in, left: 0.58in, right: 0.58in),',
  '  numbering: "1",',
  '  number-align: center,',
  ')',
  '#let navy = rgb("#152238")',
  '#let ink = rgb("#334155")',
  '#let muted = rgb("#64748b")',
  '#let accent = rgb("#0284c7")',
  '#set text(font: ("Segoe UI", "Arial"), size: 8.75pt, fill: ink)',
  '#set par(leading: 0.62em)',
  '#set list(indent: 10pt, body-indent: 5pt, spacing: 3pt)',
  '#show link: set text(fill: accent)',
  '#let section(title) = {',
  '  v(6pt)',
  '  text(size: 10.8pt, weight: "bold", fill: navy, upper(title))',
  '  v(1pt)',
  '  line(length: 100%, stroke: 0.8pt + accent)',
  '  v(3pt)',
  '}',
  '#align(center)[',
  '  #text(size: 22pt, weight: "bold", fill: navy)[' + typstText(profile.metadata.name) + ']',
  '  #v(1pt)',
  '  #text(size: 10pt, weight: "semibold", fill: accent)[' + typstText(profile.metadata.role) + ']',
  '  #v(1pt)',
  '  #text(size: 8.2pt, fill: muted)[' + typstText(profile.metadata.tagline) + ']',
  '  #v(3pt)',
  '  #text(size: 8.2pt)[',
  '    #link("mailto:' + typstText(profile.metadata.email) + '")[' + typstText(profile.metadata.email) + ']',
  '    #h(10pt) | #h(10pt)',
  '    #link("tel:' + typstText(profile.metadata.phoneHref) + '")[' + typstText(profile.metadata.phone) + ']',
  '    #h(10pt) | #h(10pt)',
  '    #link("' + typstText(profile.metadata.website) + '")[' + typstText(profile.metadata.websiteLabel) + ']',
  '  ]',
  ']',
  '#section("Professional Summary")',
  typstText(profile.content),
  '#section("Core Expertise")',
];

for (const group of skills) {
  lines.push('*' + typstText(group.metadata.category) + ':* ' + group.metadata.items.map(typstText).join(', '));
  lines.push('#v(0.5pt)');
}

if (projects.length) {
  lines.push('#section("Selected Portfolio")');
  for (const project of projects) {
    lines.push(
      '#grid(columns: (1fr, auto), gutter: 8pt,',
      '  [#text(weight: "bold", fill: navy)[' + typstText(project.metadata.title) + ']],',
      '  [#text(size: 8.4pt, style: "italic", fill: muted)[' + typstText(project.metadata.status) + ']],',
      ')',
      '#text(weight: "semibold")[' + typstText(project.metadata.role) + ' | ' + typstText(project.metadata.startedAt) + ']',
      typstText(project.metadata.summary),
      '*Technologies:* ' + project.metadata.technologies.map(typstText).join(', '),
      ...bulletItems(project.content),
      '#v(3pt)',
    );
  }
}

lines.push('#section("Professional Experience")');

for (const job of experience) {
  lines.push(
    '#block(breakable: false)[',
    '#grid(columns: (1fr, auto), gutter: 8pt,',
    '  [#text(weight: "bold", fill: navy)[' + typstText(job.metadata.company) + ']],',
    '  [#text(size: 8.4pt, style: "italic", fill: muted)[' + typstText(job.metadata.startDate) + ' - ' + typstText(job.metadata.endDate) + ']],',
    ')',
    '#grid(columns: (1fr, auto), gutter: 8pt,',
    '  [#text(weight: "semibold")[' + typstText(job.metadata.role) + ']],',
    '  [#text(size: 8.4pt, fill: muted)[' + typstText(job.metadata.location ?? '') + ']],',
    ')',
    ...bulletItems(job.content),
    '#v(3pt)',
    ']',
  );
}

if (education.length) {
  lines.push('#section("Education")');
  for (const entry of education) {
    lines.push(
      '#grid(columns: (1fr, auto), gutter: 8pt,',
      '  [#text(weight: "bold", fill: navy)[' + typstText(entry.metadata.degree) + ', ' + typstText(entry.metadata.field) + ']],',
      '  [#text(size: 8.4pt, style: "italic", fill: muted)[' + typstText(entry.metadata.startDate) + ' - ' + typstText(entry.metadata.endDate) + ']],',
      ')',
      '#text(weight: "semibold")[' + typstText(entry.metadata.institution) + ']',
      typstText(entry.content),
      '#v(3pt)',
    );
  }
}

if (leadership.length) {
  lines.push('#section("Leadership")');
  for (const entry of leadership) {
    lines.push(
      '#grid(columns: (1fr, auto), gutter: 8pt,',
      '  [#text(weight: "bold", fill: navy)[' + typstText(entry.metadata.role) + ', ' + typstText(entry.metadata.organization) + ']],',
      '  [#text(size: 8.4pt, style: "italic", fill: muted)[' + typstText(entry.metadata.startDate) + ' - ' + typstText(entry.metadata.endDate) + ']],',
      ')',
      typstText(entry.content),
    );
  }
}

const outputDirectory = path.join(root, 'resume');
fs.mkdirSync(outputDirectory, { recursive: true });
fs.mkdirSync(path.join(root, 'output', 'pdf'), { recursive: true });
const outputPath = path.join(outputDirectory, 'thomas-miller-master.typ');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf8');
console.log(outputPath);
