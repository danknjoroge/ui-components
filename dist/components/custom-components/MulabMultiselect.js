import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { MultiSelect } from '../ui/multi-select';
/**
 * MulabMultiselect is a form input component that allows users to select multiple options from a dropdown list.
 * It integrates with React Hook Form for form state management and validation.
 *
 * @component
 * @template T - Type extending FieldValues from react-hook-form
 *
 * @param {Object} props - Component props
 * @param {Control<T>} props.control - React Hook Form control object
 * @param {FieldPath<T>} props.name - Name of the form field
 * @param {string} props.label - Label text displayed above the input
 * @param {string} props.description - Description text shown below the label
 * @param {Array<{label: string, value: string, icon?: React.ComponentType}>} props.options - Array of selectable options
 * @param {'default' | 'error'} [props.variant] - Visual variant of the multiselect
 * @param {string[]} [props.defaultValue=[]] - Default selected values
 * @param {string} [props.placeholder="Select options"] - Placeholder text when no options are selected
 * @param {number} [props.animation=0] - Duration in seconds for visual animations
 * @param {number} [props.maxCount=3] - Maximum number of selected items to display before summarizing
 * @param {boolean} [props.modalPopover=false] - Whether the dropdown should behave as a modal
 * @param {boolean} [props.asChild=false] - Whether to render as a child component
 *
 * @example
 * ```tsx
 * <MulabMultiselect
 *   control={form.control}
 *   name="selections"
 *   label="Select Items"
 *   description="Choose multiple items from the list"
 *   options={[
 *     { label: "Option 1", value: "opt1" },
 *     { label: "Option 2", value: "opt2" }
 *   ]}
 *   maxCount={2}
 * />
 * ```
 */
const MulabMultiselect = ({ control, name, label, description, options, defaultValue = [], placeholder = "Select options", animation = 0, maxCount = 3, modalPopover = false, asChild = false, variant = 'default' }) => {
    return (_jsx(FormField, { control: control, name: name, render: ({ field }) => (_jsxs(FormItem, { className: "flex flex-col", children: [_jsx(FormLabel, { className: "form-label", children: label }), _jsx(FormDescription, { children: description }), _jsxs("div", { className: 'flex w-full flex-col', children: [_jsx(FormControl, { children: _jsx(MultiSelect, { options: options, onValueChange: (changes) => {
                                    //onValueChange(name, changes)
                                    field.onChange(changes);
                                }, defaultValue: field.value, placeholder: placeholder, variant: variant, animation: animation, maxCount: maxCount }) }), _jsx(FormMessage, { className: "form-message mt-2 text-red-600" })] })] })) }));
};
export default MulabMultiselect;
