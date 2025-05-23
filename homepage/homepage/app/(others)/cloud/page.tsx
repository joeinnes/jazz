import { Pricing } from "@/components/Pricing";
import { LatencyMap } from "@/components/cloud/latencyMap";
import { GridCard } from "@garden-co/design-system/src/components/atoms/GridCard";
import { H2, H3 } from "@garden-co/design-system/src/components/atoms/Headings";
import { P } from "@garden-co/design-system/src/components/atoms/Paragraph";
import { GappedGrid } from "@garden-co/design-system/src/components/molecules/GappedGrid";
import { HeroHeader } from "@garden-co/design-system/src/components/molecules/HeroHeader";
import { Prose } from "@garden-co/design-system/src/components/molecules/Prose";
import { SectionHeader } from "@garden-co/design-system/src/components/molecules/SectionHeader";
import type { Metadata } from "next";
import CloudPlusBackup from "./cloudPlusBackup.mdx";
import CloudPlusDIY from "./cloudPlusDIY.mdx";
import CompletelyDIY from "./completelyDIY.mdx";

const title = "Jazz Cloud";
const description = "Serverless sync & storage for Jazz apps.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
};

export default function Cloud() {
  return (
    <div className="space-y-16">
      <div className="container space-y-12 overflow-x-hidden sm:overflow-x-visible">
        <HeroHeader
          title="Jazz Cloud"
          slogan="Real-time sync and storage infrastructure that scales up to millions of users."
        />
        <LatencyMap />
        <GappedGrid>
          <GridCard>
            <H3>Optimal cloud routing</H3>

            <P>
              Get ultra-low latency between any group of users with our
              decentralized cloud interconnect.
            </P>
          </GridCard>
          <GridCard>
            <H3>Smart caching</H3>

            <P>
              Give users instant load times, with their latest data state always
              cached close to them.
            </P>
          </GridCard>
          <GridCard>
            <H3>Blob storage & media streaming</H3>

            <P>
              Store files and media streams as idiomatic `CoValues` without S3.
            </P>
          </GridCard>
        </GappedGrid>
      </div>

      <div className="bg-stone-100 border-y dark:bg-stone-925 py-8 lg:py-16 dark:border-y-0 dark:bg-transparent dark:py-0">
        <div className="container space-y-5">
          <H2>Pricing</H2>

          <Pricing />
        </div>
      </div>

      <div className="container space-y-16">
        <div>
          <SectionHeader
            title="Custom deployment scenarios"
            slogan="You can rely on Jazz Cloud. But you don't have to."
          />
          <P>
            Because Jazz is open-source, you can optionally run your own sync
            nodes &mdash; in a variety of setups.
          </P>
          <GappedGrid>
            <GridCard>
              <Prose>
                <CloudPlusBackup />
              </Prose>
            </GridCard>
            <GridCard>
              <Prose>
                <CloudPlusDIY />
              </Prose>
            </GridCard>
            <GridCard>
              <Prose>
                <CompletelyDIY />
              </Prose>
            </GridCard>
          </GappedGrid>
        </div>
      </div>
    </div>
  );
}
