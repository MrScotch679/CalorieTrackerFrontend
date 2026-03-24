import { Locale, NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';

import { roboto } from '@/fonts';
import { QueryProvider, routing } from '@/shared';
import { MobxProvider } from '@/shared/providers/MobxProvider';
import '@/styles/main.scss';

interface Props {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}

export default async function LocaleLayout(props: Props) {
  const { children, params } = props;

  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    console.error(`Locale ${locale} is not supported`);

    notFound();
  }

  return (
    <html lang={locale}>
      <body className={roboto.variable}>
        <QueryProvider>
          <MobxProvider>
            <NextIntlClientProvider>{children}</NextIntlClientProvider>
          </MobxProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
