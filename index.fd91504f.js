var r,n=document.querySelector("ul");function e(r){return Number(r.dataset.salary.replace(/[^\d]/g,""))}(r=Array.from(n.children)).sort(function(r,n){return e(n)-e(r)}),r.forEach(function(r){return n.appendChild(r)}),console.log(Array.from(n.children).map(function(r){return{name:r.textContent.trim(),salary:e(r)}}));
//# sourceMappingURL=index.fd91504f.js.map
