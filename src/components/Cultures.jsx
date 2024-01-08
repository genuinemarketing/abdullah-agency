import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
            Our team has been with us since the beginning because we foster trust,
            growth, and shared success.
          </GridListItem>
          <GridListItem title="Trust" invert>
            We don’t care when our team works, just as long as they deliver
            exceptional results and collaborate seamlessly.
          </GridListItem>
          <GridListItem title="Compassion" invert>
          Within these walls, empathy guides us. We are each other’s keepers.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
