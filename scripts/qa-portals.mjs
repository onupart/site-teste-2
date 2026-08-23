import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const fail = [];
const ok = [];
const portalCodes = Array.from({length:10},(_,i)=>`P${String(i+1).padStart(2,'0')}`);

function read(rel){
  const p=path.join(root,rel);
  if(!fs.existsSync(p)){fail.push(`MISSING ${rel}`);return null;}
  return fs.readFileSync(p,'utf8');
}
function count(s,re){return (s.match(re)||[]).length;}

const hub=read('index.html');
if(hub){
  for(const code of portalCodes){
    const route=`/jesus-crypto/${code.toLowerCase()}/`;
    if(!hub.includes(route)) fail.push(`HUB missing route ${route}`);
  }
  if(!/noindex/i.test(hub)) fail.push('Hub lacks noindex marker');
  else ok.push('Hub contains all P01-P10 routes and noindex');
}

for(const code of portalCodes){
  const slug=code.toLowerCase();
  const rel=`jesus-crypto/${slug}/index.html`;
  const html=read(rel);
  if(html){
    if(!/<meta[^>]+name=["']viewport["']/i.test(html)) fail.push(`${code}: viewport missing`);
    if(count(html,/<h1\b/gi)!==1) fail.push(`${code}: expected exactly one H1`);
    if(/<script[^>]+src=/i.test(html)) fail.push(`${code}: external script dependency found`);
    if(/docs\.google\.com|drive\.google\.com/i.test(html)) fail.push(`${code}: direct Google Drive URL exposed`);
    if(/Você ainda está aqui\?/i.test(html)) fail.push(`${code}: reserved Book II phrase leaked`);
    if(/<form\b|<input\b/i.test(html)) fail.push(`${code}: form/input detected; review privacy gate`);
    const audio=[...html.matchAll(/<source[^>]+src=["']([^"']+)["']/gi)].map(m=>m[1]);
    for(const src of audio){
      if(!src.startsWith('assets/')) fail.push(`${code}: audio source must be relative assets/: ${src}`);
    }
    ok.push(`${code}: static structure checked`);
  }

  const manifestText=read(`jesus-crypto/${slug}/portal-manifest.json`);
  if(manifestText){
    try{
      const m=JSON.parse(manifestText);
      const id=m.code||m.portal;
      if(id!==code) fail.push(`${code}: manifest id mismatch (${id})`);
      if(m.status!=='teste') fail.push(`${code}: manifest status must be teste in staging`);
      if(m.route!==`/jesus-crypto/${slug}/`) fail.push(`${code}: manifest route mismatch`);
      const noindex=(m.publication?.indexing==='blocked') || (m.privacy?.staging_noindex===true);
      if(!noindex) fail.push(`${code}: manifest does not assert staging indexing lock`);
      const qrLocked=(m.publication?.qr_editorial===false) || (m.qr?.editorial_qr_ready===false);
      if(!qrLocked) fail.push(`${code}: manifest does not assert editorial QR lock`);
      ok.push(`${code}: portal manifest checked`);
    }catch(e){fail.push(`${code}: portal manifest invalid JSON: ${e.message}`)}
  }
}

const registryText=read('jesus-crypto/portal-registry.json');
if(registryText){
  try{
    const reg=JSON.parse(registryText);
    const got=new Set((reg.portals||[]).map(p=>p.code));
    for(const c of portalCodes) if(!got.has(c)) fail.push(`Registry missing ${c}`);
    if(reg.qr_editorial!==false) fail.push('Registry must keep qr_editorial=false in staging');
    if(reg.indexing!=='blocked') fail.push('Registry must keep indexing=blocked in staging');
    ok.push('Registry parsed and staging locks confirmed');
  }catch(e){fail.push(`Registry JSON invalid: ${e.message}`)}
}

const robots=read('robots.txt');
if(robots && !/Disallow:\s*\//i.test(robots)) fail.push('robots.txt does not block root');
const vercel=read('vercel.json');
if(vercel && !/noindex, nofollow, noarchive/i.test(vercel)) fail.push('vercel.json lacks X-Robots-Tag lock');

console.log(`QA checks passed: ${ok.length}`);
for(const line of ok) console.log(`OK  ${line}`);
if(fail.length){
  console.error(`\nQA failures: ${fail.length}`);
  for(const line of fail) console.error(`ERR ${line}`);
  process.exit(1);
}
console.log('\nPASS — Jesus Crypto P01-P10 static staging QA');
