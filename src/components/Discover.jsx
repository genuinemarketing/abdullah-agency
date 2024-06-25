import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work closely with our clients to understand their{" "}
          <strong className="font-semibold text-neutral-950">needs</strong> and
          <strong className="font-semibold text-neutral-950"> goals</strong>, embedding ourselves in their every day operations to understand
          what makes their business tick.
        </p>
        <p>
        The project discovery phase sets the stage for success by providing a clear roadmap, mitigating risks, and aligning stakeholders expectations. Investing time and effort in this phase pays dividends in the form of smoother project execution and ultimately, a successful outcome. Well-begun project is half-done!
        </p>
        <p>
          Once the full audit is complete, we report back with a comprehensive
          <strong className="font-semibold text-neutral-950"> plan</strong> and
          more importantly, a <strong className="font-semibold text-neutral-950"> budget</strong>.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Clear goals</TagListItem>
        <TagListItem>Dealing with risks</TagListItem>
        <TagListItem>Using resources wisely</TagListItem>
        <TagListItem>Project research</TagListItem>
        <TagListItem>Analyzing market trends</TagListItem>
        <TagListItem>Timeline and budget</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
