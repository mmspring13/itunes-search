export const countryList = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas (the)',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia (Plurinational State of)',
  'Bonaire, Sint Eustatius and Saba',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory (the)',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cayman Islands (the)',
  'Central African Republic (the)',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands (the)',
  'Colombia',
  'Comoros (the)',
  'Congo (the Democratic Republic of the)',
  'Congo (the)',
  'Cook Islands (the)',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Curaçao',
  'Cyprus',
  'Czechia',
  "Côte d'Ivoire",
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic (the)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Falkland Islands (the) [Malvinas]',
  'Faroe Islands (the)',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories (the)',
  'Gabon',
  'Gambia (the)',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard Island and McDonald Islands',
  'Holy See (the)',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran (Islamic Republic of)',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  "Korea (the Democratic People's Republic of)",
  'Korea (the Republic of)',
  'Kuwait',
  'Kyrgyzstan',
  "Lao People's Democratic Republic (the)",
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands (the)',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia (Federated States of)',
  'Moldova (the Republic of)',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands (the)',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger (the)',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'Northern Mariana Islands (the)',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine, State of',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines (the)',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Republic of North Macedonia',
  'Romania',
  'Russian Federation (the)',
  'Rwanda',
  'Réunion',
  'Saint Barthélemy',
  'Saint Helena, Ascension and Tristan da Cunha',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin (French part)',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten (Dutch part)',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and the South Sandwich Islands',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan (the)',
  'Suriname',
  'Svalbard and Jan Mayen',
  'Sweden',
  'Switzerland',
  'Syrian Arab Republic',
  'Taiwan',
  'Tajikistan',
  'Tanzania, United Republic of',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands (the)',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates (the)',
  'United Kingdom of Great Britain and Northern Ireland (the)',
  'United States Minor Outlying Islands (the)',
  'United States of America (the)',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela (Bolivarian Republic of)',
  'Viet Nam',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
  'Åland Islands',
] as const;

