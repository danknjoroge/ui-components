var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
export const Button = React.forwardRef((_a, ref) => {
    var { className, variant = "default" } = _a, props = __rest(_a, ["className", "variant"]);
    return (_jsx("button", Object.assign({ className: cn("px-4 py-2 rounded-md font-medium transition-colors focus:outline-none", variant === "default" && "bg-black text-white hover:bg-gray-800", variant === "outline" && "border border-gray-300 text-gray-800 hover:bg-gray-100", variant === "ghost" && "text-gray-600 hover:bg-gray-100", className), ref: ref }, props)));
});
Button.displayName = "Button";
