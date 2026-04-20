import { StoryPage } from "@/src/components/pages/StoryPage";
import { buildLocaleMetadata } from "@/src/i18n/metadata";

export const metadata = buildLocaleMetadata("de", "storyPage");

export default function GermanStoryPage() {
  return <StoryPage />;
}
