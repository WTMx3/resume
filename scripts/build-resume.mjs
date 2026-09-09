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
    .map((line) => '- ' + typstText(line.trim().slice(2).replace(/^\*\*.+?:\*\*\s*/, '')));
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
  '  margin: (top: 0.56in, bottom: 0.52in, left: 0.68in, right: 0.68in),',
  '  numbering: "1",',
  '  number-align: right,',
  ')',
  '#let ink = rgb("#172033")',
  '#let body = rgb("#3f4b5f")',
  '#let muted = rgb("#6b778c")',
  '#let rule = rgb("#dbe3ec")',
  '#let accent = rgb("#0b72b9")',
  '#set text(font: ("Segoe UI", "Arial"), size: 9pt, fill: body)',
  '#set par(leading: 0.6em)',
  '#set list(indent: 10pt, body-indent: 5pt, spacing: 2.8pt)',
  '#show link: set text(fill: accent)',
  '#let section(title) = {',
  '  v(9pt)',
  '  grid(columns: (auto, 1fr), gutter: 9pt, align: horizon,',
  '    text(size: 10.4pt, weight: "bold", fill: ink, tracking: 0.4pt, upper(title)),',
  '    line(length: 100%, stroke: 0.55pt + rule),',
  '  )',
  '  v(5pt)',
  '}',
  '#grid(columns: (1fr, auto), gutter: 20pt, align: top,',
  '  [#text(size: 24pt, weight: "bold", fill: ink)[' + typstText(profile.metadata.name) + ']',
  '   #v(2pt)',
  '   #text(size: 10.5pt, weight: "semibold", fill: accent)[' + typstText(profile.metadata.role) + ']',
  '   #v(2pt)',
  '   #text(size: 8.4pt, fill: muted)[' + typstText(profile.metadata.tagline) + ']],',
  '  [#align(right)[#text(size: 8.3pt)[',
  '    #link("mailto:' + typstText(profile.metadata.email) + '")[' + typstText(profile.metadata.email) + '] \\',
  '    #link("tel:' + typstText(profile.metadata.phoneHref) + '")[' + typstText(profile.metadata.phone) + '] \\',
  '    #link("' + typstText(profile.metadata.website) + '")[' + typstText(profile.metadata.websiteLabel) + ']',
  '  ]]],',
  ')',
  '#v(7pt)',
  '#line(length: 100%, stroke: 1.1pt + accent)',
  '#section("Professional Summary")',
  typstText(profile.content),
  '#section("Skills")',
  '#grid(columns: (112pt, 1fr), column-gutter: 10pt, row-gutter: 3.2pt,',
];

for (const group of skills) {
  lines.push(
    '  [#text(weight: "semibold", fill: ink)[' + typstText(group.metadata.category) + ']],',
    '  [' + group.metadata.items.map(typstText).join(', ') + '],',
  );
}

lines.push(')');

lines.push('#section("Professional Experience")');

for (const job of experience) {
  lines.push(
    '#block(above: 2pt, below: 6pt, breakable: false)[',
    '#grid(columns: (1fr, auto), gutter: 8pt,',
    '  [#text(size: 10.2pt, weight: "bold", fill: ink)[' + typstText(job.metadata.role) + ']],',
    '  [#text(size: 8.4pt, fill: muted)[' + typstText(job.metadata.startDate) + ' - ' + typstText(job.metadata.endDate) + ']],',
    ')',
    '#text(size: 8.7pt, weight: "semibold", fill: accent)[' + typstText(job.metadata.company) + (job.metadata.location ? ' | ' + typstText(job.metadata.location) : '') + ']',
    '#v(2pt)',
    ...bulletItems(job.content),
    ']',
  );
}

if (projects.length) {
  lines.push('#pagebreak(weak: true)', '#section("Selected Portfolio")');
  for (const project of projects) {
    lines.push(
      '#block(above: 2pt, below: 7pt, breakable: false)[',
      '#grid(columns: (1fr, auto), gutter: 8pt,',
      '  [#text(size: 10.2pt, weight: "bold", fill: ink)[' + typstText(project.metadata.title) + ']],',
      '  [#text(size: 8.4pt, fill: muted)[' + typstText(project.metadata.status) + ']],',
      ')',
      '#text(size: 8.7pt, weight: "semibold", fill: accent)[' + typstText(project.metadata.role) + ' | ' + typstText(project.metadata.startedAt) + ']',
      '#v(2pt)',
      typstText(project.metadata.summary),
      '#v(1pt)',
      '#text(size: 8.2pt, fill: muted)[Tech: ' + project.metadata.technologies.map(typstText).join(', ') + ']',
      ...bulletItems(project.content),
      ']',
    );
  }
}

if (education.length) {
  lines.push('#section("Education")');
  for (const entry of education) {
    lines.push(
      '#grid(columns: (1fr, auto), gutter: 8pt,',
      '  [#text(size: 10.2pt, weight: "bold", fill: ink)[' + typstText(entry.metadata.degree) + ']],',
      '  [#text(size: 8.4pt, fill: muted)[' + typstText(entry.metadata.startDate) + ' - ' + typstText(entry.metadata.endDate) + ']],',
      ')',
      '#text(size: 8.7pt, weight: "semibold", fill: accent)[' + typstText(entry.metadata.institution) + ']',
      '#h(6pt)#text(size: 8.5pt, fill: muted)[' + typstText(entry.metadata.field) + ']',
      '#v(2pt)',
      typstText(entry.content),
    );
  }
}

if (leadership.length) {
  lines.push('#section("Leadership")');
  for (const entry of leadership) {
    lines.push(
      '#grid(columns: (1fr, auto), gutter: 8pt,',
      '  [#text(size: 10.2pt, weight: "bold", fill: ink)[' + typstText(entry.metadata.role) + ']],',
      '  [#text(size: 8.4pt, fill: muted)[' + typstText(entry.metadata.startDate) + ' - ' + typstText(entry.metadata.endDate) + ']],',
      ')',
      '#text(size: 8.7pt, weight: "semibold", fill: accent)[' + typstText(entry.metadata.organization) + ']',
      '#v(2pt)',
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
