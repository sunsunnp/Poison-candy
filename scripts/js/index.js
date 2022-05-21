function gotoDiv(id) {
    const yOffset = -75;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
  