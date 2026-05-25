window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");
  // Collect images inside main content to estimate loading progress
  const imgNodes = Array.from(document.querySelectorAll('#main-content img'));
  const assets = Array.from(new Set(imgNodes.map(i => i.src))).filter(Boolean);

  let loaded = 0;
  const total = Math.max(assets.length, 1);
  let done = false;
  function step(){
    loaded++;
    if(loaded >= total && !done){
      done = true;
      // short delay for nicer UX
      setTimeout(hideLoader, 2400);
    }
  }

  function hideLoader(){
    if(!loader) return;
    loader.classList.add('hidden');
    // reveal main content after loader transitions
    setTimeout(()=> mainContent.classList.add('show'), 300);
  }

  // Dots animate via CSS; no numeric progress shown.

  // Preload assets
  if(assets.length){
    assets.forEach(src => {
      const img = new Image();
      img.onload = step;
      img.onerror = step;
      img.src = src;
    });
  } else {
    // no images, hide quickly
    setTimeout(() => hideLoader(), 300);
  }

  // Safety max timeout in case some resources hang
  setTimeout(() => {
    if(!done){ hideLoader(); }
  }, 4500);

  // Ensure we reveal the page shortly after the window 'load' event
  // (in case preloading logic missed something) — small delay for UX
  setTimeout(() => { if(!done) hideLoader(); }, 300);

});
/* DARK MODE */

const toggle = document.querySelector(".theme-toggle");
if(toggle){
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const icon = toggle.querySelector("i");
    if(!icon) return;
    if(document.body.classList.contains("dark")){
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }else{
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  });
}