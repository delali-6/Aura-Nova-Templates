# Aura Nova Templates

This workspace contains a set of standalone website templates grouped by topic.

## Folder Guide

- `charity/hope-rise/` - charity organisation website templates
- `clothing/lume/` - luxury clothing store website
- `clothing/mira/` - aurora-themed clothing store website
- `coffee/bean-and-co/` - warm coffee shop website
- `coffee/roast-and-bloom/` - moody coffee shop website

## How To Run

Most templates in this workspace are plain HTML, CSS, and JavaScript sites.

### Local preview

From the workspace root, run a simple web server and open the folder in your browser:

```powershell
python -m http.server 5500
```

Then visit the template you want:

- `http://localhost:5500/clothing/lume/`
- `http://localhost:5500/clothing/mira/`
- `http://localhost:5500/coffee/bean-and-co/`
- `http://localhost:5500/coffee/roast-and-bloom/`
- `http://localhost:5500/charity/hope-rise/`

### Notes

- Use a local server instead of opening files directly if you want images, navigation, and scripts to behave consistently.
- If a folder contains multiple pages, open `index.html` first.
- If you are previewing in VS Code, Live Server works as well.
