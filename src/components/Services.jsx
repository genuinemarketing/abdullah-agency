/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Our expertise lies in identifying, exploring, and responding to new possibilities. Let us guide your journey, turning these opportunities into pathways for success.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We specialize in crafting beautiful, high-quality websites for businesses of all sizes. A website not only that meets but exceeds industry standards.
            </ListItem>
            <ListItem title="Digital marketing">
              We don't just offer digital marketing; we deliver an extraordinary fusion of expertise and innovation.
              Our team creates magic to set your brand apart.
            </ListItem>
            <ListItem title="Lead generation">
              It's not just about numbers; it's about conversions.
              Watch as our high-quality leads seamlessly transition into satisfied customers,
              driving your revenue to new heights.
            </ListItem>
            <ListItem title="Sales">
              Experience unparalleled sales expertise with our leading team of sales professionals.
              No challenge is too great, our skilled salesforce excels at selling anything and everything.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
