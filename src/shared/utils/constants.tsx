import {
  ahaImg,
  aha_img,
  aha_logo,
  alcohol,
  aple,
  arduinoImg,
  arduinoLogo,
  arts,
  aurduinoBack,
  auto,
  automotive,
  baby,
  ball,
  bamp1,
  bamp3,
  barBack,
  barImg,
  barLogo,
  battery,
  beauty,
  blck,
  books,
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brevilleBack,
  brevilleImg,
  brevilleLogo,
  c_s,
  category,
  cellphones,
  circle,
  clif_img,
  clif_logo,
  cloth,
  cofee,
  cutting,
  detourBack,
  detourImg,
  detourLogo,
  drink,
  duluxpaintImg,
  electronics,
  entertainment,
  fashion,
  fav_apple,
  fitness,
  food,
  games,
  garden,
  garden_brand,
  google,
  googleImg,
  green_marker,
  grocery,
  h,
  health_brand,
  home,
  home_brand,
  hotyogaImg,
  industrial,
  jamesCoffeImg,
  jewelry,
  kitchen,
  lewisbakeryImg,
  logitech_G,
  mec,
  miscellaneous,
  mouse,
  music,
  nike,
  office,
  personal_care,
  pets,
  proteinImg,
  restaurants,
  retail,
  shoes,
  sketch,
  smoothieBack,
  smoothieImg,
  smoothieLogo,
  software,
  speaker,
  sponser4,
  sports,
  top,
  toys,
  travel,
  tuf,
  uniqlo,
  watches,
  welcome1,
  welcome2,
  welcome3,
} from '@assets';

export const constant1 = {};
import {arrow} from '@assets';
let isDarkThemeEnabled = false;

export const GOOGLE_PLACES_API_KEY = 'AIzaSyCRQbuzB7296abvanXJON4x7_PcoR_MKLo';

export function setIsDarkModeEnabled(isEnabled: any) {
  isDarkThemeEnabled = isEnabled;
}
export function getIsDarkModeEnabled() {
  return isDarkThemeEnabled;
}

export const scanData = [
  {id: 1, url: circle, txt: 'Scan ID'},
  {id: 2, url: circle, txt: 'Take Selfie'},
];

export const emboss: any = [
  {id: '1', name: 'Matthew C Maiorano'},
  {id: '2', name: 'Maiorano C Matthew'},
  {id: '3', name: 'M. C. Maiorano'},
];

export const cardReason: any = [
  {id: '1', name: 'To Rebuild My Credit'},
  {id: '2', name: 'New To Canda'},
  {id: '3', name: 'Want a rewards Credit Card'},
];

export const verfiaction_options: any = [
  {id: '1', name: 'Fingerprint'},
  {id: '2', name: 'Code/ PIN'},
  {id: '3', name: 'Facial Recognition'},
];

export const data_account: any = [
  {id: '1', name: 'LinkedIn', selected: false},
  {id: '2', name: 'Facebook', selected: false},
  {id: '3', name: 'Twitter', selected: false},
  {id: '4', name: 'Instagram', selected: false},
  {id: '5', name: 'Word of mouth', selected: false},
];
export const data_industry: any = [
  {id: '1', name: 'Business'},
  {id: '2', name: 'Consultancy or Management-Accountancy'},
  {id: '3', name: 'Banking or Finance-Charity'},
  {id: '4', name: 'Voluntary work-Creative arts or Designing'},
  {id: '5', name: 'Energy and utilities'},
  {id: '6', name: 'Engineering or manufacturing'},
  {id: '7', name: 'Environment or agriculture'},
  {id: '8', name: 'Healthcare-Hospitality'},

  {id: '9', name: 'Events-Computing or IT'},
  {id: '10', name: 'Environment or agriculture'},
  {id: '12', name: 'Law -Law enforcement and security'},
  {id: '13', name: 'Leisure, sport or tourism'},
  {id: '14', name: 'Marketing, advertising or PR'},
  {id: '15', name: 'Media or digital - Property or construction'},
  {id: '16', name: 'Public services or administration'},
  {id: '17', name: 'Recruitment or HR -Retail'},
  {id: '18', name: 'Science or pharmaceuticals '},
  {id: '19', name: 'Social care -Teacher training or education'},
  {id: '20', name: 'Transport or logistics'},
];

export const info: any = [
  {id: '1', name: 'Employed'},
  {id: '2', name: 'Student'},
  {id: '3', name: 'Unemployed'},
];

