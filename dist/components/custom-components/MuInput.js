import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { cn } from '../../lib/utils'; // assuming you're using ShadCN’s `cn` utility
export const MuInput = ({ title, description, className, icon }) => {
    return (_jsxs(Alert, { className: cn(className), children: [icon, _jsx(AlertTitle, { children: title }), _jsx(AlertDescription, { children: description })] }));
};
