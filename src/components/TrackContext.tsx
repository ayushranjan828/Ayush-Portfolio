"use client";

import { useSyncExternalStore } from "react";
import { defaultTrack, tracks, type Track, type TrackId } from "@/data/profile";

/**
 * The selected career track lives in a tiny module-level store rather than React
 * state, so every section stays in sync without a provider. `useSyncExternalStore`
 * renders the default on the server and swaps in a stored preference after
 * hydration — no mismatch warning, no setState-in-effect.
 */

const STORAGE_KEY = "portfolio-track";
const listeners = new Set<() => void>();

let current: TrackId | null = null;

function isTrackId(v: unknown): v is TrackId {
  return tracks.some((t) => t.id === v);
}

function getSnapshot(): TrackId {
  if (current === null) {
    current = defaultTrack;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (isTrackId(stored)) current = stored;
    } catch {
      /* private mode — fall back to the default */
    }
  }
  return current;
}

function getServerSnapshot(): TrackId {
  return defaultTrack;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function setTrack(id: TrackId) {
  if (current === id) return;
  current = id;
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {
    /* the choice just won't persist */
  }
  listeners.forEach((l) => l());
}

export function useTrack(): { trackId: TrackId; track: Track; setTrack: typeof setTrack } {
  const trackId = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const track = tracks.find((t) => t.id === trackId) ?? tracks[0];
  return { trackId, track, setTrack };
}
