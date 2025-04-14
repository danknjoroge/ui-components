import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { cn } from '../../lib/utils';
import { Input } from '../ui/input';
export const MulabInput = ({ control, name, placeholder, label, description, type, disabled = false, autoFocus = false, className }) => {
    return (_jsx(FormField, { control: control, name: name, render: ({ field }) => (_jsxs(FormItem, { className: "flex flex-col", children: [_jsx(FormLabel, { className: "form-label", children: label }), _jsx(FormDescription, { children: description }), _jsxs("div", { className: 'flex w-full flex-col', children: [_jsx(FormControl, { children: _jsx(Input, Object.assign({ className: cn('input-class h-8 placeholder:text-xs placeholder:font-light', className), placeholder: placeholder }, field, { type: type, disabled: disabled, autoFocus: autoFocus, ref: field.ref })) }), _jsx(FormMessage, { className: "form-message mt-2 text-red-600" })] })] })) }));
};
