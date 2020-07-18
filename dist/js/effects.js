document.addEventListener(
  'DOMContentLoaded',
  () => {
    console.log('tớ xin log');
    const e = document.getElementById('btnSideBar'),
      t = document.getElementById('page'),
      o = document.getElementById('overlay'),
      l = document.getElementById('navRight'),
      n = document.getElementById('crtSidebarClose'),
      d = document.getElementById('aboutMe'),
      c = document.getElementById('skills'),
      s = document.getElementById('education'),
      i = document.getElementById('interested'),
      m = document.getElementById('btnAboutme'),
      a = document.getElementById('btnSkill'),
      r = document.getElementById('btnEducation'),
      y = document.getElementById('btnLove'),
      u = document.getElementById('scroolToTop');
    (m.onclick = () => {
      d.scrollIntoView();
    }),
      (a.onclick = () => {
        c.scrollIntoView();
      }),
      (r.onclick = () => {
        s.scrollIntoView();
      }),
      (y.onclick = () => {
        i.scrollIntoView();
      }),
      (u.onclick = () => {
        u.classList.add('hidden-scrool');
      }),
      (e.onclick = () => {
        console.log('btnSideBar click'),
          t.classList.add('hidden-scroll'),
          o.classList.remove('hidden-overlay'),
          l.classList.remove('nav-right-hidden');
      }),
      (o.onclick = () => {
        t.classList.remove('hidden-scroll'),
          o.classList.add('hidden-overlay'),
          l.classList.add('nav-right-hidden');
      }),
      (n.onclick = o.onclick),
      (document.getElementById('scroolToTop').onclick = () => {
        u.classList.add('hidden-scroll'),
          u.classList.remove('visibility-scroll'),
          setTimeout(() => (u.style.display = 'none'), 600),
          document.body.scrollIntoView();
      });
  },
  !1,
),
  (window.onscroll = () => {
    const e = document.documentElement.scrollTop,
      t = document.body.scrollHeight,
      o = document.getElementById('scroolToTop');
    e > 0.1 * t
      ? (o.classList.add('visibility-scroll'),
        o.classList.remove('hidden-scroll'),
        setTimeout(() => (o.style.display = 'block'), 600))
      : (o.classList.add('hidden-scroll'),
        o.classList.remove('visibility-scroll'),
        setTimeout(() => (o.style.display = 'none'), 600));
  });
