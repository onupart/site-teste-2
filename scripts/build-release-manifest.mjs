import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root=process.cwd();
const portals=Array.from({length:10},(_,i)=>`p${String(i+1).padStart(2,'0')}`);
const files=[
  'index.html',
  ...portals.map(p=>`jesus-crypto/${p}/index.html`),
  ...portals.map(p=>`jesus-crypto/${p}/portal-manifest.json`),
  'jesus-crypto/portal-registry.json',
  'jesus-crypto/QA-MATRIX.md',
  'jesus-crypto/RELEASE-GATE.md',
  'jesus-crypto/AUDIO-DISTRIBUTION.md',
  'jesus-crypto/AUDIO-WEB-MANIFEST.json',
  'robots.txt','vercel.json'
];

const manifest={
  project:'Universo Jesus Crypto',
  environment:process.env.JC_ENV||'staging',
  sourceCommit:process.env.GITHUB_SHA||null,
  generatedAt:new Date().toISOString(),
  qrEditorial:false,
  files:{}
};

for(const rel of files){
  const abs=path.join(root,rel);
  if(!fs.existsSync(abs)) throw new Error(`Missing release input: ${rel}`);
  const buf=fs.readFileSync(abs);
  manifest.files[rel]={
    bytes:buf.length,
    sha256:crypto.createHash('sha256').update(buf).digest('hex')
  };
}

const json=JSON.stringify(manifest,null,2)+'\n';
const writeArg=process.argv.indexOf('--write');
if(writeArg>=0){
  const dest=process.argv[writeArg+1]||'jesus-crypto/release-manifest.generated.json';
  fs.writeFileSync(path.join(root,dest),json);
  console.error(`Wrote ${dest}`);
}else{
  process.stdout.write(json);
}
