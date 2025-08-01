import { Extension } from "@tiptap/core";
import { CoRichText } from "jazz-tools";
import { createJazzPlugin } from "jazz-tools/prosemirror";

export interface JazzSyncOptions {
  /** The CoRichText instance to synchronize with */
  coRichText: CoRichText;
  /** Configuration options for the plugin */
  config?: Parameters<typeof createJazzPlugin>[1];
}

export const JazzSyncExtension = Extension.create<JazzSyncOptions>({
  name: "jazzSync",

  addOptions() {
    return {
      coRichText: undefined as any,
      config: {},
    };
  },

  addProseMirrorPlugins() {
    if (!this.options.coRichText) {
      throw new Error("JazzSyncExtension requires a CoRichText value");
    }
    return [createJazzPlugin(this.options.coRichText, this.options.config)];
  },
});
