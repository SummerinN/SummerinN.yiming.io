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

document.querySelectorAll('.Projects').forEach(function(project) {
    project.addEventListener('click', function() {
        var details = this.querySelector('.details');
        if (details.style.display === 'none') {
            details.style.display = 'block';
            details.classList.add('open');
        } else {
            details.classList.remove('open');
            setTimeout(function() {
                details.style.display = 'none';
            }, 500); // 等待动画完成
        }
    });
});

document.querySelectorAll('.close-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.stopPropagation(); // 阻止事件冒泡
        var details = this.parentElement;
        details.classList.remove('open');
        setTimeout(function() {
            details.style.display = 'none';
        }, 500); // 等待动画完成
    });
});
