export const formatNumber = (currency, locale) => {

  if(typeof currency !== 'string') {
    throw Error('currency necesita ser de tipo string');
  }

  if(typeof locale !== 'string') {
    throw Error('locale necesita ser de tipo string');
  }

  const format = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 4
  });

  return format;
} 