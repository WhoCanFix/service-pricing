import { Component } from "react";

class Heading extends Component {
  return() {
    <>
      <div className="leading-[1.2] text-3xl md:text-9xl text-center lg:text-left text-ink-brand-100 font-bold lg:mb-2">
        Find local garages you can rely on
      </div>
      <div className="text-2xl">
        We'll help you save money on car repairs in just a few clicks.
      </div>
    </>;
  }
}

export { Heading };
