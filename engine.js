// Gnosis — data engine (no DOM). Loaded after data.js.
const AR=[['ld','Lauren Daigle','Lauren Daigle, from Louisiana, auditioned for American Idol twice before her debut album How Can It Be (2015).'],
['mcm','Maverick City Music','Maverick City Music grew out of songwriting camps in Atlanta in 2018.'],
['ew','Elevation Worship','Elevation Worship is the worship team of Elevation Church in Charlotte, North Carolina.'],
['er','Elevation Rhythm','Elevation Rhythm is Elevation Church\'s youth worship band, formed in 2019; “Never Walk Away” was its first No. 1 radio single.'],
['ncw','New Creation Worship','New Creation Worship is the worship ministry of New Creation Church, Singapore, led by Senior Pastor Joseph Prince.'],
['cw','CeCe Winans','CeCe Winans first found fame singing with her brother as BeBe & CeCe Winans.'],
['hu','Hillsong UNITED','Hillsong UNITED began as the youth band of Hillsong Church in Sydney.'],
['hyf','Hillsong Young & Free','Hillsong Young & Free started in Sydney in the early 2010s as Hillsong\'s youth worship band.'],
['hw','Hillsong Worship','“What a Beautiful Name” by Hillsong Worship won the 2018 Grammy for Best Contemporary Christian Music Performance/Song.'],
['ak','Aodhán King','Aodhán King (said “Aiden”) was born on Christmas Day 1992 in Sydney and released his first solo album, Beyond Us, in 2024.'],
['taya','TAYA','TAYA sang lead on Hillsong UNITED\'s “Oceans” before going solo with her album TAYA (2022).'],
['ct','Chris Tomlin','Chris Tomlin\'s songs have long been among the most sung in churches worldwide, according to CCLI.'],
['pw','Phil Wickham','Phil Wickham co-wrote “Living Hope” with Bethel\'s Brian Johnson.'],
['bl','Brandon Lake','Brandon Lake has co-written hits with Elevation, Bethel and Maverick City as well as his own “Gratitude”.'],
['cc','Cody Carnes','Cody Carnes is married to Kari Jobe; they released “The Blessing” with Elevation Worship in 2020.'],
['kj','Kari Jobe','Kari Jobe and Cody Carnes based “The Blessing” on the priestly blessing in Numbers 6:24–26.'],
['bw','Bethel Music (Bethel Worship)','Bethel Music comes from Bethel Church in Redding, California; Jenn Johnson sings lead on “Goodness of God”.'],
['ur','UPPERROOM','UPPERROOM is a prayer community founded in Dallas in 2010 by Michael and Lorisa Miller.'],
['msc','Mosaic MSC','Mosaic MSC comes from Mosaic church in Los Angeles; “Tremble” earned it a 2018 Dove Award nomination for Worship Song of the Year.'],
['mr','Matt Redman','Matt Redman, from England, co-founded the Soul Survivor movement and wrote the Grammy-winning “10,000 Reasons (Bless the Lord)”.'],
['seu','SEU Worship','SEU Worship began at Southeastern University in Lakeland, Florida, in 2012, writing songs for its weekly chapel services.'],
['ag','Abbie Gamboa','Abbie Gamboa first led on UPPERROOM\'s first Moments album in 2018, covering “Tremble” and “Defender”; her debut album, pure, came out in 2023.'],
['th','Tiffany Hudson','Tiffany Hudson leads worship at Elevation Church; her solo debut album is Hidden Here.'],
['ca','Cory Asbury','“Sparrows” reached No. 6 on Billboard\'s Hot Christian Songs chart — Cory Asbury\'s third top ten.'],
['bjj','Brian & Jenn Johnson','Brian Johnson co-founded Bethel Music; “One Thing Remains” was ASCAP\'s No. 1 Christian song and No. 1 radio single of 2013.']];
const ARN=Object.fromEntries(AR.map(a=>[a[0],a[1]])),ARF=Object.fromEntries(AR.map(a=>[a[0],a[2]]));
const BUMP={ncw:2,ak:2,taya:2,er:2,ur:2,msc:2,seu:2,ag:2,th:2,ld:1,ca:1,bjj:1,cw:1,kj:1,cc:1};
const OT=['Genesis','Exodus','Leviticus','Numbers','Deuteronomy','Joshua','Judges','Ruth','1 Samuel','2 Samuel','1 Kings','2 Kings','1 Chronicles','2 Chronicles','Ezra','Nehemiah','Esther','Job','Psalms','Proverbs','Ecclesiastes','Song of Songs','Isaiah','Jeremiah','Lamentations','Ezekiel','Daniel','Hosea','Joel','Amos','Obadiah','Jonah','Micah','Nahum','Habakkuk','Zephaniah','Haggai','Zechariah','Malachi'];
const NT=['Matthew','Mark','Luke','John','Acts','Romans','1 Corinthians','2 Corinthians','Galatians','Ephesians','Philippians','Colossians','1 Thessalonians','2 Thessalonians','1 Timothy','2 Timothy','Titus','Philemon','Hebrews','James','1 Peter','2 Peter','1 John','2 John','3 John','Jude','Revelation'];
const CHARS=[['Jesus','The Son of God, Saviour and King.'],['Abraham','The patriarch who stood in faith at 100 years old.'],['Joseph','Who trusted God through betrayal, slavery and prison to lead Egypt.'],['Moses','The deliverer who led Israel out of 400 years of slavery.'],['Esther','The orphan who gained favour and saved her people.'],['David','The shepherd boy who faced Goliath.'],['Daniel','Whose story highlights grace and God\'s protection.'],['Peter','Known for his boldness, failures and ultimate redemption.'],['Paul','Displaying God\'s transforming power and devoted faith.'],['Mary of Bethany','Modelled true, devoted worship.'],['Solomon','Teaching lessons about true success and wisdom.'],['Nehemiah','The cupbearer who rebuilt Jerusalem\'s walls.'],['Elijah','The prophet of fire on Mount Carmel.'],['Lois and Eunice','Highlighted for passing down faith to the next generation.'],['Zacchaeus','The tax collector whom grace found in a sycamore tree.'],['Blind Bartimaeus','The blind beggar whose persistent faith made Jesus stand still.'],['Ruth','An example of waiting and trusting in God\'s provision.'],['Gideon','Turned from insecurity into strength through God.'],['The Woman Caught in Adultery','Revealing the depth of unmerited grace.'],['Daughters of Zelophehad','Five sisters who asked boldly — and God said they were right.']];
const T=[{n:'Missed',s:'No harvest',p:0},{n:'Mustard Seed',s:'Planted',p:10},{n:'2 Talents',s:'Growing',p:15},{n:'30-Fold Harvest',s:'Rooted',p:30},{n:'60-Fold Harvest',s:'Fruitful',p:60},{n:'10 Talents',s:'Faithful Steward',p:85},{n:'100-Fold Harvest',s:'Good Soil',p:100}];
const TC=['#262c40','#dfe7ef','#7fb3e0','#2c5fd6','#1f9a63','#c4163f','#f0b520'];

