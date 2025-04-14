import React from 'react'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { cn } from '../../lib/utils' // assuming you're using ShadCN’s `cn` utility

interface MuInputProps {
    title: string
    description: string
    className?: string
    icon?: React.ReactNode
  }
  

export const MuInput: React.FC<MuInputProps> = ({  title, description, className, icon }) => {
  return (
    <Alert className={cn(className)}>
       {icon}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
}
