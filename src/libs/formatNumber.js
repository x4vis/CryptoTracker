export const formatNumber = ({currency, locale}) => {
  if (typeof currency !== 'string') {
    throw Error('currency es requerido y necesita ser de tipo string');
  }

  if (typeof locale !== 'string') {
    throw Error('locale es requerido y necesita ser de tipo string');
  }

  const format = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 4,
  });

  return format;
};

export const formatNumberType = {
  currency: {
    USA: 'USD',
    MEX: 'MXN',
  },
  locale: {
    USA: 'en-US',
    MEX: 'es-MXN',
  },
};