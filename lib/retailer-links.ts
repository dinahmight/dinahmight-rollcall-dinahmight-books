// Retailer links shown on The Book page and the Buy the Book page.
// Leaving a url as null shows a disabled "Coming soon" state instead of a broken link.
// availableFrom (YYYY-MM-DD) gates a filled-in url so the button flips live automatically on that date.
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
