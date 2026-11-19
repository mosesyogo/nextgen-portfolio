import { defineQuery } from "next-sanity";
import { FloatingDockClient } from "@/components/FloatingDockClient";
import { sanityFetch } from "@/sanity/lib/live";
import type { Navigation } from "../../sanity.types";

type NavigationItem = Pick<
  Navigation,
  "title" | "href" | "icon" | "isExternal"
>;

const NAVIGATION_QUERY =
  defineQuery(`*[_type == "navigation"] | order(order asc){
  title,
  href,
  icon,
  isExternal
}`);

export async function FloatingDock() {
  const { data } = await sanityFetch({ query: NAVIGATION_QUERY });
  const navItems = data as NavigationItem[] | null;

  if (!navItems || navItems.length === 0) {
    return null;
  }

  return <FloatingDockClient navItems={navItems} />;
}
