#!/usr/bin/env node
/**
 * Build floor-plan PNG/PDF assets from source Hebrew-named PDFs.
 *
 * Reads scripts/floorplan-manifest.json and renders each entry to
 * public/floorplans/{plates|units}/<slug>.png at 200 DPI using pdftoppm.
 * For unit plans, also copies the original PDF as <slug>.pdf so users can
 * download it from the inspector.
 *
 * Requires `pdftoppm` on PATH (`brew install poppler`).
 *
 * Usage:  node scripts/build-floorplan-assets.mjs
 */
import { execFileSync } from 'node:child_process'
import { readFileSync, mkdirSync, copyFileSync, existsSync, renameSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const PUBLIC_DIR = join(ROOT, 'public', 'floorplans')
const MANIFEST = JSON.parse(
  readFileSync(join(__dirname, 'floorplan-manifest.json'), 'utf8')
)

const DPI = 220
const MAX_WIDTH = 2800 // downscale via `sips` after rendering (macOS only; skipped if missing)
const WEBP_QUALITY = 78 // sips webp quality 0-100

function ensureDir(d) {
  mkdirSync(d, { recursive: true })
}

function checkPdftoppm() {
  try {
    execFileSync('pdftoppm', ['-v'], { stdio: 'pipe' })
  } catch {
    console.error(
      '\n  ✗ pdftoppm not found.\n' +
        '  Install Poppler:  brew install poppler\n'
    )
    process.exit(1)
  }
}

function renderPdfToPng(srcPdf, outDir, outBase) {
  ensureDir(outDir)
  // pdftoppm writes <outBase>-1.png for first page; we then rename to <outBase>.png.
  execFileSync(
    'pdftoppm',
    ['-png', '-r', String(DPI), '-f', '1', '-l', '1', srcPdf, join(outDir, outBase)],
    { stdio: 'pipe' }
  )
  const generated = join(outDir, `${outBase}-1.png`)
  const target = join(outDir, `${outBase}.png`)
  if (existsSync(generated)) {
    if (existsSync(target)) {
      execFileSync('rm', [target])
    }
    renameSync(generated, target)
  }
  // Optional downscale to keep web bundle small.
  try {
    execFileSync(
      'sips',
      ['--resampleWidth', String(MAX_WIDTH), target, '--out', target],
      { stdio: 'pipe' }
    )
  } catch {
    /* sips not available (non-mac) — leave full-res PNG. */
  }
  // Convert PNG -> WebP (~50% smaller) using cwebp (`brew install webp`).
  try {
    const webp = target.replace(/\.png$/, '.webp')
    execFileSync(
      'cwebp',
      ['-q', String(WEBP_QUALITY), '-mt', target, '-o', webp],
      { stdio: 'pipe' }
    )
    execFileSync('rm', [target])
    return webp
  } catch {
    /* cwebp missing — keep PNG. */
    return target
  }
}

function processGroup(kind, sourceDir, mapping) {
  const outDir = join(PUBLIC_DIR, kind)
  ensureDir(outDir)
  const entries = Object.entries(mapping)
  console.log(`\n→ ${kind}: rendering ${entries.length} PDFs`)
  for (const [src, slug] of entries) {
    const srcPath = join(sourceDir, src)
    if (!existsSync(srcPath)) {
      console.warn(`  ! missing: ${src}`)
      continue
    }
    process.stdout.write(`  · ${slug.padEnd(20)} `)
    renderPdfToPng(srcPath, outDir, slug)
    if (kind === 'units') {
      copyFileSync(srcPath, join(outDir, `${slug}.pdf`))
    }
    console.log('✓')
  }
}

console.log('G Park · floor-plan asset builder')
checkPdftoppm()
ensureDir(PUBLIC_DIR)

processGroup('plates', MANIFEST.sourceDirs.plates, MANIFEST.plates)
processGroup('units', MANIFEST.sourceDirs.units, MANIFEST.units)

console.log('\nDone. Outputs in public/floorplans/.\n')
