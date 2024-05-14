"use client";

import { getCars, getQuotes } from "@/app/lib/services";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../button/button.component";
import { RegistrationInput } from "../registration-input/registration-input.component";

export const Form = () => {
  const [value, setValue] = useState<string>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    console.log('submit');

    if (!value) return;

    setLoading(true);

    const car: any = await getCars(value);
    const quotes: any = await getQuotes(car.data.make, car.data.fuelType);
  
    console.log('quotes', quotes);

    setLoading(false);

    if (quotes?.data) {
      const query = encodeURIComponent(JSON.stringify(quotes.data));
      const vehicle = encodeURIComponent(JSON.stringify(car.data));
      return router.push(`/quotes?quotes=${query}&vehicle=${vehicle}`);
    }
  };

  return (
    <form onSubmit={onSubmit} className='flex gap-4 flex-col w-full md:w-4/6'>
      <RegistrationInput
        disabled={loading}
        onChange={(v) => setValue(v.currentTarget.value)}
        size="lg"
        behaviour="fill"
        placeholder="Enter your reg"
      />

      <Button type='submit' />
    </form>
  );
};
