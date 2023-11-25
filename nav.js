function showContent(sectionId) {
  var sections = document.getElementsByClassName('content-section');
  for (var i = 0; i < sections.length; i++) {
      if (sections[i].id === sectionId) {
          sections[i].classList.add('active');
      } else {
          sections[i].classList.remove('active');
      }
  }
}