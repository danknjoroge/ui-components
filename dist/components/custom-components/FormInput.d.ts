import { Control, FieldPath, FieldValues } from 'react-hook-form';
type InputProps<T extends FieldValues> = {
    label: string;
    description: string;
    name: FieldPath<T>;
    control: Control<T>;
    placeholder: string;
    type: string;
    disabled?: boolean;
    autoFocus?: boolean;
    className?: string;
};
export declare const MulabInput: <T extends FieldValues>({ control, name, placeholder, label, description, type, disabled, autoFocus, className }: InputProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
