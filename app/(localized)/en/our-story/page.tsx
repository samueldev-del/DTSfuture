import { StoryPage } from "@/src/components/pages/StoryPage";
import { buildLocaleMetadata } from "@/src/i18n/metadata";

export const metadata = buildLocaleMetadata("en", "storyPage");

export default function EnglishStoryPage() {
  return <StoryPage />;
}