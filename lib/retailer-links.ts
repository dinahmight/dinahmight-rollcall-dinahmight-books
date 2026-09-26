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
