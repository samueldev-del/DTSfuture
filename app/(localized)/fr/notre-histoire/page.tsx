import { StoryPage } from "@/src/components/pages/StoryPage";
import { buildLocaleMetadata } from "@/src/i18n/metadata";

export const metadata = buildLocaleMetadata("fr", "storyPage");

export default function FrenchStoryPage() {
  return <StoryPage />;
}