// Copyright 2016 Dorival Pedroso. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

import Plotxy from 'jstar/src/canvas.plotxy.js';

let p1 = new Plotxy('canvas-1', 'first plot', 'x', 'y');
p1.addCurve('series1a', [0.1, 0.2, 0.4, 0.8, 1.2], [0.15, 0.3, 0.8, 2.0, 4.0]);
p1.tracking = true;
p1.refresh();
