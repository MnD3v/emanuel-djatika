import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "df5p97qk",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});