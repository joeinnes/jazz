import { useAccount } from "jazz-tools/react";
import { JazzAccount, hasChanges } from "./schema";
export function DraftIndicator() {
  const { me } = useAccount(JazzAccount, {
    resolve: { root: { draft: true } },
  });

  if (hasChanges(me?.root.draft)) {
    return (
      <div className="absolute -top-1 -right-1 bg-blue-500 border-2 border-white w-3 h-3 rounded-full dark:border-stone-925">
        <span className="sr-only">You have a draft</span>
      </div>
    );
  }
}
