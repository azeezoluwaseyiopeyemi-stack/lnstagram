const people=[
 ["your_story","12"],["sarah.styles","47"],["mika.jpg","32"],["theo.daily","11"],["amara","5"],["jules.jpeg","24"],["noahcreates","16"],["lena","8"]
];
const posts=[
 {user:"sarah.styles",img:"photo-1534528741775-53994a69daeb",avatar:47,likes:"2,481",caption:"A little reminder to make room for the things that make you feel alive. ✨",comments:38,time:"2 HOURS AGO",verified:true},
 {user:"mika.jpg",img:"photo-1524504388940-b1c1722653e1",avatar:32,likes:"986",caption:"Golden hour is always a good idea ☀️",comments:21,time:"5 HOURS AGO"},
 {user:"theo.daily",img:"photo-1519608487953-e999c86e7455",avatar:11,likes:"4,203",caption:"Somewhere between the city and the sea.",comments:104,time:"1 DAY AGO",verified:true}
];
const photo=(id,w=700)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
const avatar=(id)=>`https://i.pravatar.cc/120?img=${id}`;
const stories=document.querySelector("#stories");
people.forEach(([name,id],i)=>{const el=document.createElement("div");el.className="story";el.innerHTML=`<div class="story-ring"><img src="${avatar(id)}" alt=""></div><span>${name}</span>`;el.onclick=()=>toast(`${name}’s story is part of this demo.`);stories.append(el)});
const postsEl=document.querySelector("#posts");
posts.forEach((p,i)=>{
 const article=document.createElement("article");article.className="post";
 article.innerHTML=`<div class="post-head"><img class="avatar" src="${avatar(p.avatar)}" alt=""><div><div class="post-user">${p.user} ${p.verified?'<span class="verified">●</span>':''}</div><div class="post-time">${p.time}</div></div><button class="post-more" aria-label="More options" data-toast="More post options">···</button></div>
 <img class="post-image" src="${photo(p.img,900)}" alt="Lifestyle post">
 <div class="actions"><button class="action like" aria-label="Like">♡</button><button class="action comment" aria-label="Comment">♧</button><button class="action share" aria-label="Share">➤</button><button class="action save" aria-label="Save">♧</button></div>
 <p class="likes"><strong>${p.likes} likes</strong></p><p class="caption"><strong>${p.user}</strong>${p.caption}</p><div class="comments">View all ${p.comments} comments</div><input class="add-comment" placeholder="Add a comment…" aria-label="Add a comment">`;
 postsEl.append(article);
});
document.querySelectorAll(".like").forEach(b=>b.addEventListener("click",()=>{b.classList.toggle("liked");b.textContent=b.classList.contains("liked")?"♥":"♡"}));
document.querySelectorAll(".comment").forEach(b=>b.onclick=()=>b.closest(".post").querySelector(".add-comment").focus());
document.querySelectorAll(".share,.save,.post-more").forEach(b=>b.onclick=()=>toast("This action is a front-end demo."));
document.querySelectorAll(".add-comment").forEach(inp=>inp.addEventListener("keydown",e=>{if(e.key==="Enter"&&inp.value.trim()){toast("Comment preview: "+inp.value.trim());inp.value=""}}));
const suggestions=[["jules.jpeg",24],["lena.makes",8],["noahcreates",16],["amira.studio",5],["daily.frames",31]];
const sug=document.querySelector("#suggestions");
suggestions.forEach(([name,id])=>{const row=document.createElement("div");row.className="suggestion";row.innerHTML=`<img class="avatar" src="${avatar(id)}" alt=""><div class="suggestion-copy"><strong>${name}</strong><small>Suggested for you</small></div><button class="link-btn">Follow</button>`;row.querySelector("button").onclick=e=>{e.target.textContent=e.target.textContent==="Follow"?"Following":"Follow";toast(`${name}: demo follow state updated.`)};sug.append(row)});
const grid=document.querySelector("#exploreGrid");
["photo-1515886657613-9f3515b0c78f","photo-1529139574466-a303027c1d8b","photo-1517841905240-472988babdf9","photo-1524504388940-b1c1722653e1","photo-1534528741775-53994a69daeb","photo-1500530855697-b586d89ba3ee","photo-1490481651871-ab68de25d43d","photo-1519608487953-e999c86e7455","photo-1506794778202-cad84cf45f1d"].forEach(id=>{const img=document.createElement("img");img.src=photo(id,500);img.alt="Explore demo image";img.onclick=()=>toast("Explore post preview");grid.append(img)});
function toast(message){const t=document.querySelector("#toast");t.textContent=message;t.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove("show"),2300)}
document.querySelectorAll("[data-toast]").forEach(b=>b.addEventListener("click",()=>toast(b.dataset.toast)));
function navigate(page){const feed=document.querySelector("#feedPage"),alt=document.querySelector("#alternatePage");document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===page));if(page==="Home"){feed.classList.remove("hidden");alt.classList.add("hidden");return}feed.classList.add("hidden");alt.classList.remove("hidden");document.querySelector("#alternateTitle").textContent=page;const descriptions={Search:"Search creators and discover new accounts.",Explore:"Discover photos, places and creators.",Reels:"Short-form video experiences coming soon to this demo.",Messages:"Your demo conversations would appear here.",Notifications:"You're all caught up in this demo.",Create:"Create a post — publishing is disabled in this demo.",Profile:"demo.creator · Your demonstration profile."};document.querySelector("#alternateDesc").textContent=descriptions[page]||"Explore this demo page.";grid.style.display=page==="Explore"?"grid":"none";if(page!=="Explore")toast(`${page} view opened.`)}
document.querySelectorAll("[data-page]").forEach(b=>b.addEventListener("click",()=>navigate(b.dataset.page)));
document.querySelector("#seeAll").onclick=()=>toast("Showing suggested demo accounts.");
