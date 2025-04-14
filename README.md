This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## USAGE OF THE COMPONENTS

### MulaCustomAutoComplete
### Preview
![alt text](image-1.png)

```bash
npm install @your-org/my-ui-library@0.2.2
```


Install the package using npm:
```bash
npm install @your-org/my-ui-library@0.2.2
```

### Usage

```
import { MulabCustomAutocomplete } from "@your-org/my-ui-library";

const FormComponent = () => {
const languageOptions = [
    { label: "Java", value: "java" },
    { label: "Python", value: "python" }
]

const form = useForm()
const onSubmit = (data: any) => {
    console.log(data)
}
return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <MulabCustomAutocomplete
            control={form.control}
            name="language"
            label="Programming Language"
            description="Select your preferred programming language"
            placeholder="Select a language"
            items={languageOptions}
        />
        </form>
    </Form>
)}
```
##
### MulabInput
### Preview
![alt text](image-2.png)



Install the package using npm:
```bash
npm install @your-org/my-ui-library@0.2.2
```

### Usage

```
import { MulabCustomAutocomplete } from "@your-org/my-ui-library";

const FormComponent = () => {

const form = useForm()
const onSubmit = (data: any) => {
    console.log(data)
}
return (
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
        />
        </form>
    </Form>
)}
```
##




Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
