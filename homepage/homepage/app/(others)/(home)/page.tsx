import { ChatDemoSection } from "@/components/home/ChatDemoSection";
import { CollaborationFeaturesSection } from "@/components/home/CollaborationFeaturesSection";
import { EarlyAdopterSection } from "@/components/home/EarlyAdopterSection";
import { EncryptionSection } from "@/components/home/EncryptionSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { GetStartedSnippetSelect } from "@/components/home/GetStartedSnippetSelect";
import { HeroSection } from "@/components/home/HeroSection";
import { HowJazzWorksSection } from "@/components/home/HowJazzWorksSection";
import { LocalFirstFeaturesSection } from "@/components/home/LocalFirstFeaturesSection";
import ProblemStatementSection from "@/components/home/ProblemStatementSection";
import { SupportedEnvironmentsSection } from "@/components/home/SupportedEnvironmentsSection";
import { Testimonial } from "@garden-co/design-system/src/components/molecules/Testimonial";

export default function Home() {
  return (
    <>
        <HeroSection />
      <div className="container flex flex-col gap-12 lg:gap-20">

        <GetStartedSnippetSelect />
        <SupportedEnvironmentsSection />
        <HowJazzWorksSection />

        <Testimonial name="Spreadsheet app (stealth)" role="CTO">
          <p>
            You don&apos;t have to think about deploying a database, SQL
            schemas, relations, and writing queries… Basically,{" "}
            <span className="bg-highlight px-1">
              if you know TypeScript, you know Jazz
            </span>
            , and you can ship an app. It&apos;s just so nice!
          </p>
        </Testimonial>

        <ChatDemoSection />

        <ProblemStatementSection />

        <LocalFirstFeaturesSection />

        <CollaborationFeaturesSection />

        <EncryptionSection />

        <Testimonial name="Invoice Radar" role="Technical Founder">
          We just wanted to build a single-player experience first, planning to
          add team and org features much later. But because of Jazz, we had that
          from day one.{" "}
          <span className="bg-highlight px-1">
            All we needed to add was an invite button.
          </span>
        </Testimonial>

        <FeaturesSection />

        <EarlyAdopterSection />
      </div>
    </>
  );
}
