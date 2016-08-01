// Copyright 2016 Dorival Pedroso. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// import revealJS
import 'reveal/lib/js/head.min.js';
import Reveal from 'reveal/js/reveal.js';

// import plugins
import 'reveal/plugin/math/math.js';
import 'reveal/plugin/zoom-js/zoom.js';
import './js/highlight.js';

// configure revealJS---YOU MAY CHANGE HERE
Reveal.initialize({
    history: true,
    transition: 'linear',
    math: {
        config: 'TeX-AMS_HTML-full'
    },
});

// import extra presentation content
import './presentation.js';

// pretty-print all code
import 'js/highlight.pack.js';
let codes = document.querySelectorAll('pre code');
for (let i = 0; i < codes.length; i++) {
    hljs.highlightBlock(codes[i]);
}
