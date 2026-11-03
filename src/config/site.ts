/**
 * Single source of truth for business details and page copy.
 * Edit here; components read from this file.
 */
import type { ImageMetadata } from 'astro';
import trenchingPhoto from '../assets/work/trenching.png';
import holeBoringPhoto from '../assets/work/hole-boring.png';
import brushHoggingPhoto from '../assets/work/brush-hogging.png';

export type IconName =
  | 'clearing'
  | 'brush'
  | 'gravel'
  | 'dirt'
  | 'debris'
  | 'skidsteer';

export interface Service {
  title: string;
  description: string;
  icon: IconName;
}

export interface Step {
  title: string;
  description: string;
}

export interface WorkItem {
  label: string;
  photo: ImageMetadata;
  facebookReel: string;
}

export const site = {
  name: 'JMAC Services LLC',
  shortName: 'JMAC Services',
  headline: 'Done from the ground up.',
  eyebrow: 'Land clearing · Dirt work · Driveways',
  intro:
    'JMAC Services handles dirt work, builds and repairs gravel driveways, and tackles heavy brush hogging with skid steer equipment.',
  audience: 'Residential & Commercial',
  area: 'Southwest Louisiana',
  tagline: ['Built on integrity', 'Driven by quality', 'Focused on results'],
  values: ['Reliable service', 'Quality workmanship', 'Customer satisfaction'],
  phone: { display: '(337) 513-7776', href: 'tel:+13375137776', e164: '+13375137776' },
  email: 'jdmcfarlain96@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=61588497090496',
  nav: [
    { label: 'Services', href: '#services' },
    { label: 'How it works', href: '#process' },
    { label: 'Our work', href: '#work' },
  ],
  services: [
    {
      title: 'Land clearing',
      description:
        'Overgrown lot or raw ground? We clear brush and overgrowth so the land is ready for what comes next.',
      icon: 'clearing',
    },
    {
      title: 'Brush hogging',
      description:
        'Heavy brush hogging for fields, fence lines, and lots that have gotten away from you.',
      icon: 'brush',
    },
    {
      title: 'Gravel driveways',
      description:
        'New gravel driveways built from the base up, and worn-out ones repaired and brought back into shape.',
      icon: 'gravel',
    },
    {
      title: 'Dirt work',
      description:
        'Moving, spreading, and shaping dirt to get a site, yard, or pad where it needs to be.',
      icon: 'dirt',
    },
    {
      title: 'Debris removal',
      description:
        'Brush piles, leftover material, and cleanup debris taken off the property so the job is actually finished.',
      icon: 'debris',
    },
    {
      title: 'Skid steer work',
      description:
        "Loading, moving material, and tight spots where bigger equipment can't get in.",
      icon: 'skidsteer',
    },
  ] satisfies Service[],
  steps: [
    {
      title: 'Give us a call',
      description: 'Tell us about the job and where it is. Photos help if you have them.',
    },
    {
      title: 'Get a quote',
      description: "We look at what's involved and give you a price before any work starts.",
    },
    {
      title: 'We get it done',
      description: 'We show up with the equipment and handle the work from start to finish.',
    },
  ] satisfies Step[],
  // Job photo tiles. Set facebookReel once the matching Facebook reel link is known.
  work: [
    { label: 'Trenching', photo: trenchingPhoto, facebookReel: 'https://www.facebook.com/reel/989341430420232' },
    { label: 'Hole boring', photo: holeBoringPhoto, facebookReel: 'https://www.facebook.com/reel/2744232355926403' },
    { label: 'Brush hogging', photo: brushHoggingPhoto, facebookReel: 'https://www.facebook.com/reel/1874322156559399' },
  ] satisfies WorkItem[],
} as const;
