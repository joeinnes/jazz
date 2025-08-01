import { beforeEach, describe, expect, test } from "vitest";
import { CoPlainText, co, z } from "../exports.js";
import { createJazzTestAccount, setupJazzTestSync } from "../testing.js";

describe("co.optional", () => {
  beforeEach(async () => {
    await setupJazzTestSync();

    await createJazzTestAccount({
      isCurrentActiveAccount: true,
      creationProps: { name: "Hermes Puggington" },
    });
  });

  test("can use co.optional with CoValue schemas as values", () => {
    const Person = co.map({
      preferredName: co.optional(co.plainText()),
    });

    const person = Person.create({});

    type ExpectedType = {
      preferredName?: CoPlainText;
    };

    function matches(value: ExpectedType) {
      return value;
    }

    matches(person);
  });

  test("cannot use co.optional with zod schemas as values", () => {
    const Person = co.map({
      // @ts-expect-error: cannot use co.optional with a Zod schema
      preferredName: co.optional(z.string()),
    });
  });

  test("can use schem.optional() on all CoValue schemas but co.optional()", () => {
    const Option1 = co.map({ type: z.literal("1") });
    const Option2 = co.map({ type: z.literal("2") });
    const Schema = co.map({
      plainText: co.plainText().optional(),
      richText: co.richText().optional(),
      fileStream: co.fileStream().optional(),
      image: co.image().optional(),
      record: co.record(z.string(), z.string()).optional(),
      map: co.map({ field: z.string() }).optional(),
      list: co.list(z.string()).optional(),
      feed: co.feed(z.string()).optional(),
      union: co.discriminatedUnion("type", [Option1, Option2]).optional(),
    });

    const schema = Schema.create({});

    expect(schema.plainText).toBeUndefined();
    expect(schema.richText).toBeUndefined();
    expect(schema.fileStream).toBeUndefined();
    expect(schema.image).toBeUndefined();
    expect(schema.record).toBeUndefined();
    expect(schema.map).toBeUndefined();
    expect(schema.list).toBeUndefined();
    expect(schema.feed).toBeUndefined();
    expect(schema.union).toBeUndefined();

    schema.plainText = Schema.shape.plainText.innerType.create("Hello");
    schema.richText = Schema.shape.richText.innerType.create("Hello");
    schema.fileStream = Schema.shape.fileStream.innerType.create();
    schema.image = Schema.shape.image.innerType.create({
      originalSize: [1920, 1080],
    });
    schema.record = Schema.shape.record.innerType.create({ field: "hello" });
    schema.map = Schema.shape.map.innerType.create({ field: "hello" });
    schema.list = Schema.shape.list.innerType.create([]);
    schema.feed = Schema.shape.feed.innerType.create([]);
    schema.union = Option1.create({ type: "1" });

    expect(schema.plainText?.toString()).toEqual("Hello");
    expect(schema.richText?.toString()).toEqual("Hello");
    expect(schema.fileStream).not.toBeUndefined();
    expect(schema.image?.originalSize).toEqual([1920, 1080]);
    expect(schema.record?.field).toEqual("hello");
    expect(schema.map?.field).toEqual("hello");
    expect(schema.list).toEqual([]);
    expect(schema.feed).not.toBeUndefined();
    expect(schema.union?.type).toEqual("1");
  });

  test("can access the inner schema of a co.optional", () => {
    const Person = co.map({
      preferredName: co.optional(co.plainText()),
    });

    const person = Person.create({
      preferredName: Person.shape["preferredName"].innerType.create("John"),
    });

    expect(person?.preferredName?.toString()).toEqual("John");
  });
});
