"use client";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/custom-components/Input";
import { Button } from "@/components/custom-components/Button";
import MulabMultiselect from "@/components/custom-components/MulabMultiselect";
import { MulabInput } from "@/components/custom-components/FormInput";

// ✅ define your form schema
const formSchema = z.object({
  framework: z
    .array(z.string())
    .min(1, { message: "Select at least one framework" })
    .max(3, { message: "You can select up to 3 frameworks" }),
  email: z.string().email("Invalid email address"),
});

// ✅ infer the form type from the schema
type FormValues = z.infer<typeof formSchema>;

export default function Home() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      framework: [],
      email: "",
    },
  });

  const frameworksList = [
    { label: "React", value: "react" },
    { label: "Angular", value: "angular" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
    { label: "Solid", value: "solid" },
    { label: "Next.js", value: "nextjs" },
    { label: "Gatsby", value: "gatsby" },
  ];

  const onSubmit = (values: FormValues) => {
    console.log("Form values", values);
  };

  return (
    <main className="p-10 space-y-4">
      <h1 className="text-2xl font-bold">UI Library Preview</h1>
      <Input placeholder="Enter text here" />

      <div className="flex gap-2">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <MulabMultiselect
            options={frameworksList}
            control={form.control}
            defaultValue={form.getValues("framework")}
            placeholder="Select frameworks"
            variant="custom"
            animation={2}
            maxCount={3}
            className="text-sky-950"
            label={"Mulab"}
            description="Mulab is good"
            name="framework"
          />

          <MulabInput
            control={form.control}
            name="email"
            label="Email Address"
            description="Enter your email address"
            placeholder="example@email.com"
            type="email"
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  );
}
