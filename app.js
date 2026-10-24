/* Renders the site from content.js. You should not need to edit this file. */
(function (root) {
  var C = root.PORTFOLIO;
  var esc = function (s) { return String(s == null ? '' : s); };
  var img = function (f) { return 'img/' + f + '.jpg'; };

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
      return '<div class="role"><div><h4>' + (b.role.mineTitle || 'What I did') + '</h4><ul>' + li(b.role.mine) + '</ul></div><div><h4>' +
        (b.role.teamTitle || 'What the team did') + '</h4><ul>' + li(b.role.team) + '</ul></div></div>';
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
      ? '<img src="' + img(p.cardImage) + '" alt="' + esc(p.title) + '" loading="lazy">'
      : '<div class="ph">strain<br>&darr;<br>reconstructed shape<br>&darr;<br>compare with VICON</div>';
    return '<a class="card" href="project.html?p=' + p.id + '">' + im + '<div class="body"><div class="tags"><span class="tag">' + p.cardOrg + '</span>' +
      (p.cardTags || []).map(tagHtml).join('') + '</div><h3>' + p.title + '</h3><p>' + p.cardBlurb + '</p></div></a>';
  }

  function home() {
    var s = C.site, L = C.leadership;
    return header() +
      '<section class="hero" style="padding:0"><div class="wrap"><div><p class="eyebrow">' + s.eyebrow + '</p><h1>' + s.headline + '</h1><p class="lede">' + s.lede + '</p>' +
      '<div class="btns"><a class="btn primary" href="#projects">See projects</a><a class="btn" href="' + s.resume + '">Resume (PDF)</a><a class="btn" href="' + s.linkedin + '">LinkedIn</a></div></div>' +
      '<figure><img src="' + img(s.heroImage) + '" alt="' + esc(s.heroCaption) + '"><figcaption>' + s.heroCaption + '</figcaption></figure></div></section>' +
      '<section id="projects"><div class="wrap"><p class="kicker">Featured work</p><h2>Projects</h2><p class="sub">' + s.projectsIntro + ' <a href="more.html">Smaller builds &rarr;</a></p><div class="grid">' +
      C.projects.map(card).join('') + '</div></div></section>' +
      '<section id="experience"><div class="wrap"><div class="cols"><div><p class="kicker">Experience</p><h2>Where I have worked</h2><ul class="tl" style="margin-top:20px">' +
      C.experience.map(function (e) {
        var t = e.link ? '<a href="' + e.link + '">' + e.title + '</a>' : e.title;
        return '<li><span class="when">' + e.dates + '</span><span>' + t + (e.text ? '<br>' + e.text : '') + '</span></li>';
      }).join('') + '</ul></div><div><p class="kicker">Skills</p><h2>Tools and processes</h2><dl class="skills">' +
      C.skills.map(function (k) { return '<dt>' + k.group + '</dt><dd>' + k.items + '</dd>'; }).join('') + '</dl></div></div></div></section>' +
      (L ? '<section id="leadership"><div class="wrap"><p class="kicker">Beyond engineering</p><h2>' + L.title + '</h2><p class="sub" style="margin-bottom:16px">' + L.text + '</p><a class="btn" href="' + L.link + '">' + L.linkLabel + '</a></div></section>' : '') +
      '<section id="contact" style="border:0"><div class="wrap"><p class="kicker">Contact</p><h2>Get in touch</h2><p class="sub">' + s.contactIntro + '</p><div class="btns"><a class="btn primary" href="mailto:' + s.email + '">' + s.email + '</a><a class="btn" href="' + s.linkedin + '">LinkedIn</a><a class="btn" href="' + s.resume + '">Download resume</a></div></div></section>' +
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
      '<p class="lede" style="margin:0">' + p.lede + '</p><dl class="spec">' + spec + '</dl></div>' +
      '<div class="article"><aside class="toc">' + toc + '</aside><article class="prose">' + body + '<div class="pager">' +
      (prev ? '<a href="project.html?p=' + prev.id + '">&larr; ' + prev.title + '</a>' : '<span></span>') +
      (next ? '<a href="project.html?p=' + next.id + '">' + next.title + ' &rarr;</a>' : '<span></span>') + '</div></article></div></div>' + footer();
  }

  function more() {
    return header() + '<section style="border:0"><div class="wrap"><p class="kicker">Smaller builds</p><h2>More projects</h2><p class="sub">Shorter coursework projects, each with a note on how much was mine.</p><div class="grid two">' +
      C.more.map(function (m) {
        return '<div class="card" style="cursor:default"><img src="' + img(m.image) + '" alt="' + esc(m.title) + '" loading="lazy"><div class="body">' + tagsHtml(m.tags) + '<h3>' + m.title + '</h3><p>' + m.text + '</p></div></div>';
      }).join('') + '</div></div></section>' + footer();
  }

  var api = { home: home, project: project, more: more, C: C };
  if (typeof module !== 'undefined') module.exports = api;
  root.SiteRender = api;
})(typeof window !== 'undefined' ? window : global);
