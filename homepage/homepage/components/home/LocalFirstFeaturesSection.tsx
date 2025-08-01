import type { IconName } from "@garden-co/design-system/src/components/atoms/Icon";
import { FeatureCard } from "@garden-co/design-system/src/components/molecules/FeatureCard";
import { GappedGrid } from "@garden-co/design-system/src/components/molecules/GappedGrid";
import { SectionHeader } from "@garden-co/design-system/src/components/molecules/SectionHeader";

export function LocalFirstFeaturesSection() {
  const features: Array<{
    title: string;
    icon: IconName;
    description: React.ReactNode;
  }> = [
    {
      title: "Offline-first",
      icon: "offline",
      description: (
        <>
          Your app works seamlessly offline or on sketchy connections. When
          you&apos;re back online, your data is synced.
        </>
      ),
    },
    {
      title: "Instant updates",
      icon: "instant",
      description: (
        <>
          Since you&apos;re working with local state, your UI updates instantly.
          Just mutate data. No API calls and spinners.
        </>
      ),
    },
    {
      title: "Real-time sync",
      icon: "devices",
      description: (
        <>
          Every device with the same account will always have everything in
          sync.
        </>
      ),
    },
    {
      title: "Multiplayer",
      icon: "spatialPresence",
      description: (
        <>
          Adding multiplayer is as easy as sharing synced data with other users.
          Quickly build user presence UI, like cursors.
        </>
      ),
    },
  ];
  return (
    <div>
      <SectionHeader
        title="Local-first state with global sync"
        slogan={
          <>
            <p>
              With cloud-synced local state, your data is kept on-device, and
              synced whenever possible.
            </p>
          </>
        }
      />
      <GappedGrid cols={4}>
        {features.map(({ title, icon, description }) => (
          <FeatureCard
            label={title}
            icon={icon}
            explanation={description}
            key={title}
          ></FeatureCard>
        ))}
      </GappedGrid>
    </div>
  );
}
