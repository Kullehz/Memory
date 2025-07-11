const circle = document.querySelector('.circle');
    const path1El = document.querySelector('#path1');
    const path2El = document.querySelector('#path2');
    const path3El = document.querySelector('#path3');

    const path1 = path1El.getAttribute('d');
    const path2 = path2El.getAttribute('d');
    const path3 = path3El.getAttribute('d');

    function setPath(pathName) {
      if (pathName === 'path1') {
        circle.style.offsetPath = `path('${path1}')`;
        path1El.style.display = 'inline';
        path2El.style.display = 'none';
        path3El.style.display = 'none';
        document.getElementById('end1').style.display = 'inline';
        document.getElementById('end2').style.display = 'none';
        document.getElementById('end3').style.display = 'none';
      } else if (pathName === 'path2') {
        circle.style.offsetPath = `path('${path2}')`;
        path1El.style.display = 'none';
        path2El.style.display = 'inline';
        path3El.style.display = 'none';
        document.getElementById('end1').style.display = 'none';
        document.getElementById('end2').style.display = 'inline';
        document.getElementById('end3').style.display = 'none';
      } else if (pathName === 'path3') {
        circle.style.offsetPath = `path('${path3}')`;
        path1El.style.display = 'none';
        path2El.style.display = 'none';
        path3El.style.display = 'inline';
        document.getElementById('end1').style.display = 'none';
        document.getElementById('end2').style.display = 'none';
        document.getElementById('end3').style.display = 'inline';
      }
    }

    // Default path on load
    setPath('path1');

    // Tooltip logic
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip-box';
    document.body.appendChild(tooltip);

    const targets = document.querySelectorAll('.tooltip-target');

    targets.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        tooltip.textContent = el.getAttribute('data-tooltip');
        tooltip.style.left = (e.pageX + 10) + 'px';
        tooltip.style.top = (e.pageY + 10) + 'px';
        tooltip.style.opacity = 1;
      });

      el.addEventListener('mouseleave', () => {
        tooltip.style.opacity = 0;
      });
    });

    document.getElementById('path1').addEventListener('click', function() {
      alert('Path 1 clicked');
    });

    const svg =  document.querySelector('svg');
    svg.addEventListener('click', function(e) {
      const pt = svg.createSVGPoint();
      pt.x =  event.clientX;
      pt.y = event.clientY;
      const svgP = pt.matrixTransform(svg.getScreenCTM().inverse());
      alert(`SVG Coordinates: x=${svgP.x}, y=${svgP.y}`);
    });

    