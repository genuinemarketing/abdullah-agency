import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Genuine Marketing was started by two friends who noticed that digital agencies
            were charging clients double what an in-house team would
            cost. Since the beginning, we have been committed to doing things
            differently.
          </p>
          <p>
          At Genuine Marketing, we're more than just colleagues — we're a family.
          This ethos forms the foundation of our professional culture, emphasizing mutual support, shared values, and a commitment to collective success.
          As a unified team, we prioritize open communication, collaboration, and a shared dedication to delivering exceptional results for our clients.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="8" label="Skilled employees" />
          <StatListItem value="19" label="Satisfied clients" />
          <StatListItem value="€5M" label="Invoices billed" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
