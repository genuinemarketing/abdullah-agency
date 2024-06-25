import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          
During the build phase, we strategically prioritize tasks and extend timelines as needed to accommodate evolving requirements, ensuring a high-quality and well-tailored final product.
        </p>
        <p>
        Our effective use of pre-built components allows us to focus on adding unique and exciting features.
        </p>
        <p>
        We ensure that the final project not only meets but exceeds client expectations. By strategically allocating development time and leveraging pre-built components effectively, we deliver a robust solution that is both timely and innovative. Our commitment to crafting augmented reality demos that resonate with audiences underscores our dedication to creating impactful and memorable digital experiences.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Testing">
          Our projects always have 100% test coverage.
        </ListItem>
        <ListItem title="Infrastructure">
          To ensure reliability we only use the best droplets that money can buy.
        </ListItem>
        <ListItem title="Support">
          Because we hold the API keys for every critical service your business
          uses, you can expect a lifetime of support.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
