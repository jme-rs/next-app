import { PageMetadata } from '@/types/page-meta';
import { JSDOM } from 'jsdom';
import nodefetch from 'node-fetch'


function getTitle(document: Document): string | undefined {
  const title = document.querySelector("title");
  return title?.textContent || undefined;
}

function getDescription(document: Document): string | undefined {
  const description = document.querySelector("meta[name=description]");
  return description?.getAttribute("content") || undefined;
}

function getOGPImageURL(document: Document): string | undefined {
  const imgURL = document.querySelector('meta[property="og:image"]');
  return imgURL?.getAttribute("content") || undefined;
}

function getIconURL(document: Document): string | undefined {
  const iconURL = document.querySelector("link[rel=icon]");
  return iconURL?.getAttribute("href") || undefined;
}

async function getDocument(url: string): Promise<Document> {
  const res = await nodefetch(url);
  const html = await res.text();
  const dom = new JSDOM(html);
  const document = dom.window.document;
  return document;
}

export async function getPageMeta(url: string): Promise<PageMetadata> {
  console.log("getPageMeta", url);
  // const document = (await JSDOM.fromURL(url)).window.document;
  const document = await getDocument(url);

  const title = getTitle(document);
  const description = getDescription(document);
  const imgURL = getOGPImageURL(document) || getIconURL(document);

  return { title, description, imgURL };
}