// ---------- matching ----------
function key(s){
 s=String(s).normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/&/g,' and ').replace(/['’.]/g,'').replace(/[^a-z0-9]+/g,' ').trim().replace(/^(the|a) /,'').replace(/ /g,'');
 if(s.length>3&&s.endsWith('s'))s=s.slice(0,-1);
 return s;
}
function lev(a,b,max){
 if(Math.abs(a.length-b.length)>max)return max+1;
 let p=Array.from({length:b.length+1},(_,i)=>i);
 for(let i=1;i<=a.length;i++){const c=[i];let m=i;for(let j=1;j<=b.length;j++){c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1));m=Math.min(m,c[j])}if(m>max)return max+1;p=c}
 return p[b.length];
}
const STOP=new Set(['and','the','of','a','an','in','on','to','by','for','with','from','his','her','parable','story','song','hymn','book','called','named']);
function wset(s){return [...new Set(String(s).normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/&/g,' and ').replace(/['’.]/g,'').replace(/[^a-z0-9]+/g,' ').trim().split(' ').filter(w=>w&&!STOP.has(w)).map(w=>w.length>3&&w.endsWith('s')?w.slice(0,-1):w))].sort()}
function exact(b,k){for(const a of b.ans)if(a.keys.includes(k))return a;return null}
function match(b,input){
 const k=key(input);if(!k)return null;
 const raw=x=>String(x).normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/[^a-z0-9]/g,''),ri=raw(input);
 for(const a of b.ans)if(a.names.some(n=>raw(n)===ri))return a; // exact spelling wins (Anna vs Annas)
 let hit=exact(b,k);if(hit)return hit;
 const ws=wset(input),k2=key(ws.join(' '));
 if(k2&&k2!==k&&(hit=exact(b,k2)))return hit;
 let best=null,bd=9;
 for(const a of b.ans)for(const kk of a.keys){const L=Math.min(kk.length,k.length),thr=L>=9?2:L>=5?1:0;if(!thr)continue;const d=lev(kk,k,thr);if(d<=thr&&d<bd){bd=d;best=a}}
 if(best)return best;
 if(ws.length>=2){
  const ex=b.ans.filter(a=>a.names.some(n=>wset(n).join(' ')===ws.join(' ')));if(ex.length===1)return ex[0];
  const sub=b.ans.filter(a=>a.names.some(n=>{const s=wset(n);return ws.every(w=>s.includes(w))}));if(sub.length===1)return sub[0];
 }
 if(k.length>=5){const pre=b.ans.filter(a=>a.keys.some(kk=>kk.startsWith(k)));if(pre.length===1)return pre[0]}
 if(k.length>=6){const inn=b.ans.filter(a=>a.keys.some(kk=>kk.includes(k)));if(inn.length===1)return inn[0]}
 if(b.cat==='b'||b.cat==='c')return similar(b,input);
 return null;
}
// ---------- Bible verse and character answers given in other simWords ----------
// Accepts KJV or modern wording, older name spellings, a different word order, filler simWords, and a phrase
// with a word or two left out. Every meaningful word the player types must belong to the answer, so a
// different name or object ("Moon turned to blood" vs "Water turned to blood") never counts.
const SIM_VAR={thee:'you',thou:'you',ye:'you',thy:'your',thine:'your',hath:'has',hast:'has',doth:'does',dost:'does',saith:'say',said:'say',says:'say',spake:'speak',spoke:'speak',spoken:'speak',shalt:'will',shall:'will',wilt:'will',
 charity:'love',ghost:'spirit',affection:'mind',affections:'mind',minds:'mind',whatsoever:'whatever',whosoever:'whoever',
 elias:'elijah',eliah:'elijah',esaias:'isaiah',jeremy:'jeremiah',jonas:'jonah',noe:'noah',osee:'hosea',sion:'zion',messias:'messiah',timotheus:'timothy',marcus:'mark',lucas:'luke',agar:'hagar',sara:'sarah',
 one:'1',two:'2',three:'3',four:'4',five:'5',six:'6',seven:'7',eight:'8',nine:'9',ten:'10',eleven:'11',twelve:'12',forty:'40',hundred:'100',thousand:'1000',first:'1st',second:'2nd',third:'3rd'};
const SIM_STOP=new Set(['you','your','i','my','me','we','us','our','he','him','his','she','her','it','its','they','them','their','is','am','are','was','were','be','been','being','that','this','these','those','which','who','whom','will','would','o','oh','as','so','unto','to','at','into','upon','all','do','does','did','has','have','had','there','then','when','up','out']);
const SIM_FILL=new Set(['like','many','very','also','even','just','about','some','thing','things','time','people','come','comes','cometh','came','go','goes','goeth','went','get','gets','really']);
function simStem(w,e){
 if(w.length>4){for(const x of ['eth','est','ing','ed','es','s'])if(w.endsWith(x)&&w.length-x.length>=3){w=w.slice(0,-x.length);break}}
 if(e&&w.length>3&&w.endsWith('e'))w=w.slice(0,-1);
 return w;
}
function simWords(s){return String(s).normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/&/g,' and ').replace(/['’.]/g,'').replace(/[^a-z0-9]+/g,' ').trim().split(' ').map(w=>SIM_VAR[w]||w).filter(w=>w&&!STOP.has(w)&&!SIM_STOP.has(w))}
const SIM_FILLS=new Set([...SIM_FILL].map(w=>simStem(w,1)));
function simToks(s){return [...new Set(simWords(s).map(w=>simStem(w,1)))]}
function simEq(a,b){return a===b||(a.length>=5&&b.length>=5&&lev(a,b,1)<=1)}
function similar(b,input){
 const W=simWords(input);if(!W.length)return null;
 const one=W.length===1&&W[0].length>=4?simStem(W[0]):null;
 const I=simToks(input),core=I.filter(w=>!SIM_FILLS.has(w)),ik=W.map(w=>simStem(w,1)).sort().join(' ');
 let best=null,bs=0,second=0;
 for(const a of b.ans){let sa=0;
  for(const n of a.names){const NW=simWords(n);if(!NW.length)continue;
   if(NW.map(w=>simStem(w,1)).sort().join(' ')===ik&&(W.length>1||(one&&NW.length===1&&simStem(NW[0])===one))){sa=Math.max(sa,3);continue}
   const A=simToks(n);if(A.length<2||!core.length)continue;
   if(!core.every(v=>A.some(w=>simEq(w,v))))continue;           // nothing the player typed may be foreign to this answer
   const AC=A.filter(w=>!SIM_FILLS.has(w));if(!AC.length)continue;
   const hit=AC.filter(w=>I.some(v=>simEq(w,v))).length,cov=hit/AC.length;
   if(hit>=2&&cov>=0.75)sa=Math.max(sa,1+cov)}
  if(sa>bs){second=bs;bs=sa;best=a}else if(sa>second)second=sa}
 return best&&bs-second>=0.15?best:null;
}
function hstr(s){let x=2166136261;for(let i=0;i<s.length;i++){x^=s.charCodeAt(i);x=Math.imul(x,16777619)}return x>>>0}

// ---------- build prompts ----------
const P=[],SONGS=[];
function mkAns(names,t){names=[...new Set(names.map(n=>n.trim()).filter(Boolean))];return{names,name:names[0],keys:[...new Set(names.map(key))].filter(Boolean),t:Math.max(1,Math.min(6,t))}}
function parseAns(a){return a.split(';').filter(Boolean).map(s=>{const[nm,t,rf,nt]=s.split('~');const o=mkAns(nm.split('|'),+t||3);if(rf)o.ref=rf.trim();if(nt)o.note=nt.trim();return o})}
for(const line of RAW.split('\n')){
 const t=line.trim();if(!t||t.startsWith('//'))continue;const x=t.split('^');
 if(x[0]==='S')SONGS.push({ar:x[1].split(','),t:+x[2],fl:x[3]||'',names:x[4].split('|'),sp:(x[5]||'').trim()});
 else{const[hd,keep]=x[0].split('!'),[ty,dd]=hd.split('@');P.push({cat:ty.toLowerCase(),g:x[1],q:x[2],f:x[3]||'',ans:parseAns(x[4]),d:dd||'',keep:keep||''})}
}
SONGS.forEach(s=>{const extra=[];for(const n of s.names){const m=n.match(/^(.*?)\s*\((.*)\)\s*$/);if(m){extra.push(m[1]);if(m[2].split(' ').length>1)extra.push(m[2])}}s.all=[...s.names,...extra];s.title=s.names[0];s.bare=s.title.replace(/\s*\(.*\)\s*$/,'')});
const words=s=>s.bare.split(/\s+/).filter(Boolean).length;
const xt=s=>Math.min(6,Math.min(...s.ar.map(a=>s.t+(BUMP[a]||0))));
function addSongs(g,q,f,list,tf,min=4){if(list.length>=min)P.push({cat:'w',g,q,f,ans:list.map(s=>{const o=mkAns(s.all,tf(s));o.song=s;return o})})}
for(const[k,name,f]of AR){
 const mine=SONGS.filter(s=>s.ar.includes(k));
 addSongs('art:'+k,'Name a song by '+name,f,mine,s=>s.t,1);
 addSongs('art:'+k,'Name a '+name+' song with a one-word title',f,mine.filter(s=>words(s)===1),s=>s.t);
 addSongs('art:'+k,'Name a '+name+' song with four or more words in its title',f,mine.filter(s=>words(s)>=4),s=>s.t);
 addSongs('art:'+k,'Name a '+name+' song whose title starts with A to H',f,mine.filter(s=>/^[a-h]/i.test(s.bare.replace(/^(the|a) /i,''))),s=>s.t,3);
 addSongs('art:'+k,'Name a '+name+' song whose title starts with I to Z',f,mine.filter(s=>/^[i-z]/i.test(s.bare.replace(/^(the|a) /i,''))),s=>s.t,3);
 addSongs('art:'+k,'Name a '+name+' song with “You” or “Your” in the title',f,mine.filter(s=>/\b(you|your|you're)\b/i.test(s.title)),s=>s.t,3);
 addSongs('art:'+k,'Name a '+name+' song that names God, Jesus or the Lord in its title',f,mine.filter(s=>/\b(god|jesus|lord|christ|yahweh|father|king)\b/i.test(s.title)),s=>s.t,3);
}
const WORDS=[['God','“How Great Is Our God” was co-written by Chris Tomlin, Jesse Reeves and Ed Cash.'],['Jesus','Hillsong Worship\'s “None but Jesus” and Elevation\'s “Talking to Jesus” sit a generation apart.'],['Love','“Reckless Love” by Cory Asbury, released through Bethel Music, became a crossover hit in 2018.'],['Holy','“Holy Forever” was written by Chris Tomlin, Phil Wickham, Brian and Jenn Johnson and Jason Ingram.'],['Grace','Phil Wickham co-wrote “This Is Amazing Grace” with Jeremy Riddle and Josh Farro.'],['King','Hillsong Worship\'s “King of Kings” tells the gospel story from the prophets to the early church, verse by verse.'],['Lord','Darlene Zschech wrote “Shout to the Lord” at Hillsong in the early 1990s.'],['Heaven','“Hymn of Heaven” (2021) is the title track of a Phil Wickham album.'],['Father','“Good Good Father” was written by Pat Barrett and Tony Brown of Housefires before Chris Tomlin recorded it.'],['Name','“What a Beautiful Name” was written by Brooke Ligertwood and Ben Fielding.'],['Cross','Hillsong UNITED\'s “Lead Me to the Cross” was written by Brooke Ligertwood (then Fraser).'],['Hallelujah','“Hallelujah” is Hebrew for “praise the Lord” — hallelu-Yah.']];
for(const[w,f]of WORDS)addSongs('cont','Name a worship song with “'+w+'” in the title',f,SONGS.filter(s=>new RegExp('\\b'+w+'\\b','i').test(s.title)),xt,5);
addSongs('cont','Name a worship song with a subtitle in brackets',"Brackets usually hold a song's hook or its working title, like “Oceans (Where Feet May Fail)”.",SONGS.filter(s=>s.title.includes('(')),xt,5);
addSongs('cont','Name a song recorded as a collaboration between two of these artists','Old Church Basement (2021) was a whole album made jointly by Elevation Worship and Maverick City Music.',SONGS.filter(s=>s.ar.length>1&&!s.fl.includes('m')),xt,5);
const by=ks=>SONGS.filter(s=>s.ar.some(a=>ks.includes(a)));
addSongs('cont','Name a song by a Hillsong collective (UNITED, Young & Free or Worship)',ARF.hu,by(['hu','hyf','hw']),xt);
addSongs('cont','Name a song by an Elevation Church band (Elevation Worship or Elevation Rhythm)',ARF.ew,by(['ew','er']),xt);
addSongs('cont','Name a song by Bethel Music, Maverick City Music, UPPERROOM, Mosaic MSC, SEU Worship or New Creation Worship','These six collectives come from Redding, Atlanta, Dallas, Los Angeles, Lakeland and Singapore.',by(['bw','mcm','ur','msc','seu','ncw']),xt);
addSongs('cont','Name a song by Lauren Daigle, CeCe Winans, Kari Jobe, TAYA, Abbie Gamboa or Tiffany Hudson',ARF.cw,by(['ld','cw','kj','taya','ag','th']),xt);
addSongs('cont','Name a song by Chris Tomlin, Phil Wickham, Brandon Lake, Cody Carnes, Aodhán King, Matt Redman or Cory Asbury',ARF.pw,by(['ct','pw','bl','cc','ak','mr','ca']),xt);
const PR=SONGS.filter(s=>s.fl.includes('p'));
addSongs('praise','Name an upbeat praise anthem by one of these artists','Psalm 150 calls for trumpets, tambourines, strings and loud cymbals — the original praise band.',PR,xt);
addSongs('praise','Name a praise song with “Praise”, “Praises” or “Hallelujah” in the title','“Hallelujah” is Hebrew for “praise the Lord”.',SONGS.filter(s=>/\b(praise|praises|hallelujah)\b/i.test(s.title)),xt,5);
addSongs('praise','Name an upbeat praise song by Brandon Lake, Elevation Worship or Maverick City Music',ARF.bl,PR.filter(s=>s.ar.some(a=>['bl','ew','mcm'].includes(a))),xt);
addSongs('praise','Name a gospel-flavoured song by CeCe Winans or Maverick City Music',ARF.cw,by(['cw','mcm']),xt);
addSongs('praise','Name a youth-band song by Elevation Rhythm or Hillsong Young & Free',ARF.er,by(['er','hyf']),xt);
addSongs('praise','Name a high-energy song by Hillsong, Chris Tomlin, Phil Wickham or Kari Jobe','“Our God” and “Famous One” are two of Chris Tomlin\'s fastest anthems.',PR.filter(s=>s.ar.some(a=>['hu','hw','hyf','ct','pw','kj'].includes(a))),xt);
// a rewritten prompt keeps its original id (TYPE!id), so daily rounds and saved bests don't shift
P.forEach(p=>{p.id=p.keep||hstr(p.cat+'|'+p.g+'|'+p.q).toString(36);p.ans.sort((a,b)=>a.t-b.t)});
const BYID=Object.fromEntries(P.map(p=>[p.id,p]));

// ---------- pools ----------
function pool(k){
 if(k==='mix')return P;
 const[c,...r]=k.split(':'),g=r.join(':');
 return P.filter(p=>{if(p.cat!==c)return false;
  if(c==='w')return g==='gen'||(g==='art'?p.g.startsWith('art:'):p.g===g);
  return g==='*'||p.g===g});
}
function poolName(k){
 if(k==='mix')return 'Unlimited · everything';if(k==='daily')return 'Today\'s round';
 const[c,...r]=k.split(':'),g=r.join(':');
 if(c==='w')return 'Worship songs · '+({gen:'General',hymn:'Hymns',praise:'Praise',cont:'Contemporary worship',art:'All worship artists'}[g]||ARN[g.slice(4)]);
 if(c==='b')return 'Bible · '+(g==='*'?'Every book':g);
 return 'Bible characters · '+(g==='*'?'Every character':g);
}
function srcLabel(p){
 if(p.cat==='w')return 'Worship · '+(p.g.startsWith('art:')?ARN[p.g.slice(4)]:{hymn:'Hymns',praise:'Praise',cont:'Contemporary'}[p.g]);
 if(p.cat==='b')return 'Bible · '+(p.g==='*'?'Whole Bible':p.g);
 return 'Characters · '+p.g;
}
const dayNum=t=>Math.round(Date.parse(t+'T00:00:00Z')/864e5);
const EPOCH='2026-11-25';
function seqPick(ids,tag,start,n,used){
 const T_=ids.length,out=[];
 for(let s=start;out.length<n&&s<start+n+T_;s++){
  const cyc=Math.floor(s/T_),perm=ids.slice().sort((a,b)=>hstr(tag+cyc+'|'+a)-hstr(tag+cyc+'|'+b)),id=perm[((s%T_)+T_)%T_];
  if(!used.has(id)){used.add(id);out.push(id)}
 }
 return out;
}
function dailyPick(t){
 const d=dayNum(t)-dayNum(EPOCH),used=new Set();
 const ids=c=>P.filter(p=>p.cat===c&&(!p.d||p.d<=t)).map(p=>p.id).sort();
 const b=seqPick(ids('b'),'b',d*3,3,used),w=seqPick(ids('w'),'w',d*2,2,used),c=seqPick(ids('c'),'c',d*2,2,used);
 return [b[0],w[0],c[0],b[1],w[1],c[1],b[2]].map(id=>BYID[id]);
}

// ---------- near-miss hints ----------
function mask(name,show){return name.split(/\s+/).map(w=>{const c=[...w];let n=0;return c.map((ch,i)=>/[a-z0-9]/i.test(ch)?(n++<show?ch:'_'):ch).join('')}).join(' ')}
const wc=n=>n.split(/\s+/).length;
function elsewhere(p,k){
 if(p.cat==='w'){for(const s of SONGS)if(s.all.some(n=>key(n)===k))return {song:s};return null}
 for(const q of P){if(q===p||q.cat==='w')continue;if(q.ans.some(a=>a.keys.includes(k)))return {prompt:q}}
 return null;
}
function nearMiss(p,input){
 const k=key(input);if(!k)return {type:'none'};
 const ws=wset(input).filter(w=>w.length>=3);
 // ambiguous or partial start
 if(k.length>=3){const pre=p.ans.filter(a=>a.keys.some(kk=>kk.startsWith(k)));
  if(pre.length>1)return {type:'many',n:pre.length};
  if(pre.length===1)return {type:'partial',a:pre[0]}}
 // spelling close
 if(k.length>=4){
  const sk=s=>s.replace(/[aeiouy]/g,''),ks=sk(k),sc=[];
  for(const a of p.ans){let r=9;for(const kk of a.keys){
   const r1=lev(kk,k,40)/Math.max(kk.length,k.length);
   const s2=sk(kk),r2=ks.length>=3&&s2.length>=3?lev(s2,ks,40)/Math.max(s2.length,ks.length):9;
   const lim=kk[0]===k[0]?(Math.max(kk.length,k.length)>=8?0.42:0.34):0.2;
   const rr=Math.min(r1,r2+0.05);if(rr<=lim)r=Math.min(r,rr)}
   if(r<9)sc.push({a,r})}
  sc.sort((x,y)=>x.r-y.r||x.a.t-y.a.t);
  if(sc.length)return {type:'typo',a:sc[0].a,opts:sc.slice(0,3).map(x=>x.a)};
 }
 // shares a word
 if(ws.length){const hits=p.ans.filter(a=>a.names.some(n=>{const s=wset(n);return ws.some(w=>s.includes(w))}));
  if(hits.length){const a=hits[0],w=ws.find(w=>a.names.some(n=>wset(n).includes(w)));return {type:'word',a,w,n:hits.length}}}
 if(k.length>=4){const inn=p.ans.filter(a=>a.keys.some(kk=>kk.includes(k)));if(inn.length)return {type:'inside',n:inn.length}}
 const el=elsewhere(p,k);if(el)return {type:'else',...el};
 return {type:'none'};
}

// Worship artist fun facts: each artist has its own pool, rotated without repeats in a game
const AF={"ld": ["Lauren Daigle grew up in Lafayette, Louisiana.", "“You Say” spent a record 132 weeks at No. 1 on Billboard's Hot Christian Songs chart, between July 2018 and August 2021.", "“You Say” jumped from No. 33 to No. 1 on Hot Christian Songs, the biggest leap to the top in the chart's history.", "Lauren Daigle won two Grammys in 2019: Best Contemporary Christian Music Album for Look Up Child, and Best Contemporary Christian Music Performance/Song for “You Say”.", "“You Say” was Lauren Daigle's first entry on the Billboard Hot 100, peaking at No. 29.", "Lauren Daigle wrote “You Say” with Jason Ingram and Paul Mabury.", "“Thank God I Do” gave Lauren Daigle her sixth Hot Christian Songs No. 1, the most of any woman on that chart."], "mcm": ["Maverick City Music was founded by Tony Brown and Jonathan Jay.", "Maverick City Music won all four Grammys it was nominated for in 2023, tying Beyoncé for the most wins that night.", "Kingdom Book One, with Kirk Franklin, won the 2023 Grammy for Best Gospel Album.", "Maverick City Music and Kirk Franklin recorded “Kingdom” with about 1,500 residents of Everglades Correctional Institution.", "Maverick City Music's album Breathe won the 2023 Grammy for Best Contemporary Christian Music Album.", "“Fear Is Not My Future”, co-written by Brandon Lake, won Maverick City Music a Grammy for Best Contemporary Christian Music Performance/Song.", "Old Church Basement, recorded with Elevation Worship, won the 2022 Grammy for Best Contemporary Christian Music Album."], "ew": ["Elevation Worship began in 2007 at Elevation Church, led by Pastor Steven Furtick.", "Elevation Worship has sold over 1.5 million albums in the United States.", "“The Blessing” was recorded with Kari Jobe and Cody Carnes at Elevation Church in March 2020.", "Hallelujah Here Below (2018), Elevation Worship's eleventh live album, was nominated for a Grammy for Best Contemporary Christian Music Album.", "Elevation Worship's spinoffs include Elevation Rhythm, the church's youth band.", "Chris Brown is one of Elevation Worship's main voices and co-writes many of its songs with Pastor Steven Furtick.", "Old Church Basement (2021), made with Maverick City Music, won the 2022 Grammy for Best Contemporary Christian Music Album."], "er": ["Elevation Rhythm was born from Elevation Church's Wednesday night youth gatherings.", "Elevation Rhythm's first full-length album, Growing Pains (2022), featured “Fake Love” and “Over & Over”.", "Elevation Rhythm's This Is The Gospel (2023) has the original version of “PRAISES”.", "In 2024, the “PRAISES” remix with Forrest Frank hit No. 1 at Christian radio.", "Elevation Rhythm released Victory Lap on 23 May 2025.", "Before headlining, Elevation Rhythm toured supporting Lecrae.", "Elevation Rhythm's first headlining tour, the GOODBYE YESTERDAY TOUR, had 20 dates, three of them in Europe.", "Elevation Rhythm released “At the Altar” with Tiffany Hudson and Abbie Gamboa in 2024."], "cw": ["CeCe Winans was born Priscilla Marie Winans in Detroit, Michigan, on 8 October 1964.", "CeCe Winans has won 18 Grammy Awards, more than any other female gospel artist.", "CeCe Winans' Grammy wins began with “For Always” (1987), sung with her brother BeBe.", "Believe For It won CeCe Winans three Grammys in 2022, including Best Gospel Album.", "CeCe Winans' “That's My King” won the 2025 Grammy for Best Contemporary Christian Music Performance/Song.", "More Than This won CeCe Winans the 2025 Grammy for Best Gospel Album.", "“Come Jesus Come”, CeCe Winans' song with Shirley Caesar, won the Grammy for Best Gospel Performance/Song."], "hu": ["Hillsong UNITED officially formed in 1998 and began calling itself UNITED in 2003.", "“Oceans (Where Feet May Fail)” spent 61 weeks at No. 1 on Billboard's Hot Christian Songs chart, a record until “You Say” broke it.", "“Oceans” first reached No. 1 on Hot Christian Songs in December 2013 and held the top spot for 45 straight weeks.", "“Oceans (Where Feet May Fail)” is from Hillsong UNITED's album Zion (2013).", "“So Will I (100 Billion X)” spent 52 weeks on Billboard's Hot Christian Songs chart.", "TAYA sang lead on Hillsong UNITED's “Oceans” and “Touch the Sky”.", "“Oceans” was Billboard's year-end No. 1 Hot Christian Song in both 2014 and 2016."], "hyf": ["Hillsong Young & Free formed in the summer of 2012 at Hillsong Church in Sydney.", "Hillsong Young & Free's first live album, We Are Young & Free, came out on 1 October 2013.", "“Alive” and “Wake” were Hillsong Young & Free's first singles, both released in 2013.", "Hillsong Young & Free's second live album, Youth Revival, came out on 26 February 2016.", "All of My Best Friends (2020) was nominated for a Grammy for Best Contemporary Christian Music Album.", "Hillsong Young & Free released Todos Mis Mejores Amigos, a Spanish version of All of My Best Friends, in 2021.", "Aodhán King was a founding member of Hillsong Young & Free and left the band in 2025."], "hw": ["“What a Beautiful Name” spent 37 weeks at No. 1 on Billboard's Hot Christian Songs chart.", "“What a Beautiful Name” was written by Ben Fielding and Brooke Ligertwood.", "Hillsong Worship's “Shout to the Lord” was written by Darlene Zschech.", "Hillsong's first live worship album was The Power of Your Love (1992).", "Hillsong has published hundreds of songs on more than 50 albums since 1992.", "“Mighty to Save” was written by Ben Fielding and Reuben Morgan.", "“Hosanna” was written by Brooke Ligertwood, then known as Brooke Fraser."], "ak": ["Aodhán King joined Hillsong's youth ministry in 2004 and taught himself guitar after becoming a Christian in 2005.", "Aodhán King helped found Hillsong Young & Free in 2012 and left the band in 2025.", "Aodhán King helped write Young & Free's “Sinking Deep”, “Highs and Lows” and “This Is Living”.", "Aodhán King's album Beyond Us includes “Time”, a duet with Lauren Daigle.", "Beyond Us includes “Thank You So Much Jesus” with Paul Klein.", "Aodhán King is signed to the label Anotherland.", "Hillsong Young & Free, co-founded by Aodhán King, was nominated twice for a Grammy."], "taya": ["TAYA (Taya Gaukrodger) is from Lismore, New South Wales, and moved to Sydney in 2010.", "TAYA's first solo single, “For All My Life” (2022), was co-written with producers Jon Guerra and Hank Bentley.", "TAYA's self-titled debut album came out on 27 May 2022 on Capitol CMG.", "TAYA's second album, The Reminder (2025), features “Gonna Be Good”.", "TAYA studied classical piano and cello for six years.", "While touring with Hillsong UNITED, TAYA set her own songwriting aside for seven years.", "TAYA sang lead on Hillsong songs including “Oceans”, “Touch the Sky”, “Captain” and “Even When It Hurts”."], "ct": ["Chris Tomlin grew up in Grand Saline, Texas.", "Chris Tomlin co-wrote “Amazing Grace (My Chains Are Gone)”, which adds a new chorus to John Newton's hymn.", "Chris Tomlin led worship for years at Louie Giglio's Passion conferences.", "“Holy Forever” was written by Chris Tomlin with Jason Ingram, Brian and Jenn Johnson and Phil Wickham.", "“Good Good Father”, a hit for Chris Tomlin in 2015, was first recorded by Housefires.", "“Indescribable”, sung by Chris Tomlin, was written by Laura Story and Jesse Reeves.", "Chris Tomlin co-wrote “Our God” with Matt Redman, Jonas Myrin and Jesse Reeves."], "pw": ["Phil Wickham is from San Diego, California.", "Phil Wickham has released a series of live albums called Singalong.", "“Battle Belongs” (2020) and “House of the Lord” (2021) are among Phil Wickham's biggest songs.", "“This Is Amazing Grace” (2013) is from Phil Wickham's album The Ascension.", "Phil Wickham's album Hymn of Heaven came out in 2021.", "Phil Wickham is one of the five writers of “Holy Forever”.", "Phil Wickham co-wrote “Living Hope” with Brian Johnson of Bethel Music."], "bl": ["Brandon Lake's album King of Hearts was nominated for a Grammy for Best Contemporary Christian Music Album.", "“Hard Fought Hallelujah” with Jelly Roll won the 2026 Grammy for Best Contemporary Christian Music Performance/Song.", "“Hard Fought Hallelujah” was Brandon Lake's first entry on the Billboard Hot 100.", "“Hard Fought Hallelujah” was first released as a Brandon Lake solo single in November 2024.", "“Gratitude” spent 28 weeks at No. 1 on Billboard's Hot Christian Songs chart.", "Brandon Lake co-wrote “Graves into Gardens” with Elevation Worship.", "Brandon Lake has won six Grammy Awards."], "cc": ["Cody Carnes' debut album, The Darker the Night / The Brighter the Morning, came out on 15 September 2017.", "Cody Carnes' second album, Run to the Father (2020), was nominated for a Grammy.", "“Run to the Father” was written by Cody Carnes, Matt Maher and Ran Jackson.", "“Firm Foundation (He Won't)” is certified Gold in the US.", "“Til the End of Time” is a Cody Carnes duet with his wife, Kari Jobe.", "Cody Carnes and Brandon Lake released “Too Good to Not Believe” in 2021.", "Cody Carnes recorded “Hope of the Ages” with Hillsong Worship and Reuben Morgan."], "kj": ["Kari Jobe was born in Waco, Texas, on 6 April 1981.", "Kari Jobe first drew wide notice singing “Revelation Song” while studying at Christ for the Nations Institute.", "Kari Jobe served as a worship pastor at Gateway Church in Southlake, Texas.", "Kari Jobe's self-titled debut album came out on 10 February 2009.", "Le Canto, the Spanish version of Kari Jobe's debut album, won a Dove Award for Spanish Language Album of the Year.", "Majestic (2014) was recorded live at the Majestic Theatre in Dallas.", "“The Blessing” was written by Kari Jobe, Cody Carnes, Steven Furtick and Chris Brown."], "bw": ["Bethel Music comes from Bethel Church, whose senior leader is Bill Johnson.", "“Reckless Love” by Cory Asbury was released on Bethel Music in 2017.", "Jonathan David Helser sings lead on Bethel's “No Longer Slaves”.", "Steffany Gretzinger sang Bethel's 2017 version of “King of My Heart”, written by John Mark and Sarah McMillan.", "“Goodness of God”, sung by Jenn Johnson, is from Bethel Music's album Victory (2019).", "Bethel Music's “Holy Forever (Live)” with Jenn Johnson and CeCe Winans was nominated for a Grammy.", "Jesus Culture began as a youth ministry of Bethel Church."], "ur": ["Elyssa Smith wrote UPPERROOM's “Surrounded (Fight My Battles)”.", "Elyssa Smith moved to Dallas in 2010 to attend Christ for the Nations Institute and joined UPPERROOM in 2013.", "Elyssa Smith is a Grammy-nominated songwriter.", "Move Your Heart, recorded at UPPERROOM with Maverick City Music, hit No. 1 on Billboard's Top Gospel Albums chart.", "UPPERROOM's first Moments album (2018) included covers of “Tremble” and “Defender”.", "UPPERROOM released Love Note in 2021.", "UPPERROOM worship leaders include Meredith Mauldin, Elyssa Smith and Abbie Gamboa."], "msc": ["Mosaic MSC is led by worship pastor Mariah McManus, daughter of Mosaic's lead pastor, Erwin McManus.", "Mariah McManus left a career in the general music industry to lead Mosaic's worship community.", "Glory & Wonder (2016) was Mosaic MSC's debut album on Essential Worship.", "“Tremble” is certified Platinum in the US and spent 33 weeks on Billboard's Hot Christian Songs chart.", "Mosaic MSC's first studio EP, Heaven (2018), was produced by Chad Copelin.", "Mosaic church began as Bethel Baptist Church in 1943 and today draws about 60 nationalities.", "Mosaic MSC toured with Elevation Worship, Bethel Music and Vertical Worship on the 2018 Outcry Tour."], "mr": ["Matt Redman wrote “The Heart of Worship” in 1997.", "“10,000 Reasons (Bless the Lord)” won two Grammys in 2013.", "“Blessed Be Your Name” draws on Job 1:21: “The Lord gave, and the Lord hath taken away”.", "Matt Redman co-wrote “Our God” with Chris Tomlin, Jonas Myrin and Jesse Reeves.", "Matt Redman co-wrote “10,000 Reasons” with Jonas Myrin.", "Matt Redman led worship at the Soul Survivor festivals for young people in England."], "seu": ["SEU Worship is signed to Essential Worship and Provident Label Group.", "SEU Worship's “What a God” has more than 150 million streams.", "“What a God” was nominated for Worship Song of the Year at the 2025 Dove Awards.", "SEU Worship toured on Winter Jam in 2024.", "SEU Worship recorded “Wild Rushing Wind” at a gathering that started a 10-day outpouring of worship on campus.", "SEU Worship released two albums in 2022: Walk With You and Heart Cry.", "SEU Worship recorded Heaven Life at Southeastern University's annual conference."], "ag": ["Abbie Gamboa was born on 10 December 1994 in Texas.", "Abbie Gamboa's debut album, pure, came out on 5 May 2023 and centres on being a daughter, sister, wife and mother.", "Abbie Gamboa made Intimidad, a Spanish-language worship album, with Brazilian worship leader Marcos Brunet.", "Abbie Gamboa led UPPERROOM's “eyes locked on the king”, “dad song” and “too good” in 2023.", "Abbie Gamboa sang on Elevation Rhythm's “At the Altar” with Tiffany Hudson in 2024.", "Abbie Gamboa is featured on Bethel Music's “Center (Live)”.", "Abbie Gamboa sang with Rick Pino on “Nothing Else” and “High and Lifted Up”."], "th": ["Tiffany Hudson released her debut solo album, Hidden Here, in July 2023.", "Hidden Here was produced by Josh Holiday, Bubele Booi and Jason Ingram.", "Tiffany Hudson co-wrote “Break the Bottle” with Steffany Gretzinger, who sings on it with her.", "Tiffany Hudson wrote “Togetherness”, a cry for unity, with Mitch Wong and Joe L Barnes.", "Tiffany Hudson leads Elevation Worship's “So Be It” and “Jesus Be the Name”.", "Tiffany Hudson sang lead on Elevation Worship's “Might Get Loud” (2021) with Chris Brown and Brandon Lake.", "Tiffany Hudson co-wrote “The Wonderful Blood” with Josh Holiday and Abbie Gamboa."], "ca": ["Cory Asbury's “Reckless Love” was released on Bethel Music in 2017.", "Cory Asbury's albums include Reckless Love, To Love a Fool and Pioneer.", "Cory Asbury was a worship leader at the International House of Prayer in Kansas City before joining Bethel Music.", "Cory Asbury co-wrote “Reckless Love” with Caleb Culver and Ran Jackson.", "“Reckless Love” was nominated for a Grammy for Best Contemporary Christian Music Performance/Song.", "“The Father's House” is the opening single from To Love a Fool."], "bjj": ["Brian Johnson is the son of Bill Johnson, senior leader of Bethel Church in Redding.", "Jenn Johnson sings lead on “Goodness of God”.", "Brian and Jenn Johnson both co-wrote “Holy Forever” with Chris Tomlin, Jason Ingram and Phil Wickham.", "Brian Johnson co-wrote “Living Hope” with Phil Wickham.", "Jenn Johnson sings on Bethel Music's “Holy Forever (Live)” with CeCe Winans, which was nominated for a Grammy.", "Brian Johnson co-wrote “No Longer Slaves” with Jonathan David Helser and Joel Case.", "“Goodness of God” was written by Ed Cash, Jason Ingram, Ben Fielding, Brian Johnson and Jenn Johnson."]};
// New Creation Church ministry fun facts, rotated on New Creation Worship prompts (source: newcreation.org.sg)
const NCF=["Rock Kidz is New Creation Church's children's ministry for kids aged 12 and below, led by Pastor Lian. It's named so that children build their lives on Christ the Rock.", "Rock Kidz has four age groups: Rock Kidz Junior (2 to 6), Mighty (7 and 8), Alive (9 and 10) and Fearless! (11 and 12).", "The Zone is New Creation Church's youth ministry for secondary and tertiary students and full-time national servicemen. It is led by Pastor Daniel Chong and has three youth groups: DARE, Arrow and Varsity.", "DARE is The Zone's youth group for secondary school students aged 13 to 17, led by Pastor Alvin. It meets once a fortnight on Saturdays at 1pm at The Star Theatre.", "Arrow is The Zone's youth group for post-secondary students and full-time national servicemen aged 17 to 23, led by Pastor Jude. It meets once a fortnight on Saturdays at 4pm at The Star Theatre.", "Varsity is The Zone's youth group for university students aged 19 to 25, led by Deacon David. It meets once a month on Fridays at 7.45pm at Capitol Theatre.", "Re:Gen is New Creation Church's young adults community for working adults, led by Pastor Lawrence, Pastor Matthews, Pastor Louis, Pastor Tina and Deacon Joe. Its motto is Reach, Revive, Release.", "New Creation Church's Chinese ministry, led by Pastor Mark, holds Mandarin and Hokkien services every Sunday at the Marina Bay Sands Ballrooms.", "The Gospel Partner app carries Pastor Joseph Prince's free daily devotional and a Bible with six free translations. Subscribers also get the Joseph Prince Study Bible.", "The Gospel Partner app is published by an independent publishing house, not by New Creation Church. Its iOS app is built by 22 Media in Singapore.", "New Creation Church's worship ministry is led by Pastor Gabriel. Its vision: to behold Jesus and proclaim the gospel through songs."];
AF.ncw=NCF;
P.forEach(p=>{if(p.cat!=='w')return;
 let ks;if(p.g.startsWith('art:'))ks=[p.g.slice(4)];else ks=[...new Set(p.ans.flatMap(a=>a.song?a.song.ar:[]))];
 const pool=[p.f,...ks.map(k=>ARF[k]),...ks.flatMap(k=>AF[k]||[])].filter(Boolean);
 if(pool.length>1)p.fs=[...new Set(pool)];
});
if(typeof module!=='undefined')module.exports={P,SONGS,pool,match,dailyPick,poolName,srcLabel,OT,NT,CHARS,AR,T,nearMiss,mask};
