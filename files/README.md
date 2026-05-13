# files/

Drop actual PDFs here matching the paths in `data/downloads.json`.

## Directory structure

```
files/
├── admissions/
│   ├── admission-form-2026-ug.pdf
│   ├── admission-form-2026-pg.pdf
│   └── scholarship-application-form.pdf
├── examinations/
│   ├── re-evaluation-form.pdf
│   ├── migration-certificate-form.pdf
│   └── marksheet-correction-form.pdf
├── student-welfare/
│   ├── anti-ragging-affidavit.pdf
│   ├── grievance-form.pdf
│   └── hostel-allotment-form-2026.pdf
├── affiliation/
│   ├── affiliation-application-new.pdf
│   └── affiliation-renewal-form.pdf
├── administration/
│   └── rti-application-form.pdf
├── reports/
│   ├── annual-report-2024-25.pdf
│   └── nirf-report-2025.pdf
└── syllabus/
    ├── ug-syllabus-2025-science.pdf
    ├── pg-syllabus-2025-arts.pdf
    └── mba-syllabus-2025.pdf
```

To add a new document:
1. Drop the PDF in the correct subfolder with a kebab-case filename
2. Add an entry to `data/downloads.json`
3. Commit and push — Netlify deploys automatically