export const months = [
  {title: 'January', val: 0},
  {title: 'July', val: 6},
  {title: 'February', val: 1},
  {title: 'August', val: 7},
  {title: 'March', val: 2},
  {title: 'September', val: 8},
  {title: 'April', val: 3},
  {title: 'October', val: 9},
  {title: 'May', val: 4},
  {title: 'November', val: 10},
  {title: 'June', val: 5},
  {title: 'December', val: 11},
];
export const terms_data: any = [
  {id: 1, text: 'Terms and Conditions', selected: false, image: arrow},
  {id: 2, text: 'Disclosure Agreement', selected: false, image: arrow},
];

export const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export const WelcomeData = [
  {id: 0, url: welcome1, txt: 'Find Local Stores'},
  {id: 1, url: welcome2, txt: 'Choose Your Offers'},
  {id: 2, url: welcome3, txt: 'Earn Reward Points'},
];
export const categoriesList: any = [
  {
    id: 0,
    url: auto,
    name: 'Auto',
  },
  {id: 1, url: food, name: 'Food'},
  {id: 2, url: drink, name: 'Drinks'},
  {id: 3, url: pets, name: 'Pets'},
  {
    id: 4,
    url: cloth,
    name: 'Clothing',
  },
  {id: 5, url: h, name: 'Home'},
  {id: 6, url: beauty, name: 'Beauty'},
  {id: 7, url: sports, name: 'Sports'},
  {
    id: 8,
    url: cloth,
    name: 'Clothing',
  },
  {id: 9, url: h, name: 'Home'},
  {id: 10, url: beauty, name: 'Beauty'},
  {id: 11, url: sports, name: 'Sports'},
];
export const explore_stores: any = [
  {
    id: 1,
    type: 'bap',
    url: bamp1,
    points: '1,000',
    txt: 'Patagonia',
    miniTxt: 'Spend $50 and earn 500 Plastk Reward Points.',
  },

  {
    id: 2,
    type: 'bap',
    url: category,
    points: '1,000',
    txt: 'Birria Palace',
    miniTxt:
      'Spend at least $50.00 and earn 500 additional Plastk Reward Points each visit.',
  },

  {
    id: 3,
    type: 'bap',
    url: bamp3,
    points: '1,000',
    txt: 'Patagonia',
    miniTxt: 'Spend $50 and earn 500 Plastk Reward Points.',
  },
  {
    id: 4,
    type: 'bap',
    url: category,
    points: '1,000',
    txt: 'Birria Palace',
    miniTxt:
      'Spend at least $50.00 and earn 500 additional Plastk Reward Points each visit.',
  },
];
export const explore_brands: any = [
  {
    id: 1,
    type: 'bmp',
    url: ahaImg,
    img: aha_img,
    logo: aha_logo,
    points: '500',
    explore: true,
    background: brevilleBack,
    miniTxt: 'Flavoured Sparkling Water',
    content: 'Buy 1 and earn 500 points',
  },
  {
    id: 2,
    type: 'bmp',
    points: '500',
    explore: true,
    img: clif_img,
    logo: clif_logo,
    url: proteinImg,
    background: brevilleBack,
    miniTxt: 'Flavoured Sparkling Water',
    content: 'Buy 1 and earn 500 points',
  },
  {
    id: 3,
    type: 'bmp',
    points: '500',
    explore: true,
    img: mouse,
    logo: logitech_G,
    url: proteinImg,
    background: brevilleBack,
    miniTxt: 'Logitech G502LS Mouse',
    content: 'Buy 2 and earn 5,000 pointss',
  },
  {
    id: 4,
    type: 'bmp',
    explore: true,
    img: battery,
    logo: google,
    url: googleImg,
    points: '500',
    background: brevilleBack,
    miniTxt: 'Logitech G502LS Battery',
    content: 'Buy 1 and earn 500 points',
  },
];
export const subCategoryList: any = [
  {
    id: 0,
    name: 'Cafe',
  },
  {id: 1, name: 'Italian'},
  {id: 2, name: 'Mexican'},
  {id: 3, name: 'Fast Food'},
  {
    id: 4,
    name: 'Smart Home',
  },
];
export const subCategories_stores: any = [
  {
    id: 1,
    type: 'bap',
    url: jamesCoffeImg,
    points: '1,000',
    txt: 'Patagonia',
    miniTxt: 'Spend $50 and earn 500 Plastk Reward Points.',
  },

  {
    id: 2,
    type: 'bap',
    url: lewisbakeryImg,
    points: '1,000',
    txt: 'Birria Palace',
    miniTxt:
      'Spend at least $50.00 and earn 500 additional Plastk Reward Points each visit.',
  },

  {
    id: 3,
    type: 'bap',
    url: category,
    points: '1,000',
    txt: 'Patagonia',
    miniTxt: 'Spend $50 and earn 500 Plastk Reward Points.',
  },
  {
    id: 4,
    type: 'bap',
    url: category,
    points: '1,000',
    txt: 'Birria Palace',
    miniTxt:
      'Spend at least $50.00 and earn 500 additional Plastk Reward Points each visit.',
  },
];
export const sotre_categories: any = [
  {
    id: 0,
    url: restaurants,
    name: 'Restaurant',
  },
  {id: 1, url: retail, name: 'Retail'},
  {id: 2, url: alcohol, name: 'Alcohol'},
  {id: 3, url: fitness, name: 'Health & Fitness'},
  {
    id: 4,
    url: personal_care,
    name: 'Personal Care',
  },
  {id: 5, url: garden, name: 'Home & Garden'},
  {id: 6, url: entertainment, name: 'Entertainment'},
  {id: 7, url: travel, name: 'Travel'},
  {
    id: 8,
    url: automotive,
    name: 'Automative',
  },
  {id: 9, url: miscellaneous, name: 'Miscellaneous'},
];
export const brand_categories: any = [
  {
    id: 0,
    url: auto,
    name: 'Auto',
  },
  {id: 1, url: baby, name: 'Baby'},
  {id: 2, url: beauty, name: 'Beauty'},
  {id: 3, url: books, name: 'Books'},
  {
    id: 4,
    url: cellphones,
    name: 'Cellphones',
  },
  {id: 5, url: watches, name: 'Watches'},
  {id: 6, url: fashion, name: 'Fashion'},
  {
    id: 7,
    url: electronics,
    name: 'Electronics',
  },
  {id: 8, url: grocery, name: 'Grocery'},
  {id: 9, url: health_brand, name: 'Health'},
  {id: 10, url: garden_brand, name: 'Garden'},
  {id: 11, url: arts, name: 'Arts & Crafts'},
  {id: 12, url: jewelry, name: 'Jewelry'},
  {id: 13, url: music, name: 'Music'},
  {id: 14, url: office, name: 'Office'},
  {id: 15, url: sports, name: 'Sports'},
  {id: 16, url: pets, name: 'Pets'},
  {id: 17, url: software, name: 'Software'},
  {id: 18, url: games, name: 'Video Games'},
  {id: 19, url: home_brand, name: 'Home'},
  {id: 20, url: toys, name: 'Toys'},
  {id: 21, url: kitchen, name: 'Kitchen'},
  {id: 22, url: industrial, name: 'Industrial'},
];
export const nearYou = [
  {
    id: 1,
    type: 'bap',
    url: detourImg,
    points: '500',
    back_points: '5',
    logo: detourLogo,
    txt: 'Detour Coffee',
    background: detourBack,
    miniTxt:
      'Purchase any 1 Lbs bag of beans and earn 500 Plastk Reward Points.',
  },
  {
    id: 2,
    type: 'bap',
    url: barImg,
    back_points: '15',
    points: '1500',
    txt: 'Salt Wine Bar',
    background: barBack,
    logo: barLogo,
    miniTxt: 'Spend at least $60.00 and earn 1,500 Plastk Reward Points.',
  },
  {
    id: 3,
    type: 'bmp',
    back_points: '20',
    url: brevilleImg,
    points: '1000',
    txt: 'Esspresso Machines & Tools',
    background: brevilleBack,
    logo: brevilleLogo,
    miniTxt: 'Esspresso Machines & Tools',
    img: top,
    dark: true,
  },
  {
    id: 4,
    dark: false,
    type: 'bap',
    back_points: '30',
    url: smoothieImg,
    points: '200',
    txt: 'Sam’s Smoothie Shack',
    background: smoothieBack,
    logo: smoothieLogo,
    miniTxt:
      'Visit 3 times and earn 200 Plastk Reward Points each time. Up to a maximum of 1,500 Points.',
  },
  {
    id: 5,
    type: 'bap',
    url: arduinoImg,
    points: '20',
    txt: 'Arduino',
    back_points: '8',
    background: aurduinoBack,
    logo: arduinoLogo,
    miniTxt:
      'For each Arduino board or accessory, earn 150 Plastk Reward Points. Up to a maximum of 1,500 Points.',
  },
];
export const sponsored = [
  {
    id: 1,
    url: blck,
    txt: 'Le Plants',
    miniTxt: 'Home Plants',
    points: '350',
    isFeatured: true,
    isFavorite: true,
  },
  {
    id: 2,
    url: sponser4,
    txt: 'Real Fruit',
    miniTxt: 'Bubble Tea',
    points: '450',
    isFeatured: false,
    isFavorite: false,
  },
  {
    id: 3,
    url: ball,
    txt: 'Tennis Club',
    miniTxt: 'Club Membership',
    points: '550',
    isFavorite: false,
    isFeatured: true,
  },
  {
    id: 4,
    url: blck,
    txt: 'Sanctum',
    miniTxt: 'Club Membership',
    points: '650',
    isFeatured: false,
    isFavorite: false,
  },
];
export const favorite_sponsored = [
  {
    id: 1,
    // url: j_t,
    points: '250',
    txt: 'Candyland',
    isFeatured: false,
    miniTxt: 'Sweets & Treats',
  },
  {
    id: 2,
    // url: t_t,
    points: '350',
    txt: 'Sanctum',
    isFeatured: true,
    miniTxt: 'Club Membership',
  },
  {
    id: 3,
    // url: g_t,
    points: '450',
    isFeatured: false,
    txt: 'Playon',
    miniTxt: 'Gaming Service',
  },
  {
    id: 4,
    // url: b_t,
    points: '550',
    isFeatured: true,
    txt: 'Bounce',
    miniTxt: 'Basketball Club',
  },
  {
    id: 5,
    // url: c_t,
    txt: 'Kitchenaid',
    points: '650',
    isFeatured: false,
    miniTxt: 'Utensils',
  },
];
export const myOffers = [
  {
    id: 1,
    type: 'bap',
    card_image_url: fav_apple,
    points: '1,000',
    back_points: '5',
    // logo: arduinoLogo,
    txt: 'Chudleigh’s Farm',
    // background: patagoniaBackground,
    miniTxt: 'Chudleigh’s Farm',
    content: 'Spend $25.00 or more and earn 250 Plastk Reward Points.',
  },
  {
    id: 2,
    type: 'bap',
    points: '1,000',
    // logo: arduinoLogo,
    back_points: '5',
    card_image_url: duluxpaintImg,
    txt: 'Chudleigh’s Farm',
    // background: patagoniaBackground,
    miniTxt: 'Chudleigh’s Farm',
    content: 'Spend at least $80.00 and earn 500 Plastk Reward Points.',
  },
  {
    id: 3,
    type: 'bap',
    card_image_url: hotyogaImg,
    points: '1,000',
    back_points: '5',
    // logo: arduinoLogo,
    txt: 'Chudleigh’s Farm',
    // background: patagoniaBackground,
    miniTxt: 'Chudleigh’s Farm',
    content: 'Spend $50 and earn 500 Plastk Reward Points.',
  },
];
export const topPick = [
  {
    id: 1,
    img: mouse,
    url: brand2,
    type: 'bmp',
    points: '200',
    logo: logitech_G,
    background: brevilleBack,
    miniTxt: 'PC & Gaming Accessories',
  },
  {
    id: 2,
    img: shoes,
    logo: nike,
    url: brand3,
    type: 'bmp',
    points: '500',
    miniTxt: 'Nike Jumps',
    background: brevilleBack,
  },
  {
    id: 3,
    logo: aple,
    url: brand4,
    type: 'bmp',
    img: speaker,
    points: '100',
    background: brevilleBack,
    miniTxt: 'PC & Gaming Accessories',
  },
  {
    id: 4,
    type: 'bmp',
    url: brand5,
    img: battery,
    logo: google,
    points: '800',
    miniTxt: 'Home Security',
    background: brevilleBack,
  },
];