export const countryIso2: Record<string, (typeof countryList)[number]> = {
  AF: 'Afghanistan',
  AL: 'Albania',
  DZ: 'Algeria',
  AS: 'American Samoa',
  AD: 'Andorra',
  AO: 'Angola',
  AI: 'Anguilla',
  AQ: 'Antarctica',
  AG: 'Antigua and Barbuda',
  AR: 'Argentina',
  AM: 'Armenia',
  AW: 'Aruba',
  AU: 'Australia',
  AT: 'Austria',
  AZ: 'Azerbaijan',
  BS: 'Bahamas (the)',
  BH: 'Bahrain',
  BD: 'Bangladesh',
  BB: 'Barbados',
  BY: 'Belarus',
  BE: 'Belgium',
  BZ: 'Belize',
  BJ: 'Benin',
  BM: 'Bermuda',
  BT: 'Bhutan',
  BO: 'Bolivia (Plurinational State of)',
  BQ: 'Bonaire, Sint Eustatius and Saba',
  BA: 'Bosnia and Herzegovina',
  BW: 'Botswana',
  BV: 'Bouvet Island',
  BR: 'Brazil',
  IO: 'British Indian Ocean Territory (the)',
  BN: 'Brunei Darussalam',
  BG: 'Bulgaria',
  BF: 'Burkina Faso',
  BI: 'Burundi',
  CV: 'Cabo Verde',
  KH: 'Cambodia',
  CM: 'Cameroon',
  CA: 'Canada',
  KY: 'Cayman Islands (the)',
  CF: 'Central African Republic (the)',
  TD: 'Chad',
  CL: 'Chile',
  CN: 'China',
  CX: 'Christmas Island',
  CC: 'Cocos (Keeling) Islands (the)',
  CO: 'Colombia',
  KM: 'Comoros (the)',
  CD: 'Congo (the Democratic Republic of the)',
  CG: 'Congo (the)',
  CK: 'Cook Islands (the)',
  CR: 'Costa Rica',
  HR: 'Croatia',
  CU: 'Cuba',
  CW: 'Curaçao',
  CY: 'Cyprus',
  CZ: 'Czechia',
  CI: "Côte d'Ivoire",
  DK: 'Denmark',
  DJ: 'Djibouti',
  DM: 'Dominica',
  DO: 'Dominican Republic (the)',
  EC: 'Ecuador',
  EG: 'Egypt',
  SV: 'El Salvador',
  GQ: 'Equatorial Guinea',
  ER: 'Eritrea',
  EE: 'Estonia',
  SZ: 'Eswatini',
  ET: 'Ethiopia',
  FK: 'Falkland Islands (the) [Malvinas]',
  FO: 'Faroe Islands (the)',
  FJ: 'Fiji',
  FI: 'Finland',
  FR: 'France',
  GF: 'French Guiana',
  PF: 'French Polynesia',
  TF: 'French Southern Territories (the)',
  GA: 'Gabon',
  GM: 'Gambia (the)',
  GE: 'Georgia',
  DE: 'Germany',
  GH: 'Ghana',
  GI: 'Gibraltar',
  GR: 'Greece',
  GL: 'Greenland',
  GD: 'Grenada',
  GP: 'Guadeloupe',
  GU: 'Guam',
  GT: 'Guatemala',
  GG: 'Guernsey',
  GN: 'Guinea',
  GW: 'Guinea-Bissau',
  GY: 'Guyana',
  HT: 'Haiti',
  HM: 'Heard Island and McDonald Islands',
  VA: 'Holy See (the)',
  HN: 'Honduras',
  HK: 'Hong Kong',
  HU: 'Hungary',
  IS: 'Iceland',
  IN: 'India',
  ID: 'Indonesia',
  IR: 'Iran (Islamic Republic of)',
  IQ: 'Iraq',
  IE: 'Ireland',
  IM: 'Isle of Man',
  IL: 'Israel',
  IT: 'Italy',
  JM: 'Jamaica',
  JP: 'Japan',
  JE: 'Jersey',
  JO: 'Jordan',
  KZ: 'Kazakhstan',
  KE: 'Kenya',
  KI: 'Kiribati',
  KP: "Korea (the Democratic People's Republic of)",
  KR: 'Korea (the Republic of)',
  KW: 'Kuwait',
  KG: 'Kyrgyzstan',
  LA: "Lao People's Democratic Republic (the)",
  LV: 'Latvia',
  LB: 'Lebanon',
  LS: 'Lesotho',
  LR: 'Liberia',
  LY: 'Libya',
  LI: 'Liechtenstein',
  LT: 'Lithuania',
  LU: 'Luxembourg',
  MO: 'Macao',
  MG: 'Madagascar',
  MW: 'Malawi',
  MY: 'Malaysia',
  MV: 'Maldives',
  ML: 'Mali',
  MT: 'Malta',
  MH: 'Marshall Islands (the)',
  MQ: 'Martinique',
  MR: 'Mauritania',
  MU: 'Mauritius',
  YT: 'Mayotte',
  MX: 'Mexico',
  FM: 'Micronesia (Federated States of)',
  MD: 'Moldova (the Republic of)',
  MC: 'Monaco',
  MN: 'Mongolia',
  ME: 'Montenegro',
  MS: 'Montserrat',
  MA: 'Morocco',
  MZ: 'Mozambique',
  MM: 'Myanmar',
  NA: 'Namibia',
  NR: 'Nauru',
  NP: 'Nepal',
  NL: 'Netherlands (the)',
  NC: 'New Caledonia',
  NZ: 'New Zealand',
  NI: 'Nicaragua',
  NE: 'Niger (the)',
  NG: 'Nigeria',
  NU: 'Niue',
  NF: 'Norfolk Island',
  MP: 'Northern Mariana Islands (the)',
  NO: 'Norway',
  OM: 'Oman',
  PK: 'Pakistan',
  PW: 'Palau',
  PS: 'Palestine, State of',
  PA: 'Panama',
  PG: 'Papua New Guinea',
  PY: 'Paraguay',
  PE: 'Peru',
  PH: 'Philippines (the)',
  PN: 'Pitcairn',
  PL: 'Poland',
  PT: 'Portugal',
  PR: 'Puerto Rico',
  QA: 'Qatar',
  MK: 'Republic of North Macedonia',
  RO: 'Romania',
  RU: 'Russian Federation (the)',
  RW: 'Rwanda',
  RE: 'Réunion',
  BL: 'Saint Barthélemy',
  SH: 'Saint Helena, Ascension and Tristan da Cunha',
  KN: 'Saint Kitts and Nevis',
  LC: 'Saint Lucia',
  MF: 'Saint Martin (French part)',
  PM: 'Saint Pierre and Miquelon',
  VC: 'Saint Vincent and the Grenadines',
  WS: 'Samoa',
  SM: 'San Marino',
  ST: 'Sao Tome and Principe',
  SA: 'Saudi Arabia',
  SN: 'Senegal',
  RS: 'Serbia',
  SC: 'Seychelles',
  SL: 'Sierra Leone',
  SG: 'Singapore',
  SX: 'Sint Maarten (Dutch part)',
  SK: 'Slovakia',
  SI: 'Slovenia',
  SB: 'Solomon Islands',
  SO: 'Somalia',
  ZA: 'South Africa',
  GS: 'South Georgia and the South Sandwich Islands',
  SS: 'South Sudan',
  ES: 'Spain',
  LK: 'Sri Lanka',
  SD: 'Sudan (the)',
  SR: 'Suriname',
  SJ: 'Svalbard and Jan Mayen',
  SE: 'Sweden',
  CH: 'Switzerland',
  SY: 'Syrian Arab Republic',
  TW: 'Taiwan',
  TJ: 'Tajikistan',
  TZ: 'Tanzania, United Republic of',
  TH: 'Thailand',
  TL: 'Timor-Leste',
  TG: 'Togo',
  TK: 'Tokelau',
  TO: 'Tonga',
  TT: 'Trinidad and Tobago',
  TN: 'Tunisia',
  TR: 'Turkey',
  TM: 'Turkmenistan',
  TC: 'Turks and Caicos Islands (the)',
  TV: 'Tuvalu',
  UG: 'Uganda',
  UA: 'Ukraine',
  AE: 'United Arab Emirates (the)',
  GB: 'United Kingdom of Great Britain and Northern Ireland (the)',
  UM: 'United States Minor Outlying Islands (the)',
  US: 'United States of America (the)',
  UY: 'Uruguay',
  UZ: 'Uzbekistan',
  VU: 'Vanuatu',
  VE: 'Venezuela (Bolivarian Republic of)',
  VN: 'Viet Nam',
  VG: 'Virgin Islands (British)',
  VI: 'Virgin Islands (U.S.)',
  WF: 'Wallis and Futuna',
  EH: 'Western Sahara',
  YE: 'Yemen',
  ZM: 'Zambia',
  ZW: 'Zimbabwe',
  AX: 'Åland Islands',
};

