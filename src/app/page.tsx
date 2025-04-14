"use client"
import { Button } from "@/components/custom-components/Button"
import { Input } from "@/components/custom-components/Input"
import { Form } from "@/components/ui/form"
import {MulabInput} from "@/components/custom-components/FormInput"
import { Terminal } from "lucide-react"
import { useForm } from "react-hook-form"
import { MuInput } from "@/components/custom-components/MuInput"
import { MulabCustomAutocomplete } from "@/components/custom-components/MulabAutoComplete"
import MulabMultiselect from "@/components/custom-components/MulabMultiselect"

export default function Home() {
  const languageOptions = [
    { label: "Java", value: "java" },
    { label: "Python", value: "python" },
    { label: "JavaScript", value: "javascript" },
    { label: "TypeScript", value: "typescript" },
    { label: "C++", value: "c++" },
    { label: "C#", value: "c#" },
    { label: "PHP", value: "php" },
    { label: "Ruby", value: "ruby" },
    { label: "Go", value: "go" },
  ]
  const form = useForm()
  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <main className="p-10 space-y-4">
      <h1 className="text-2xl font-bold">UI Library Preview</h1>
      <Input placeholder="Enter text here" />
      <div className="flex gap-2">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <MuInput title="Hello" description="We are experiencing the world" className="w-xl" icon={<Terminal />} />

     <Form {...form}>
       <form onSubmit={form.handleSubmit(onSubmit)}>
       <MulabInput
                    control={form.control}
                    name="username"
                    label="Email Address"
                    description="Enter Your Email Address"
                    placeholder="example@email.com"
                    type="email"
                  />
                  <MulabCustomAutocomplete
                            control={form.control}
                            name="language"
                            label="Programming Language"
                            description="Select your preferred programming language"
                            placeholder="Select a language"
                            items={languageOptions}
                        />
                          <MulabMultiselect
                    options={languageOptions}
                    control={form.control}
                    defaultValue={form.getValues("framework")}
                    placeholder="Select frameworks"
                    variant="custom"
                    animation={2}
                    maxCount={3}
                    className='text-sky-950'
                    label={'Mulab'} 
                    description="Mulab is good"
                    name="framework"
             />
                        <Button type="submit">Submit</Button>
       </form>
     </Form>
    </main>
  )
}
