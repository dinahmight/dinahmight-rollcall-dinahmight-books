// Fill in each URL the moment the book goes live on that retailer.
// Leaving a value as null shows a disabled "Coming soon" state instead of a broken link.
// availableFrom (YYYY-MM-DD) gates a filled-in url so the button flips live automatically on that date.
//
// NOTE: The discounted Hardcover/Paperback (IngramSpark) links are intentionally NOT listed
// here. They only appear on the email-gated /buy page (see hardcoverBuyUrl / paperbackBuyUrl
// below). This array powers the public <WhereToBuy /> component shown on The Book page.
export type RetailerLink = {
  name: string;
  url: string | null;
  availableFrom?: string;
};

export const retailerLinks: RetailerLink[] = [
  {
    name: "Amazon",
    url: "https://a.co/d/0d0qoTfM",
    availableFrom: "2026-10-01",
  },
  {
    name: "Barnes & Noble",
    url: "https://www.barnesandnoble.com/w/roll-call-dinah-cochran/1151457856?ean=9781972750650",
    availableFrom: "2026-10-01",
  },
  {
    name: "Walmart",
    url: "https://www.walmart.com/ip/Roll-Call-A-31-Day-Gratitude-Journey-Through-the-Names-of-God-Paperback-9781972750643/21101404146?classType=REGULAR&from=/search",
    availableFrom: "2026-10-01",
  },
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
