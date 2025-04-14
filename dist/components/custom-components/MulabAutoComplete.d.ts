import { Control, FieldPath, FieldValues } from 'react-hook-form';
type InputProps<T extends FieldValues> = {
    label: string;
    description: string;
    name: FieldPath<T>;
    control: Control<T>;
    placeholder: string;
    items: {
        label: string;
        value: string;
    }[];
    classname?: string;
    onChange?: (value: string) => void;
    defaultValue?: string;
    disabled?: boolean;
    asChild?: boolean;
};
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
export declare const MulabCustomAutocomplete: <T extends FieldValues>({ control, name, placeholder, label, description, items, classname, onChange, defaultValue, disabled, }: InputProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
