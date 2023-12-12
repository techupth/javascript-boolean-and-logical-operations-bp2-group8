// Exercise #2: Promotion Conditions

// Start coding here
// JohnInfo={lastMonthPaid:4001, buyWeekday:Friday, buyITProduct: No,
//  eventAttend:2,Member:Gold}
let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
let isPlatinum = false;

let hasPromotion= (lastMonthPaidMoreThan4000 && isWeekday && !hasBoughtProductFromITCategory && !hasAttendedDiscountEvent) || isPlatinum;

console.log(hasPromotion);
