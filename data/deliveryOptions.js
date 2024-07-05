import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
}, {
  id: '2',
  deliveryDays: 3,
  priceCents: 499
}, {
  id: '3',
  deliveryDays: 1,
  priceCents: 999
}];

export function getDeliveryOption(deliveryoptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryoptionId) {
      deliveryOption = option;
    }
  });

  return deliveryOption || deliveryOptions[0];
}

export function calculateDeliveryDate(deliveryOption) {

  // Retrieve current day and delivery option
  const today = dayjs();
  let deliveryDate = today;
  let deliveryDays = deliveryOption.deliveryDays;
  
  while (deliveryDays > 0) {
    // Increment date by 1 day
    deliveryDate = deliveryDate.add(1, 'day');

    /* Weekends are not working days, so don't count 
    them as days in delivery date calculation. */
    if (deliveryDate.day() === 6 || deliveryDate.day() === 0) {
      continue;
    } else {
      deliveryDays--;
    }
  }

  // Format string and return
  const dateString = deliveryDate.format(
    'dddd, MMMM D'
  );

  return dateString;
}