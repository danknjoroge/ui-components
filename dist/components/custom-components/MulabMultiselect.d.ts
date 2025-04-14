import React from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';
type InputProps<T extends FieldValues> = {
    label: string;
    description: string;
    name: FieldPath<T>;
    control: Control<T>;
    variant?: "custom" | "default" | "secondary" | "destructive" | "inverted" | null | undefined;
    /**
   * An array of option objects to be displayed in the multi-select component.
   * Each option object has a label, value, and an optional icon.
   */
    options: {
        /** The text to display for the option. */
        label: string;
        /** The unique value associated with the option. */
        value: string;
        /** Optional icon component to display alongside the option. */
        icon?: React.ComponentType<{
            className?: string;
        }>;
    }[];
    /** The default selected values when the component mounts. */
    defaultValue?: string[];
    /**
     * Placeholder text to be displayed when no values are selected.
     * Optional, defaults to "Select options".
     */
    placeholder?: string;
    /**
     * Animation duration in seconds for the visual effects (e.g., bouncing badges).
     * Optional, defaults to 0 (no animation).
     */
    animation?: number;
    /**
     * Maximum number of items to display. Extra selected items will be summarized.
     * Optional, defaults to 3.
     */
    maxCount?: number;
    /**
     * The modality of the popover. When set to true, interaction with outside elements
     * will be disabled and only popover content will be visible to screen readers.
     * Optional, defaults to false.
     */
    modalPopover?: boolean;
    /**
     * If true, renders the multi-select component as a child of another component.
     * Optional, defaults to false.
     */
    asChild?: boolean;
    /**
     * Additional class names to apply custom styles to the multi-select component.
     * Optional, can be used to add custom styles.
     */
    className?: string;
};
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
declare const MulabMultiselect: <T extends FieldValues>({ control, name, label, description, options, defaultValue, placeholder, animation, maxCount, modalPopover, asChild, variant }: InputProps<T>) => import("react/jsx-runtime").JSX.Element;
export default MulabMultiselect;
