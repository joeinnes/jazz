import CoPlainTextDescription from "@/app/(others)/(home)/coValueDescriptions/coPlainTextDescription.mdx";
import CursorsAndCaretsDescription from "@/app/(others)/(home)/toolkit/cursorsAndCarets.mdx";
import TwoWaySyncDescription from "@/app/(others)/(home)/toolkit/twoWaySync.mdx";
import VideoPresenceCallsDescription from "@/app/(others)/(home)/toolkit/videoPresenceCalls.mdx";
import { CodeRef } from "@garden-co/design-system/src/components/atoms/CodeRef";
import { P } from "@garden-co/design-system/src/components/atoms/Paragraph";
import { FeatureCard } from "@garden-co/design-system/src/components/molecules/FeatureCard";
import { GappedGrid } from "@garden-co/design-system/src/components/molecules/GappedGrid";
import { Prose } from "@garden-co/design-system/src/components/molecules/Prose";
import { SectionHeader } from "@garden-co/design-system/src/components/molecules/SectionHeader";

export function ComingSoonSection() {
  return (
    <div>
      <SectionHeader title="More features coming soon" />

      <GappedGrid cols={4}>
        <FeatureCard className="p-4" label={<h3>Cursors & carets</h3>}>
          <P>Ready-made spatial presence.</P>
          <Prose size="sm">
            <CursorsAndCaretsDescription />
          </Prose>
        </FeatureCard>

        <FeatureCard className="p-4" label={<h3>Two-way sync to your DB</h3>}>
          <P>Add Jazz to an existing app.</P>
          <Prose size="sm">
            <TwoWaySyncDescription />
          </Prose>
        </FeatureCard>

        <FeatureCard className="p-4" label={<h3>Video presence & calls</h3>}>
          <P>Stream and record audio & video.</P>
          <Prose size="sm">
            <VideoPresenceCallsDescription />
          </Prose>
        </FeatureCard>

        <FeatureCard
          className="p-4"
          label={
            <h3>
              <CodeRef>CoPlainText</CodeRef> & <CodeRef>CoRichText</CodeRef>
            </h3>
          }
        >
          <Prose size="sm">
            <CoPlainTextDescription />
          </Prose>
        </FeatureCard>
      </GappedGrid>
    </div>
  );
}
