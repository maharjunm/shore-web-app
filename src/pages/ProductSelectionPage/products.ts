import  ProductData  from '../../components/DataModels/ProductData';

const products:ProductData[]=[
  {
    type: 'Regular',
    amount: 0,
    hostingTime: 30,
    offers: [
      { field: 'logo in search', value: true },
      { field: 'logo in description', value: true },
      { field: 'boosted display', value: false },
      { field: 'highlight in search', value: false },
      { field: 'job of the week', value: false },
      { field: 'job of the month', value: false }
    ]
  },
  {
    type: 'Platinum',
    amount: 100,
    hostingTime: 30,
    offers: [
      { field: 'logo in search', value: true },
      { field: 'logo in description', value: true },
      { field: 'boosted display', value: true },
      { field: 'highlight in search', value: true },
      { field: 'job of the week', value: false },
      { field: 'job of the month', value: false }
    ]
  },
  {
    type: 'Diamond',
    amount: 200,
    hostingTime: 60,
    offers: [
      { field: 'logo in search', value: true },
      { field: 'logo in description', value: true },
      { field: 'boosted display', value: true },
      { field: 'highlight in search', value: true },
      { field: 'job of the week', value: true },
      { field: 'job of the month', value: true }
    ]
  },
];

export default products;
