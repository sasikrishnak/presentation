// Copyright 2016 Dorival Pedroso. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// import revealJS
import 'reveal/lib/js/head.min.js';
import Reveal from 'reveal/js/reveal.js';

// import plugins
import 'reveal/plugin/math/math.js';
import 'reveal/plugin/zoom-js/zoom.js';
import './highlight.reveal.js';
import './highlight.pack.js';


// YOU MAY CHANGE HERE ---------------------------------------------------------

// configure revealJS
Reveal.initialize({
    history: true,
    transition: 'linear',
    math: {
        config: 'TeX-AMS_HTML-full'
    },
    slideNumber: 'c/t'
});

// END OF CHANGES --------------------------------------------------------------


// pretty-print all code
let codes = document.querySelectorAll('pre code');
for (let i = 0; i < codes.length; i++) {
    hljs.highlightBlock(codes[i]);
}