export const markerArray_merchant = [
  {
    id: 1,
    url: green_marker,
    region: {
      // latitude: 43.65107,
      // longitude: -79.369015,
      // latitude: 31.5294806,
      // longitude: 74.341139,
      latitude: 31.5195054,
      longitude: 74.3490907,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 2,
    url: uniqlo,
    region: {
      // latitude: 43.65107,
      // longitude: -79.384015,
      latitude: 31.5295054,
      longitude: 74.3541139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 3,
    url: sketch,
    region: {
      // latitude: 43.65407,
      // longitude: -79.369015,
      latitude: 31.5394802,
      longitude: 74.3641139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 4,
    url: tuf,
    region: {
      // latitude: 43.65407,
      // longitude: -79.377015,
      latitude: 31.5294802,
      longitude: 74.3591139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 5,
    url: cofee,
    region: {
      // latitude: 43.658107,
      // longitude: -79.368015,
      latitude: 31.4994802,
      longitude: 74.3141139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 6,
    url: cutting,
    region: {
      // latitude: 43.64907,
      // longitude: -79.372015,
      latitude: 31.5495206,
      longitude: 74.3591139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 7,
    url: c_s,
    region: {
      // latitude: 43.64507,
      // longitude: -79.375015,
      latitude: 31.5095206,
      longitude: 74.3591139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 9,
    url: cutting,
    region: {
      // latitude: 43.65107,
      // longitude: -79.369015,
      latitude: 31.5194806,
      longitude: 74.341039,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 10,
    url: mec,
    region: {
      // latitude: 43.65107,
      // longitude: -79.369015,
      latitude: 31.5294806,
      longitude: 74.341139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
];
export const markerArray_offfers = [
  {
    id: 1,
    url: mec,
    region: {
      // latitude: 43.65107,
      // longitude: -79.369015,
      latitude: 31.5294806,
      longitude: 74.341139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 2,
    url: uniqlo,
    region: {
      // latitude: 43.65107,
      // longitude: -79.384015,
      latitude: 31.4894802,
      longitude: 74.3541139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 3,
    url: sketch,
    region: {
      // latitude: 43.65407,
      // longitude: -79.369015,
      latitude: 31.5194802,
      longitude: 74.3641139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 4,
    url: tuf,
    region: {
      // latitude: 43.65407,
      // longitude: -79.377015,
      latitude: 31.5294802,
      longitude: 74.3591139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 5,
    url: cofee,
    region: {
      // latitude: 43.658107,
      // longitude: -79.368015,
      latitude: 31.4994802,
      longitude: 74.3141139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 6,
    url: cutting,
    region: {
      // latitude: 43.64907,
      // longitude: -79.372015,
      latitude: 31.5495206,
      longitude: 74.3591139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 7,
    url: c_s,
    region: {
      // latitude: 43.64507,
      // longitude: -79.375015,
      latitude: 31.5195206,
      longitude: 74.3291139,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  {
    id: 8,
    url: green_marker,
    region: {
      // latitude: 43.65107,
      // longitude: -79.369015,
      // latitude: 31.5294806,
      // longitude: 74.341139,
      latitude: 31.5195054,
      longitude: 74.3490907,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
];

export const tabs = [
  {title: 'Overview'},
  {title: 'Transactions'},
  {title: 'Statements'},
];

export const tabs_home = [{title: 'Offers'}, {title: 'Favourites'}];

export const t_data = [
  {
    name: 'Uber',
    spend: '$200.00',
  },
  {
    name: 'Via Rail',
    spend: '$100.00',
  },
  {
    name: 'GO Train',
    spend: '$88.00',
  },
  {
    name: 'GO Train',
    spend: '$20.00',
  },
];

export const data = [
  {
    name: 'Starbucks',
    time: '11:05 AM',
    _p: '+400',
    rewardPoints: '+ 400 Reward Points',
    accPoints: '+ 100 Accelerated Points',
    date: 'Sept. 30, 2022',
    address: '$50.43 on Credit ending In 4456123 Romeo Dr. Missisauga X9B 2Q9',
  },
  {
    name: 'Points Redemption',
    time: '11:05 AM',
    _p: '+400',
    rewardPoints: '+ 400 Reward Points',
    accPoints: '+ 100 Accelerated Points',
    date: 'Sept. 30, 2022',
    address: '$50.43 on Credit ending In 4456123 Romeo Dr. Missisauga X9B 2Q9',
  },
];

export const data_statement = [
  {
    _p: '+400',
    points: '5,500',
    due_by: 'Oct 10, 2022',
    minimum_payment: '$27.86',
    statement_balance: '$568.64',
    date: 'October 12- November 12',
  },
  {
    _p: '+400',
    points: '5,500',
    due_by: 'Oct 10, 2022',
    minimum_payment: '$27.86',
    statement_balance: '$568.64',
    date: 'October 12- November 12',
  },
];
