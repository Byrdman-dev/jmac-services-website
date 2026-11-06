/**
 * Single source of truth for business details and page copy.
 * Edit here; components read from this file.
 */
import type { ImageMetadata } from 'astro';
import iconLandClearing from '../assets/icons/land-clearing.png';
import iconBrushHogging from '../assets/icons/brush-hogging.png';
import iconGravelDriveways from '../assets/icons/gravel-driveways.png';
import iconDirtWork from '../assets/icons/dirt-work.png';
import iconDebrisRemoval from '../assets/icons/debris-removal.png';
import iconSkidSteerWork from '../assets/icons/skid-steer-work.png';
import iconGravelRestoration from '../assets/icons/gravel-restoration.png';
import iconCustomPatioFurniture from '../assets/icons/custom-patio-furniture.png';
import iconCarpentry from '../assets/icons/carpentry.png';
import iconCulvertInstallation from '../assets/icons/culvert-installation.png';
import brushHoggingProgress from '../assets/work/brush-hogging-progress.jpg';
import brushHoggingAfter from '../assets/work/brush-hogging-after.jpg';
import stumpRemoval from '../assets/work/stump-removal.jpg';
import skidSteerGrapple from '../assets/work/skid-steer-grapple.jpg';
import tractorSkidSteer from '../assets/work/tractor-skid-steer.jpg';
import dirtWorkHouseGrading from '../assets/work/dirt-work-house-grading.jpg';
import dirtWorkLotGrading from '../assets/work/dirt-work-lot-grading.jpg';
import gravelDriveway from '../assets/work/gravel-driveway.jpg';
import culvertInstallAfter from '../assets/work/culvert-install-after.jpg';
import culvertInstallPipe from '../assets/work/culvert-install-pipe.jpg';
import patioTableBuild1 from '../assets/work/patio-table-build-1.jpg';
import patioTableBuild2 from '../assets/work/patio-table-build-2.jpg';
import patioTableFinished from '../assets/work/patio-table-finished.jpg';
import patioTableBranded from '../assets/work/patio-table-branded.jpg';
import carpentryBenchBuild from '../assets/work/carpentry-bench-build.jpg';
import carpentryGardenBoxes from '../assets/work/carpentry-garden-boxes.jpg';

export interface Service {
  title: string;
  description: string;
  icon: ImageMetadata;
}

export interface Step {
  title: string;
  description: string;
}

export interface VideoItem {
  label: string;
  facebookReel: string;
}

export interface GalleryPhoto {
  photo: ImageMetadata;
  alt: string;
  caption: string;
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
  services: [
    {
      title: 'Land clearing',
      description:
        'Overgrown lot or raw ground? We clear brush and overgrowth so the land is ready for what comes next.',
      icon: iconLandClearing,
    },
    {
      title: 'Brush hogging',
      description:
        'Heavy brush hogging for fields, fence lines, and lots that have gotten away from you.',
      icon: iconBrushHogging,
    },
    {
      title: 'Gravel driveways',
      description:
        'New gravel driveways built from the base up, and worn-out ones repaired and brought back into shape.',
      icon: iconGravelDriveways,
    },
    {
      title: 'Dirt work',
      description:
        'Moving, spreading, and shaping dirt to get a site, yard, or pad where it needs to be.',
      icon: iconDirtWork,
    },
    {
      title: 'Debris removal',
      description:
        'Brush piles, leftover material, and cleanup debris taken off the property so the job is actually finished.',
      icon: iconDebrisRemoval,
    },
    {
      title: 'Skid steer work',
      description:
        "Loading, moving material, and tight spots where bigger equipment can't get in.",
      icon: iconSkidSteerWork,
    },
    {
      title: 'Gravel restoration',
      description:
        'Washed-out or rutted gravel driveways reworked and topped off so they drain right and hold up again.',
      icon: iconGravelRestoration,
    },
    {
      title: 'Culvert installation',
      description: 'Driveway and drainage culverts installed so water moves where it needs to.',
      icon: iconCulvertInstallation,
    },
  ] satisfies Service[],
  // Shown in the "Custom builds" section alongside the patio furniture & carpentry gallery.
  craftServices: [
    {
      title: 'Custom patio furniture',
      description:
        'Picnic tables and other patio furniture built to order and sized to fit your outdoor space.',
      icon: iconCustomPatioFurniture,
    },
    {
      title: 'Carpentry',
      description: 'General carpentry for outdoor builds, from framing to finish work.',
      icon: iconCarpentry,
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
  // Facebook reels embedded in the "Watch us work" section.
  videos: [
    { label: 'Trenching', facebookReel: 'https://www.facebook.com/reel/989341430420232' },
    { label: 'Hole boring', facebookReel: 'https://www.facebook.com/reel/2744232355926403' },
    { label: 'Brush hogging', facebookReel: 'https://www.facebook.com/reel/1874322156559399' },
  ] satisfies VideoItem[],
  // Job photos for the "Our work" gallery.
  workPhotos: [
    {
      photo: brushHoggingProgress,
      alt: 'Tractor brush hogging through dense overgrown brush',
      caption: 'Brush hogging',
    },
    {
      photo: brushHoggingAfter,
      alt: 'Field cut down to grass after brush hogging',
      caption: 'Cleared & mowed',
    },
    {
      photo: stumpRemoval,
      alt: 'Excavator lifting a large tree stump out of the ground',
      caption: 'Stump removal',
    },
    {
      photo: skidSteerGrapple,
      alt: 'Skid steer with a grapple bucket on a dirt driveway',
      caption: 'Skid steer work',
    },
    {
      photo: tractorSkidSteer,
      alt: 'Tractor and skid steer clearing a brush-covered lot together',
      caption: 'Land clearing',
    },
    {
      photo: dirtWorkHouseGrading,
      alt: 'Dirt graded along the side of a house',
      caption: 'Dirt work',
    },
    {
      photo: dirtWorkLotGrading,
      alt: 'Graded building lot with a dumpster staged beside the house',
      caption: 'Dirt work',
    },
    {
      photo: gravelDriveway,
      alt: 'Finished gravel driveway in front of a brick home',
      caption: 'Gravel driveway',
    },
    {
      photo: culvertInstallAfter,
      alt: 'Finished culvert tie-in at the end of a driveway',
      caption: 'Culvert installation',
    },
    {
      photo: culvertInstallPipe,
      alt: 'Culvert pipe being set into a drainage ditch',
      caption: 'Culvert installation',
    },
  ] satisfies GalleryPhoto[],
  // Photos for the "Custom builds" (patio furniture & carpentry) section.
  craftPhotos: [
    {
      photo: patioTableBuild1,
      alt: 'Wood picnic-style patio table under construction on a carport',
      caption: 'Patio table build',
    },
    {
      photo: patioTableBuild2,
      alt: 'Octagonal wood patio table being built on a brick-house patio',
      caption: 'Patio table build',
    },
    {
      photo: patioTableFinished,
      alt: 'Finished stone-top patio dining table on a screened porch overlooking the water',
      caption: 'Finished patio table',
    },
    {
      photo: patioTableBranded,
      alt: "Finished octagonal picnic table with a customer's logo built into the top",
      caption: 'Finished patio table',
    },
    {
      photo: carpentryBenchBuild,
      alt: 'Wood bench frame being assembled in a driveway',
      caption: 'Bar top table',
    },
    {
      photo: carpentryGardenBoxes,
      alt: 'Raised garden boxes built from lumber',
      caption: 'Raised planter',
    },
  ] satisfies GalleryPhoto[],
} as const;
