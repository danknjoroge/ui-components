import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { cn } from '../../lib/utils' 
import React from 'react'
import { Control, FieldPath, FieldValues } from 'react-hook-form'
import { Input } from '../ui/input'

type InputProps<T extends FieldValues> = {
    label: string
    description: string
    name: FieldPath<T>
    control: Control<T>
    placeholder: string
    type: string
    disabled?:boolean,
    autoFocus?:boolean,
    className?:string
}

export const MulabInput = <T extends FieldValues>({ control, name, placeholder, label, description, type, disabled=false,autoFocus=false,className }: InputProps<T>) => {
    return (
            <FormField
                control={control}
                name={name}
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                        <FormLabel className="form-label">
                            {label}
                        </FormLabel>
                        <FormDescription >
                                {description}
                            </FormDescription>
                     
                        <div className='flex w-full flex-col'>
                            <FormControl>
                                <Input className={cn('input-class h-8 placeholder:text-xs placeholder:font-light',className)}
                                   placeholder={placeholder} 
                                    {...field} 
                                    type={type}
                                    disabled={disabled}
                                    autoFocus = {autoFocus}
                                    ref={field.ref}
                                    />
                            </FormControl>
                           
                            
                            <FormMessage className="form-message mt-2 text-red-600" />
                        </div>
                    </FormItem>
                )}
            />
    )
}


