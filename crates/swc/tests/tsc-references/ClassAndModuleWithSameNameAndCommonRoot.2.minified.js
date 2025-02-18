//// [class.ts]
var X;
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
!function(X) {
    (X.Y || (X.Y = {})).Point = function Point(x, y) {
        "use strict";
        _class_call_check(this, Point), this.x = x, this.y = y;
    };
}(X || (X = {}));
//// [module.ts]
var X;
!function(X) {
    var Y, Point;
    (Point = (Y = X.Y || (X.Y = {})).Point || (Y.Point = {})).Origin = new Point(0, 0);
}(X || (X = {}));
//// [test.ts]
new X.Y.Point(1, 1), X.Y.Point.Origin;
//// [simple.ts]
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
var A = function A() {
    "use strict";
    _class_call_check(this, A);
};
(A || (A = {})).Instance = new A(), A.Instance, new A();
