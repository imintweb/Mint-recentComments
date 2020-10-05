var recentCmts = (function() {
    var b = document.getElementById("wjs-recentCmts"),
        d = { homepage: window.location.protocol + "//" + window.location.hostname, imgSize: "s80", container: b, image: (b.dataset.cphoto || "//www.gravatar.com/avatar/?d=mm"), length: (b.dataset.cnumber || 6), snippet: (b.dataset.csnippet || 50) };
    var a = document.createElement("script");
    var e = d.homepage + "/feeds/comments/default?alt=json-in-script&callback=recentCmts&max-results=" + (d.length);
    a.src = e;
    document.body.appendChild(a);

    function c(k) { var j = k.author[0]; var p = j.name.$t; var m = k.content; var n = k.summary; var h = (m ? m.$t : n.$t).replace(/<[^>]*>?/g, "").substring(0, d.snippet) + "..."; var i = j.gd$image; var l = (i.src.includes("g/blank.gif") || i.src.includes("g/b16-rounded.gif") ? d.image : i.src).replace(/s\B\d{2,4}/, d.imgSize); var g = (function() { for (var q = 0; q < k.link.length; q++) { var r = k.link[q]; if (r.rel === "alternate") { return r.href } } })(); var o = new Date(k.published.$t).toLocaleDateString("es-ES", { year: "numeric", month: "numeric", day: "numeric" }); return ('<div class="wjs-cmts-card"><div class="wjs-cmts-card-content"><a href="' + g + '" class="wjs-cmts-image"><img src="' + l + '" alt="' + p + '" /></a><div class="wjs-cmts-data"><h3 class="wjs-cmts-title"><a href="' + g + '">' + p + '</a><span class="wjs-cmts-date">' + o + '</span></h3><p class="wjs-cmts-snippet">' + h + "</p></div></div></div>") }

    function f(j) { var h = 0; var g; var k = d.length; for (; h < k && (g = j.feed.entry[h]); h++) { d.container.innerHTML += c(g) } }
    return f
})();