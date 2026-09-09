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
  '  margin: (top: 0.58in, bottom: 0.58in, left: 0.7in, right: 0.7in),',
  '  numbering: "1",',
  '  number-align: right,',
  ')',
  '#let ink = rgb("#172033")',
  '#let body = rgb("#3f4b5f")',
  '#let muted = rgb("#6b778c")',
  '#let rule = rgb("#dbe3ec")',
  '#let accent = rgb("#0b72b9")',
  '#set text(font: ("Segoe UI", "Arial"), size: 9.8pt, fill: body)',
  '#set par(leading: 0.7em)',
  '#set list(indent: 11pt, body-indent: 5.5pt, spacing: 3.3pt)',
  '#show link: set text(fill: accent)',
  '#let section(title) = {',
  '  v(11pt)',
  '  grid(columns: (auto, 1fr), gutter: 9pt, align: horizon,',
  '    text(size: 11.2pt, weight: "bold", fill: ink, tracking: 0.45pt, upper(title)),',
  '    line(length: 100%, stroke: 0.55pt + rule),',
  '  )',
  '  v(6.5pt)',
  '}',
  '#grid(columns: (1fr, auto), gutter: 20pt, align: top,',
  '  [#text(size: 25.5pt, weight: "bold", fill: ink)[' + typstText(profile.metadata.name) + ']',
  '   #v(2.5pt)',
  '   #text(size: 11.2pt, weight: "semibold", fill: accent)[' + typstText(profile.metadata.role) + ']',
  '   #v(2.5pt)',
  '   #text(size: 9pt, fill: muted)[' + typstText(profile.metadata.tagline) + ']],',
  '  [#align(right)[#text(size: 9pt)[',
  '    #link("mailto:' + typstText(profile.metadata.email) + '")[' + typstText(profile.metadata.email) + '] \\',
  '    #link("tel:' + typstText(profile.metadata.phoneHref) + '")[' + typstText(profile.metadata.phone) + '] \\',
  '    #link("' + typstText(profile.metadata.website) + '")[' + typstText(profile.metadata.websiteLabel) + ']',
  '  ]]],',
  ')',
  '#v(7pt)',
  '#line(length: 100%, stroke: 1.1pt + accent)',
  '#section("Summary")',
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

if (education.length) {
  lines.push('#section("Education")');
  for (const entry of education) {
    lines.push(
      '#grid(columns: (1fr, auto), gutter: 10pt,',
      '  [#text(size: 11pt, weight: "bold", fill: ink)[' + typstText(entry.metadata.degree) + ']],',
      '  [#text(size: 9.2pt, fill: muted)[' + typstText(entry.metadata.startDate) + ' - ' + typstText(entry.metadata.endDate) + ']],',
      ')',
      '#text(size: 9.4pt, weight: "semibold", fill: accent)[' + typstText(entry.metadata.institution) + ']',
      '#h(7pt)#text(size: 9.2pt, fill: muted)[' + typstText(entry.metadata.field) + ']',
      '#v(3pt)',
      typstText(entry.content),
    );
  }
}

if (leadership.length) {
  lines.push('#section("Accolades")');
  for (const entry of leadership) {
    lines.push(
      '#grid(columns: (1fr, auto), gutter: 10pt,',
      '  [#text(size: 11pt, weight: "bold", fill: ink)[' + typstText(entry.metadata.role) + ']],',
      '  [#text(size: 9.2pt, fill: muted)[' + typstText(entry.metadata.startDate) + ' - ' + typstText(entry.metadata.endDate) + ']],',
      ')',
      '#text(size: 9.4pt, weight: "semibold", fill: accent)[' + typstText(entry.metadata.organization) + ']',
      '#v(3pt)',
      typstText(entry.content),
    );
  }
}

lines.push('#pagebreak()', '#set text(size: 9.5pt)', '#section("Employment History")');

for (const job of experience) {
  lines.push(
    '#block(above: 3pt, below: 9pt, breakable: true)[',
    '#grid(columns: (1fr, auto), gutter: 8pt,',
    '  [#text(size: 11pt, weight: "bold", fill: ink)[' + typstText(job.metadata.role) + ']],',
    '  [#text(size: 9.2pt, fill: muted)[' + typstText(job.metadata.startDate) + ' - ' + typstText(job.metadata.endDate) + ']],',
    ')',
    '#text(size: 9.4pt, weight: "semibold", fill: accent)[' + typstText(job.metadata.company) + (job.metadata.location ? ' | ' + typstText(job.metadata.location) : '') + ']',
    '#v(3pt)',
    ...bulletItems(job.content),
    ']',
  );
}

if (projects.length) {
  lines.push('#pagebreak()', '#set text(size: 9.8pt)', '#section("Selected Portfolio")');
  for (const project of projects) {
    lines.push(
      '#block(above: 3pt, below: 10pt, breakable: false)[',
      '#grid(columns: (1fr, auto), gutter: 8pt,',
      '  [#text(size: 11pt, weight: "bold", fill: ink)[' + typstText(project.metadata.title) + ']],',
      '  [#text(size: 9.2pt, fill: muted)[' + typstText(project.metadata.status) + ']],',
      ')',
      '#text(size: 9.4pt, weight: "semibold", fill: accent)[' + typstText(project.metadata.role) + ' | ' + typstText(project.metadata.startedAt) + ']',
      '#v(3pt)',
      typstText(project.metadata.summary),
      '#v(2pt)',
      '#text(size: 9pt, fill: muted)[Tech: ' + project.metadata.technologies.map(typstText).join(', ') + ']',
      ...bulletItems(project.content),
      ']',
    );
  }
}

const outputDirectory = path.join(root, 'resume');
fs.mkdirSync(outputDirectory, { recursive: true });
fs.mkdirSync(path.join(root, 'output', 'pdf'), { recursive: true });
const outputPath = path.join(outputDirectory, 'thomas-miller-master.typ');
fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf8');
console.log(outputPath);
