export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Host Now',
      route: '/events/create',
    },
    {
      label: '',
      route: '/profile',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }