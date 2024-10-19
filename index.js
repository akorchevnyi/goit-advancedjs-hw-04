import{a as w,S as b,i as g}from"./assets/vendor-Qob_5Ba8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const r={gallery:document.querySelector(".gallery"),form:document.querySelector(".query-form"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn"),endWarningText:document.querySelector(".end-warning")},P="28534332-8f968f9e2a1846e3bb62dda3d",p="query",q={overlay:!0,overlayOpacity:1,captions:!0,captionPosition:"bottom",captionType:"attr",captionsData:"alt",captionDelay:250},x="https://pixabay.com/api";w.defaults.baseURL=x;async function T(e,t){const n={key:P,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t};try{const s=await w.get("/",{params:n}),{hits:o,totalHits:a}=(s==null?void 0:s.data)||{};return o?{photos:o,isNext:15*t<a}:{}}catch(s){return console.error("Fetch pixabay error: ",s instanceof Error?s.message:s),{}}}const c={show(){r.loader.style.display="block"},hide(){r.loader.style.display="none"}};function m(e){return e.map(({webformatURL:t,tags:n,likes:s,views:o,comments:a,downloads:l,largeImageURL:v})=>`
            <li class="gallery-card">
                <a class="gallery-link" href="${v}">
                    <img class="gallery-image" src="${t}" alt="${n}" height="312" width="200" loading="lazy">
                    <ul class="statistics">
                        <li class="stat-element">
                            <p class="stat-name">Likes</p>
                            <p class="stat-value">${s}</p>
                        </li>

                        <li class="stat-element">
                            <p class="stat-name">Views</p>
                            <p class="stat-value">${o}</p>
                        </li>

                        <li class="stat-element">
                            <p class="stat-name">Comments</p>
                            <p class="stat-value">${a}</p>
                        </li>

                        <li class="stat-element">
                            <p class="stat-name">Downloads</p>
                            <p class="stat-value">${l}</p>
                        </li>
                    </ul>
                </a>
            </li>
      `).join("")}const y={show(e){r.gallery.innerHTML=m(e)},addNewPhotos(e){const t=m(e);r.gallery.innerHTML=r.gallery.innerHTML+t},clear(){r.gallery.innerHTML=""}},d={show(){r.loadBtn.style.display="block",r.loadBtn.addEventListener("click",f)},hide(){r.loadBtn.removeEventListener("click",f),r.loadBtn.style.display="none"}},i={show(){r.endWarningText.style.display="block"},hide(){r.endWarningText.style.display="none"}};let u=O(r.form),h=1;r.form.addEventListener("input",B);r.form.addEventListener("submit",E);const L=new b(".gallery li a",q);function B(e){u=e.target.value.trim(),localStorage.setItem(p,u)}async function E(e){if(e.preventDefault(),!u)return;h=1,d.hide(),i.hide(),y.clear(),c.show();const{photos:t,isNext:n}=await S();t!=null&&t.length&&(y.show(t),n&&d.show(),L.refresh(),localStorage.removeItem(p),r.form.reset(),h+=1),c.hide()}async function f(){c.show(),d.hide(),i.hide();const{photos:e,isNext:t}=await S();(e==null?void 0:e.length)===0?i.show():e!=null&&e.length&&(y.addNewPhotos(e),N(),t?d.show():i.show(),L.refresh(),h+=1),c.hide()}async function S(){const e=await T(u,h),{photos:t}=e;if(t)t.length===0&&(console.log("==== 0 ==> ",0),g.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}));else{g.error({message:"Sorry, there was an error while getting photos. Please try again!",position:"topRight"});return}return e}function O(e){const t=localStorage.getItem(p);if(t)return e.elements.query.value=t,t||""}function N(){const t=document.querySelector(".gallery-card").getBoundingClientRect().height+32;window.scrollBy({top:t*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
