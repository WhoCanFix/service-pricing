import { Form } from "./components/form/form.component";
import { Heading } from "./components/heading/heading.component";
import { Button, RegistrationInput, Trustpilot } from "./components/index";

export default function Home() {
  return (
    <main className="flex gap-8 flex-col items-start p-24 max-w-screen-md justify-center mx-auto my-0">
      <Heading />

      <Form />

      <Trustpilot />
    </main>
  );
}
