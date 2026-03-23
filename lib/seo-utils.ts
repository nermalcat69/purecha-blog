import type { Metadata } from 'next'
import { siteMetadata } from '@/data/siteMetadata'

interface PageMetadataOptions {
  title: string
  description: string
  canonical: string
  keywords?: string[]
  type?: 'website' | 'article'
  publishedTime?: string
}

export function generatePageMetadata(options: PageMetadataOptions): Metadata {
  const { title, description, canonical, keywords, type = 'website', publishedTime } = options
  const url = `${siteMetadata.siteUrl}${canonical}`

  return {
    title,
    description,
    keywords: [...(siteMetadata.defaultKeywords), ...(keywords ?? [])],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteMetadata.title,
      locale: siteMetadata.locale,
      type: type === 'article' ? 'article' : 'website',
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: siteMetadata.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteMetadata.companyName,
    url: siteMetadata.siteUrl,
    description: siteMetadata.description,
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateRecipeArticleSchema(title: string, description: string, url: string, datePublished: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    author: {
      '@type': 'Organization',
      name: siteMetadata.companyName,
    },
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.companyName,
      url: siteMetadata.siteUrl,
    },
  }
}
