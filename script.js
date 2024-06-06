var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if(!items[i].classList.contains("in-view")){
        items[i].classList.add("in-view");
      }
    } else if(items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);


window.addEventListener('scroll', function() {
    const statistiquesSection = document.querySelector('.statistiques');
    const beforeElement = statistiquesSection.querySelector('::before');
    const sectionTop = statistiquesSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight) {
        // La section est visible
        const translateValue = (windowHeight - sectionTop) * 0.4; // Ajustez ce facteur pour changer la vitesse du parallaxe
        statistiquesSection.style.setProperty('--before-top', `${-15 - translateValue}px`);
    }
});

window.addEventListener('scroll', function() {
  const stats = document.querySelectorAll('.stat');
  
  stats.forEach(stat => {
    const position = stat.getBoundingClientRect().top;
    const windowHeight = window.innerHeight / 2+200; // moitié de la hauteur de la fenêtre
    
    if (position < windowHeight) {
      stat.style.opacity = 1;
    }
  });
});


function animateValue(element) {
  const targetValue = parseInt(element.getAttribute('data-value'));
  const p = element.nextElementSibling;
  let currentValue = parseInt(p.textContent);
  const increment = targetValue / 100;

  const interval = setInterval(() => {
    currentValue += increment;
    p.textContent = Math.round(currentValue);
    if (currentValue >= targetValue) {
      clearInterval(interval);
      p.textContent = targetValue;
    }
  }, 10);
}


