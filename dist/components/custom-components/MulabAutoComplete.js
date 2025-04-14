'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '../ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { cn } from '../../lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import React from 'react';
/**
 * MulabCustomAutocomplete is a reusable form input component that provides an autocomplete/dropdown functionality
 * with search capabilities.
 *
 * @component
 * @template T - Type extending FieldValues from react-hook-form
 *
 * @param {Object} props - Component props
 * @param {Control<T>} props.control - React Hook Form control object
 * @param {FieldPath<T>} props.name - Name of the form field
 * @param {string} props.placeholder - Placeholder text for the input
 * @param {string} props.label - Label text for the form field
 * @param {string} props.description - Description text shown below the label
 * @param {Array<{label: string, value: string}>} props.items - Array of items to display in dropdown
 * @param {string} [props.classname] - Optional CSS class names to apply
 * @param {(value: string) => void} [props.onChange] - Optional callback when value changes
 * @param {string} [props.defaultValue] - Optional default value
 * @param {boolean} [props.disabled=false] - Whether the input is disabled
 * @param {boolean} [props.asChild] - Whether to render as child component
 *
 * @example
 * ```tsx
 * <MulabCustomAutocomplete
 *   control={form.control}
 *   name="fieldName"
 *   label="Select an option"
 *   description="Choose from the list"
 *   placeholder="Select..."
 *   items={[
 *     { label: "Option 1", value: "opt1" },
 *     { label: "Option 2", value: "opt2" }
 *   ]}
 * />
 * ```
 */
export const MulabCustomAutocomplete = ({ control, name, placeholder, label, description, items, classname, onChange, defaultValue, disabled = false, }) => {
    const [open, setOpen] = React.useState(false);
    return (_jsx(FormField, { control: control, name: name, render: ({ field }) => {
            var _a, _b;
            return (_jsxs(FormItem, { className: cn("flex flex-col", classname), children: [_jsx(FormLabel, { children: label }), _jsx(FormDescription, { children: description }), _jsxs(Popover, { open: open, onOpenChange: setOpen, modal: true, children: [_jsx(PopoverTrigger, { asChild: true, disabled: disabled, children: _jsx(FormControl, { className: 'text-sm font-normal placeholder:font-light', children: _jsxs(Button, { variant: "outline", role: "combobox", className: cn("w-full justify-between h-8", !field.value && "text-muted-foreground"), children: [defaultValue
                                                ? (_a = items.find(item => item.value === defaultValue)) === null || _a === void 0 ? void 0 : _a.label
                                                : field.value
                                                    ? (_b = items.find(item => item.value === field.value)) === null || _b === void 0 ? void 0 : _b.label
                                                    : placeholder, _jsx(ChevronsUpDown, { className: "opacity-50" })] }) }) }), _jsx(PopoverContent, { className: "w-full p-0", style: { zIndex: 9999 }, children: _jsxs(Command, { className: 'bg-white', children: [_jsx(CommandInput, { placeholder: placeholder, className: "h-9" }), _jsxs(CommandList, { children: [_jsx(CommandEmpty, { children: "No items found." }), _jsx(CommandGroup, { children: items.map((item) => (_jsxs(CommandItem, { value: item.value, onSelect: () => {
                                                            field.onChange(item.value);
                                                            onChange === null || onChange === void 0 ? void 0 : onChange(item.value);
                                                            setOpen(false);
                                                        }, className: "cursor-pointer hover:bg-gray-100", children: [item.label, _jsx(Check, { className: cn("ml-auto h-4 w-4", item.value === field.value
                                                                    ? "opacity-100"
                                                                    : "opacity-0") })] }, item.value))) })] })] }) })] }), _jsx(FormMessage, {})] }));
        } }));
};