export const countryIso3: Record<string, (typeof countryList)[number]> = {
  AFG: 'Afghanistan',
  ALB: 'Albania',
  DZA: 'Algeria',
  ASM: 'American Samoa',
  AND: 'Andorra',
  AGO: 'Angola',
  AIA: 'Anguilla',
  ATA: 'Antarctica',
  ATG: 'Antigua and Barbuda',
  ARG: 'Argentina',
  ARM: 'Armenia',
  ABW: 'Aruba',
  AUS: 'Australia',
  AUT: 'Austria',
  AZE: 'Azerbaijan',
  BHS: 'Bahamas (the)',
  BHR: 'Bahrain',
  BGD: 'Bangladesh',
  BRB: 'Barbados',
  BLR: 'Belarus',
  BEL: 'Belgium',
  BLZ: 'Belize',
  BEN: 'Benin',
  BMU: 'Bermuda',
  BTN: 'Bhutan',
  BOL: 'Bolivia (Plurinational State of)',
  BES: 'Bonaire, Sint Eustatius and Saba',
  BIH: 'Bosnia and Herzegovina',
  BWA: 'Botswana',
  BVT: 'Bouvet Island',
  BRA: 'Brazil',
  IOT: 'British Indian Ocean Territory (the)',
  BRN: 'Brunei Darussalam',
  BGR: 'Bulgaria',
  BFA: 'Burkina Faso',
  BDI: 'Burundi',
  CPV: 'Cabo Verde',
  KHM: 'Cambodia',
  CMR: 'Cameroon',
  CAN: 'Canada',
  CYM: 'Cayman Islands (the)',
  CAF: 'Central African Republic (the)',
  TCD: 'Chad',
  CHL: 'Chile',
  CHN: 'China',
  CXR: 'Christmas Island',
  CCK: 'Cocos (Keeling) Islands (the)',
  COL: 'Colombia',
  COM: 'Comoros (the)',
  COD: 'Congo (the Democratic Republic of the)',
  COG: 'Congo (the)',
  COK: 'Cook Islands (the)',
  CRI: 'Costa Rica',
  HRV: 'Croatia',
  CUB: 'Cuba',
  CUW: 'Curaçao',
  CYP: 'Cyprus',
  CZE: 'Czechia',
  CIV: "Côte d'Ivoire",
  DNK: 'Denmark',
  DJI: 'Djibouti',
  DMA: 'Dominica',
  DOM: 'Dominican Republic (the)',
  ECU: 'Ecuador',
  EGY: 'Egypt',
  SLV: 'El Salvador',
  GNQ: 'Equatorial Guinea',
  ERI: 'Eritrea',
  EST: 'Estonia',
  SWZ: 'Eswatini',
  ETH: 'Ethiopia',
  FLK: 'Falkland Islands (the) [Malvinas]',
  FRO: 'Faroe Islands (the)',
  FJI: 'Fiji',
  FIN: 'Finland',
  FRA: 'France',
  GUF: 'French Guiana',
  PYF: 'French Polynesia',
  ATF: 'French Southern Territories (the)',
  GAB: 'Gabon',
  GMB: 'Gambia (the)',
  GEO: 'Georgia',
  DEU: 'Germany',
  GHA: 'Ghana',
  GIB: 'Gibraltar',
  GRC: 'Greece',
  GRL: 'Greenland',
  GRD: 'Grenada',
  GLP: 'Guadeloupe',
  GUM: 'Guam',
  GTM: 'Guatemala',
  GGY: 'Guernsey',
  GIN: 'Guinea',
  GNB: 'Guinea-Bissau',
  GUY: 'Guyana',
  HTI: 'Haiti',
  HMD: 'Heard Island and McDonald Islands',
  VAT: 'Holy See (the)',
  HND: 'Honduras',
  HKG: 'Hong Kong',
  HUN: 'Hungary',
  ISL: 'Iceland',
  IND: 'India',
  IDN: 'Indonesia',
  IRN: 'Iran (Islamic Republic of)',
  IRQ: 'Iraq',
  IRL: 'Ireland',
  IMN: 'Isle of Man',
  ISR: 'Israel',
  ITA: 'Italy',
  JAM: 'Jamaica',
  JPN: 'Japan',
  JEY: 'Jersey',
  JOR: 'Jordan',
  KAZ: 'Kazakhstan',
  KEN: 'Kenya',
  KIR: 'Kiribati',
  PRK: "Korea (the Democratic People's Republic of)",
  KOR: 'Korea (the Republic of)',
  KWT: 'Kuwait',
  KGZ: 'Kyrgyzstan',
  LAO: "Lao People's Democratic Republic (the)",
  LVA: 'Latvia',
  LBN: 'Lebanon',
  LSO: 'Lesotho',
  LBR: 'Liberia',
  LBY: 'Libya',
  LIE: 'Liechtenstein',
  LTU: 'Lithuania',
  LUX: 'Luxembourg',
  MAC: 'Macao',
  MDG: 'Madagascar',
  MWI: 'Malawi',
  MYS: 'Malaysia',
  MDV: 'Maldives',
  MLI: 'Mali',
  MLT: 'Malta',
  MHL: 'Marshall Islands (the)',
  MTQ: 'Martinique',
  MRT: 'Mauritania',
  MUS: 'Mauritius',
  MYT: 'Mayotte',
  MEX: 'Mexico',
  FSM: 'Micronesia (Federated States of)',
  MDA: 'Moldova (the Republic of)',
  MCO: 'Monaco',
  MNG: 'Mongolia',
  MNE: 'Montenegro',
  MSR: 'Montserrat',
  MAR: 'Morocco',
  MOZ: 'Mozambique',
  MMR: 'Myanmar',
  NAM: 'Namibia',
  NRU: 'Nauru',
  NPL: 'Nepal',
  NLD: 'Netherlands (the)',
  NCL: 'New Caledonia',
  NZL: 'New Zealand',
  NIC: 'Nicaragua',
  NER: 'Niger (the)',
  NGA: 'Nigeria',
  NIU: 'Niue',
  NFK: 'Norfolk Island',
  MNP: 'Northern Mariana Islands (the)',
  NOR: 'Norway',
  OMN: 'Oman',
  PAK: 'Pakistan',
  PLW: 'Palau',
  PSE: 'Palestine, State of',
  PAN: 'Panama',
  PNG: 'Papua New Guinea',
  PRY: 'Paraguay',
  PER: 'Peru',
  PHL: 'Philippines (the)',
  PCN: 'Pitcairn',
  POL: 'Poland',
  PRT: 'Portugal',
  PRI: 'Puerto Rico',
  QAT: 'Qatar',
  MKD: 'Republic of North Macedonia',
  ROU: 'Romania',
  RUS: 'Russian Federation (the)',
  RWA: 'Rwanda',
  REU: 'Réunion',
  BLM: 'Saint Barthélemy',
  SHN: 'Saint Helena, Ascension and Tristan da Cunha',
  KNA: 'Saint Kitts and Nevis',
  LCA: 'Saint Lucia',
  MAF: 'Saint Martin (French part)',
  SPM: 'Saint Pierre and Miquelon',
  VCT: 'Saint Vincent and the Grenadines',
  WSM: 'Samoa',
  SMR: 'San Marino',
  STP: 'Sao Tome and Principe',
  SAU: 'Saudi Arabia',
  SEN: 'Senegal',
  SRB: 'Serbia',
  SYC: 'Seychelles',
  SLE: 'Sierra Leone',
  SGP: 'Singapore',
  SXM: 'Sint Maarten (Dutch part)',
  SVK: 'Slovakia',
  SVN: 'Slovenia',
  SLB: 'Solomon Islands',
  SOM: 'Somalia',
  ZAF: 'South Africa',
  SGS: 'South Georgia and the South Sandwich Islands',
  SSD: 'South Sudan',
  ESP: 'Spain',
  LKA: 'Sri Lanka',
  SDN: 'Sudan (the)',
  SUR: 'Suriname',
  SJM: 'Svalbard and Jan Mayen',
  SWE: 'Sweden',
  CHE: 'Switzerland',
  SYR: 'Syrian Arab Republic',
  TWN: 'Taiwan',
  TJK: 'Tajikistan',
  TZA: 'Tanzania, United Republic of',
  THA: 'Thailand',
  TLS: 'Timor-Leste',
  TGO: 'Togo',
  TKL: 'Tokelau',
  TON: 'Tonga',
  TTO: 'Trinidad and Tobago',
  TUN: 'Tunisia',
  TUR: 'Turkey',
  TKM: 'Turkmenistan',
  TCA: 'Turks and Caicos Islands (the)',
  TUV: 'Tuvalu',
  UGA: 'Uganda',
  UKR: 'Ukraine',
  ARE: 'United Arab Emirates (the)',
  GBR: 'United Kingdom of Great Britain and Northern Ireland (the)',
  UMI: 'United States Minor Outlying Islands (the)',
  USA: 'United States of America (the)',
  URY: 'Uruguay',
  UZB: 'Uzbekistan',
  VUT: 'Vanuatu',
  VEN: 'Venezuela (Bolivarian Republic of)',
  VNM: 'Viet Nam',
  VGB: 'Virgin Islands (British)',
  VIR: 'Virgin Islands (U.S.)',
  WLF: 'Wallis and Futuna',
  ESH: 'Western Sahara',
  YEM: 'Yemen',
  ZMB: 'Zambia',
  ZWE: 'Zimbabwe',
  ALA: 'Åland Islands',
};
