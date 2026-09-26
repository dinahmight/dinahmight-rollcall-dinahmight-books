// Fill in each URL the moment the book goes live on that retailer.
// Leaving a value as null shows a disabled "Coming soon" state instead of a broken link.
// availableFrom (YYYY-MM-DD) gates a filled-in url so the button flips live automatically on that date.
export type RetailerLink = {
  name: string;
  url: string | null;
  availableFrom?: string;
};

export const retailerLinks: RetailerLink[] = [
  {
    name: "Hardcover (IngramSpark)",
    url: "https://shop.ingramspark.com/b/084?params=8usP6AqpWw6Fgz6ksVj73gwsphITUjumTllI88AjuAe",
    availableFrom: "2026-09-28",
  },
  {
    name: "Paperback (IngramSpark)",
    url: "https://shop.ingramspark.com/b/084?params=ETqdj4S66sTpt4Nf6JcabjUewGrvZlhkk1NCcsHTedC",
    availableFrom: "2026-09-28",
  },
  { name: "Amazon", url: null },
  { name: "Barnes & Noble", url: null },
  { name: "Walmart", url: null },
];

export const ministryUrl = "https://www.iknowaguyministries.org";

export const hardcoverBuyUrl =
  "https://shop.ingramspark.com/b/084?params=8usP6AqpWw6Fgz6ksVj73gwsphITUjumTllI88AjuAe";
export const hardcoverAvailableFrom = "2026-09-28";
export const hardcoverQrCodeUrl =
  "https://g.tlcdn.com/view/8d154ccb6e5a4a53a213daffdd808eff.png";

export const paperbackBuyUrl =
  "https://shop.ingramspark.com/b/084?params=ETqdj4S66sTpt4Nf6JcabjUewGrvZlhkk1NCcsHTedC";
export const paperbackAvailableFrom = "2026-09-28";
export const paperbackQrCodeUrl =
  "https://g.tlcdn.com/view/5f56f4cfe15d4f66999372c8abc333e3.png";
