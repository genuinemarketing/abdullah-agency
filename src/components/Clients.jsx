import Image from "next/image";

import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const clients = [
  ["Ikea"],
  ["Clas Ohlson"],
  ["Coop"],
  ["Stadium"],
  ["Plantagen"],
  ["Webbhallen"],
  ["Åhlens"],
  ["Willys  "],

];

const Clients = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We have worked with hundreds of amazing people on
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
            {client}
          </h2>
                  {/* <Image src={logo} alt={client} unoptimized /> */}
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
