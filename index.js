import{a as p,S as f,i as u}from"./assets/vendor-Qob_5Ba8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const o={gallery:document.querySelector(".gallery"),form:document.querySelector(".query-form"),loader:document.querySelector(".loader")},y="28534332-8f968f9e2a1846e3bb62dda3d",c="query",d={overlay:!0,overlayOpacity:1,captions:!0,captionPosition:"bottom",captionType:"attr",captionsData:"alt",captionDelay:250},g="https://pixabay.com/api";p.defaults.baseURL=g;async function h(a){var l;const t={key:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return((l=(await p.get("/",{params:t})).data)==null?void 0:l.hits)||null}catch(s){return console.error("Fetch pixabay error: ",s instanceof Error?s.message:s),null}}function L(a){return a.map(({webformatURL:t,tags:l,likes:s,views:e,comments:r,downloads:i,largeImageURL:m})=>`
            <li class="gallery-card">
                <a class="gallery-link" href="${m}">
                    <img class="gallery-image" src="${t}" alt="${l}" height=312 width=200>
                    <ul class="statistics">
                        <li class="stat-element">
                            <p class="stat-name">Likes</p>
                            <p class="stat-value">${s}</p>
                        </li>

                        <li class="stat-element">
                            <p class="stat-name">Views</p>
                            <p class="stat-value">${e}</p>
                        </li>

                        <li class="stat-element">
                            <p class="stat-name">Comments</p>
                            <p class="stat-value">${r}</p>
                        </li>

                        <li class="stat-element">
                            <p class="stat-name">Downloads</p>
                            <p class="stat-value">${i}</p>
                        </li>
                    </ul>
                </a>
            </li>
      `).join("")}let n=q(o.form);o.form.addEventListener("input",v);o.form.addEventListener("submit",b);const S=new f(".gallery li a",d);function v(a){n=a.target.value.trim(),localStorage.setItem(c,n)}async function b(a){if(a.preventDefault(),!n)return;o.gallery.innerHTML="",o.loader.style.display="block";const t=await h(n);t?t.length===0?u.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(o.gallery.innerHTML=L(t),S.refresh(),n="",localStorage.removeItem(c),o.form.reset()):u.error({message:"Sorry, there was an error while getting photos. Please try again!",position:"topRight"}),o.loader.style.display="none"}function q(a){const t=localStorage.getItem(c);if(t)return a.elements.query.value=t,t||""}
//# sourceMappingURL=index.js.map
