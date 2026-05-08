# github-page

> _A living archive. Not a portfolio — a record of what broke, what was learned, and what changed because of it._

Documentation is not the end product. It is the process made visible.

---

## 🧠 Philosophy

Most platforms document success. This one documents the path — including the wrong turns.

Three principles govern everything here:

**Honesty** — If something failed, it is written as a failure. Not a "learning opportunity." A failure.

**Transparency** — The reasoning behind decisions is preserved alongside the decisions themselves. Future readers deserve context, not just conclusions.

**Minimalism** — Nothing is added without purpose. Complexity earns its place or is removed.

---

## 📋 What This Is

github-page is a self-hosted archive for technical writing — built to document failures, trace growth over time, and make the process of learning visible to others who may be walking the same path.

It is not a blog. It is not a portfolio. It is a record.

---

## 🛠️ Tech Stack

| Layer    | Technology    | Reason                                  |
| -------- | ------------- | --------------------------------------- |
| Frontend | Astro         | Zero JS by default. Content first.      |
| Styling  | Tailwind CSS  | Utility-first. No abstraction overhead. |
| Runtime  | Bun / Node.js | Fast iteration, minimal setup.          |

---

## 📁 Project Structure

```
.
├── src/
│   ├── components/     # Reusable UI primitives
│   ├── pages/          # Route-based page components
│   ├── content/        # Articles, reflections, failure logs
│   └── layouts/        # Structural page templates
├── public/             # Static assets — images, fonts
└── README.md
```

The `content/` directory is the core of this project. Everything else exists to serve it.

---


## 📋 Features

| Status | Feature                        |
| ------ | ------------------------------ |
| ✓      | Technical failure archive      |
| ✓      | Self-reflection writing format |
| ✓      | Learning path documentation    |
| ○      | Search and tagging             |
| ○      | RSS feed                       |

`✓` shipped — `○` planned

---

## 🤝 Contributing

This is a personal archive. It is not open to contributions in the traditional sense.

If something is wrong — factually, technically — open an issue. Corrections are welcome. Opinions are not.

---

## 📝 License

MIT. Use freely. Attribution appreciated, not required.

---

_Muhammad Fawwaz Almumtaz_  
_Built to document the process, not perform the result._
