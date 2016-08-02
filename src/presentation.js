// Copyright 2016 Dorival Pedroso. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

import Plotxy from 'jstar/src/canvas.plotxy.js';
import Reveal from 'reveal/js/reveal.js';

let p1 = new Plotxy('canvas-1', 'first plot', 'displacement [m]', 'force [kN]');
p1.addCurve('data', [0.1, 0.2, 0.4, 0.8, 1.2], [0.15, 0.3, 0.8, 2.0, 4.0]);
p1.addCurve('simulation', [1.1, 2.2, 3.4, 1.8, 0.2], [0.15, 0.3, 0.8, 2.0, 4.0]);
p1.winZoomFcn = Reveal.getScale;
p1.tracking = true;

let p2 = new Plotxy('canvas-2', 'second plot', 'displacement [m]', 'force [kN]');
p2.addCurve('model', [0.0, 0.1, 0.2, 0.3, 0.4, 0.50, 0.6, 0.7, 0.8, 0.9, 1.0],
                     [0.0, 0.1, 0.4, 0.6, 0.8, 0.85, 0.8, 0.6, 0.4, 0.1, 0.0]);
p2.winZoomFcn = Reveal.getScale;
p2.tracking = true;

let p3 = new Plotxy('canvas-3', 'third plot', 'displacement [m]', 'force [kN]');
p3.addCurve('experiments', [0.0, 0.1, 0.2, 0.3, 0.4, 0.50, 0.6, 0.7, 0.8, 0.9, 1.0],
                           [0.1, 0.0, 0.3, 0.7, 0.9, 0.80, 0.9, 0.5, 0.5, 0.1, 0.0]);
p3.winZoomFcn = Reveal.getScale;
p3.tracking = true;

Reveal.addEventListener('ready', function(event) {
    p1.redraw();
    p2.redraw();
    p3.redraw();
});
