/* Renders the site from content.js. You should not need to edit this file. */
(function (root) {
  var C = root.PORTFOLIO;
  var esc = function (s) { return String(s == null ? '' : s); };
  var img = function (f) { return f + '.jpg'; };

  function tagHtml(t) { return '<span class="tag ' + esc(t[1]) + '">' + esc(t[0]) + '</span>'; }
  function tagsHtml(ts) { return '<div class="tags">' + (ts || []).map(tagHtml).join('') + '</div>'; }

  function blockHtml(b) {
    if (b.p) return '<p>' + b.p + '</p>';
    if (b.h3) return '<h3>' + b.h3 + '</h3>';
    if (b.list) return '<ul>' + b.list.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>';
    if (b.tags) return tagsHtml(b.tags);
    if (b.callout) return '<div class="callout' + (b.type ? ' ' + b.type : '') + '">' + b.callout + '</div>';
    if (b.table) {
      return '<table>' + b.table.map(function (r, i) {
        return '<tr>' + r.map(function (c) { return '<' + (i ? 'td' : 'th') + '>' + c + '</' + (i ? 'td' : 'th') + '>'; }).join('') + '</tr>';
      }).join('') + '</table>';
    }
    if (b.flow) return '<div class="flow">' + b.flow.map(function (s) { return '<div><b>' + s[0] + '</b>' + s[1] + '</div>'; }).join('') + '</div>';
    if (b.role) {
      var li = function (xs) { return xs.map(function (x) { return '<li>' + x + '</li>'; }).join(''); };
      return '<div class="role"><div class="mine"><h4>' + (b.role.mineTitle || 'My contribution') + '</h4><ul>' + li(b.role.mine) + '</ul></div>' +
        (b.role.team && b.role.team.length ? '<p class="with"><b>' + (b.role.teamTitle && b.role.teamTitle !== 'What the team did' ? b.role.teamTitle : 'Built with the team') + '.</b> ' + b.role.team.join(' ') + '</p>' : '') + '</div>';
    }
    if (b.images) {
      var one = b.images.length === 1;
      if (one) return '<div class="fig"><figure class="one"><img src="' + img(b.images[0][0]) + '" alt="' + esc(b.images[0][1]) + '" loading="lazy"><figcaption>' + b.images[0][1] + '</figcaption></figure></div>';
      return '<div class="fig"><div class="row r' + b.images.length + '">' + b.images.map(function (i) {
        return '<figure><img src="' + img(i[0]) + '" alt="' + esc(i[1]) + '" loading="lazy"' + (b.contain ? ' class="contain"' : '') + '><figcaption>' + i[1] + '</figcaption></figure>';
      }).join('') + '</div></div>';
    }
    return '';
  }

  function header() {
    return '<header class="top"><div class="wrap"><a class="brand" href="index.html">' + C.site.name + '</a><nav>' +
      '<a href="index.html#projects">Projects</a><a href="more.html">More builds</a><a href="index.html#experience">Experience</a><a href="index.html#contact">Contact</a></nav></div></header>';
  }
  function footer() {
    return '<footer><div class="wrap">&copy; ' + new Date().getFullYear() + ' ' + C.site.fullName + ' &middot; Mechanical Engineering, The University of Texas at Austin</div></footer>';
  }

  function card(p) {
    var im = p.cardImage
      ? '<img src="' + img(p.cardImage) + '" alt="' + esc(p.title) + '" loading="lazy"' + (p.cardPos ? ' style="object-position:' + p.cardPos + '"' : '') + '>'
      : '<div class="ph">strain<br>&darr;<br>reconstructed shape<br>&darr;<br>compare with VICON</div>';
    return '<a class="card" href="project.html?p=' + p.id + '">' + im + '<div class="body"><div class="tags"><span class="tag">' + p.cardOrg + '</span>' +
      (p.cardTags || []).map(tagHtml).join('') + '</div><h3>' + p.title + '</h3><p>' + p.cardBlurb + '</p><span class="more-link">Read case study &rarr;</span></div></a>';
  }

  function chips(items) { return (items || []).map(function (x) { return '<span class="chip">' + x + '</span>'; }).join(''); }

  function home() {
    var s = C.site, L = C.leadership;
    var visual = s.photo
      ? '<figure class="photo"><img src="' + img(s.photo) + '" alt="' + esc(s.fullName) + '">' + (s.photoCaption ? '<figcaption>' + s.photoCaption + '</figcaption>' : '') + '</figure>'
      : '<figure class="photo wide"><img src="' + img(s.heroImage) + '" alt="' + esc(s.heroCaption) + '"><figcaption>' + s.heroCaption + '</figcaption></figure>';
    return header() +
      '<section class="hero"><div class="wrap"><div class="hero-text"><p class="eyebrow">' + s.eyebrow + '</p><h1>' + s.fullName + '</h1><p class="tagline">' + s.headline + '</p>' + (s.degree ? '<p class="degree">' + s.degree + '</p>' : '') +
      '<div class="chips">' + chips(s.focus) + '</div><p class="lede">' + (s.intro || s.lede) + '</p>' +
      (s.looking ? '<p class="looking">' + s.looking + '</p>' : '') +
      '<div class="btns"><a class="btn primary" href="#projects">See projects</a><a class="btn" href="' + s.resume + '">Resume (PDF)</a><a class="btn" href="' + s.linkedin + '">LinkedIn</a></div></div>' +
      visual + '</div></section>' +
      '<section id="projects"><div class="wrap"><p class="kicker">Featured work</p><h2>Projects</h2><p class="sub">' + s.projectsIntro + ' <a href="more.html">Smaller builds &rarr;</a></p><div class="grid">' +
      C.projects.map(card).join('') + '</div></div></section>' +
      '<section id="experience"><div class="wrap"><p class="kicker">Experience</p><h2>Where I have worked</h2><ul class="tl" style="margin-top:20px">' +
      C.experience.map(function (e) {
        var t = e.link ? '<a href="' + e.link + '">' + e.title + '</a>' : e.title;
        return '<li><span class="when">' + e.dates + '</span><span class="what"><b>' + t + '</b>' + (e.text ? '<br>' + e.text : '') + '</span></li>';
      }).join('') + '</ul></div></section>' +
      '<section id="skills"><div class="wrap"><p class="kicker">Skills</p><h2>Tools and processes</h2><div class="skillgrid">' +
      C.skills.map(function (k) {
        var items = Array.isArray(k.items) ? k.items : String(k.items).split(',').map(function (x) { return x.trim(); });
        return '<div class="skillcard"><h4>' + k.group + '</h4><div class="chips dark">' + chips(items) + '</div></div>';
      }).join('') + '</div></div></section>' +
      (L ? '<section id="leadership"><div class="wrap"><p class="kicker">Beyond engineering</p><h2>' + L.title + '</h2><p class="sub" style="margin-bottom:16px">' + L.text + '</p><a class="btn" href="' + L.link + '">' + L.linkLabel + '</a></div></section>' : '') +
      '<section id="contact" style="border:0"><div class="wrap"><p class="kicker">Contact</p><h2>Get in touch</h2><p class="sub">' + s.contactIntro + '</p><div class="crows"><a href="mailto:' + s.email + '"><span>Email</span><b>' + s.email + '</b><i>&rarr;</i></a><a href="' + s.linkedin + '"><span>LinkedIn</span><b>Connect on LinkedIn</b><i>&rarr;</i></a><a href="' + s.resume + '"><span>Resume</span><b>Download resume (PDF)</b><i>&rarr;</i></a></div></div></section>' +
      footer();
  }

  function project(id) {
    var ps = C.projects, i = -1;
    ps.forEach(function (p, n) { if (p.id === id) i = n; });
    if (i < 0) return header() + '<div class="wrap" style="padding:60px 20px"><h1>Project not found</h1><p><a href="index.html#projects">Back to projects</a></p></div>' + footer();
    var p = ps[i], prev = ps[i - 1], next = ps[i + 1];
    var toc = p.sections.map(function (s) { return '<a href="#' + s.id + '">' + s.title + '</a>'; }).join('');
    var body = p.sections.map(function (s) { return '<section id="' + s.id + '"><h2>' + s.title + '</h2>' + s.blocks.map(blockHtml).join('') + '</section>'; }).join('');
    var spec = p.spec.map(function (k) { return '<div><dt>' + k[0] + '</dt><dd>' + k[1] + '</dd></div>'; }).join('');
    return header() + '<div class="wrap"><div class="crumb"><a href="index.html#projects">&larr; All projects</a></div>' +
      '<div class="cs-head"><p class="kicker">' + p.kicker + '</p><h1>' + p.title + '</h1>' + tagsHtml(p.tags).replace('class="tags"', 'class="tags" style="margin-bottom:16px"') +
      '<p class="lede" style="margin:0">' + p.lede + '</p>' +
      (p.stats && p.stats.length ? '<div class="stats">' + p.stats.map(function (x) { return '<div><b>' + x[0] + '</b><span>' + x[1] + '</span></div>'; }).join('') + '</div>' : '') +
      '<dl class="spec">' + spec + '</dl></div>' +
      '<div class="article"><aside class="toc">' + toc + '</aside><article class="prose">' + body + '<div class="pager">' +
      (prev ? '<a href="project.html?p=' + prev.id + '">&larr; ' + prev.title + '</a>' : '<span></span>') +
      (next ? '<a href="project.html?p=' + next.id + '">' + next.title + ' &rarr;</a>' : '<span></span>') + '</div></article></div></div>' + footer();
  }

  function more() {
    return header() + '<section style="border:0"><div class="wrap"><p class="kicker">Smaller builds</p><h2>More projects</h2><p class="sub">Shorter coursework projects that taught me something specific about manufacturing and design.</p><div class="grid two">' +
      C.more.map(function (m) {
        return '<div class="card" style="cursor:default"><img src="' + img(m.image) + '" alt="' + esc(m.title) + '" loading="lazy"><div class="body">' + tagsHtml(m.tags) + '<h3>' + m.title + '</h3><p>' + m.text + '</p></div></div>';
      }).join('') + '</div></div></section>' + footer();
  }

  /* Click any project photo to see it full size */
  if (typeof document !== 'undefined') {
    document.addEventListener('click', function (e) {
      var t = e.target;
      if (t && t.tagName === 'IMG' && t.closest && t.closest('.fig, .photo, .card')) {
        if (t.closest('a.card')) return;
        var o = document.createElement('div');
        o.className = 'lightbox';
        o.innerHTML = '<img src="' + t.src + '" alt="' + (t.alt || '') + '"><span>Click anywhere to close</span>';
        o.onclick = function () { o.remove(); };
        document.addEventListener('keydown', function k(ev) { if (ev.key === 'Escape') { o.remove(); document.removeEventListener('keydown', k); } });
        document.body.appendChild(o);
      }
    });
  }

  var api = { home: home, project: project, more: more, C: C };
  if (typeof module !== 'undefined') module.exports = api;
  root.SiteRender = api;
})(typeof window !== 'undefined' ? window : global);
