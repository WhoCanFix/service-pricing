"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Quotes() {
  const params = useSearchParams();
  const router = useRouter();
  const [quotes, setQuotes] = useState<string>();
  const [vehicle, setVehicle] = useState<any>({});

  useEffect(() => {
    const quotes = params.get("quotes");
    if (quotes) {
      setQuotes(quotes);
    }

    const vehicle = params.get("vehicle");
    if (vehicle) setVehicle(JSON.parse(vehicle));
  });

  return (
    <main className="flex gap-8 flex-col items-start p-24 max-w-screen-md justify-center mx-auto my-0">
      <div className="leading-[1.2] text-3xl md:text-9xl text-center lg:text-left text-ink-brand-100 font-bold lg:mb-2">
        Your results for {vehicle.make} {vehicle.model} ({vehicle.vrm})
      </div>

      <div>{quotes}</div>

      <button className='font-bold' onClick={() => router.push('/')}>Start again</button>
    </main>
  );
}
