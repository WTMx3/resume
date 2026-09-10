# Master resume

The website and Typst resume share the MDX files under `content/` as their canonical data source.

- Update contact details and the professional summary in `content/profile/`.
- Add or edit jobs in `content/experience/`.
- Maintain skill groups in `content/skills/`.
- Add portfolio case studies in `content/projects/`.
- Add education in `content/education/`; entries with `draft: true` are excluded.
- Add leadership entries in `content/leadership/`.

Run `pnpm resume:source` to regenerate `thomas-miller-master.typ`. Run `pnpm resume:pdf` to regenerate the PDF.

`thomas-miller-resume.typ` is the concise application resume; its generated, upload-ready PDF is `output/pdf/thomas-miller-resume.pdf`.
