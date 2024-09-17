/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based off of the discovery phase, we develop a comprehensive roadmap
          for each product and start working towards delivery. The roadmap is an visual representation of the strategy plans. It ties together the strategy for the "why", the work we will need to do to achieve the goals, the "what" and a timeline for completion, the "when".
        </p>
        <p>
          Each client is assigned a key account manager to keep lines of
          communication open and to be up to date with the progress of the project.
        </p>
        <p>
        Our account managers are trained to provide timely and thoughtful responses to client inquiries, ensuring each communication reflects our dedication to quality and client satisfaction.
        </p>
      </div>
      {/* <Blockquote
        author={{ name: "Emily Birkin", role: "Head of opeations on IKEA" }}
        className="mt-12"
      >
        Genuine Marketing provided progress updates so consistently that we almost started to believe they were automated!
      </Blockquote> */}
    </Section>
  );
};

export default Build;
