import { useEffect, useState } from "react";

export function useMedia(query: string) {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);

    const listener = () => setMatches(media.matches);

    listener(); // initial sync
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export function useIsDesktop() {
  return useMedia("(min-width: 768px)");
}
