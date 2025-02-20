export interface AvailabilitiesQueryParams {
  page: number;
  limit: number;
  'speciality.shortName': string;
  clientDocavenue: boolean;
  'availabilityFilter.type': AvailabilityFilterTypes;
  consultationModeFilter: ConsultationModeFilters;
  extraFeeFilter: ExtraFeeFilters;
  newPatientFilter: NewPatientFilters;
  locality?: string;
}

export enum AvailabilityFilterTypes {
  ALL = 'ALL',
  TODAY = 'TODAY',
  THREE_DAY = 'THREE_DAY',
  BEFORE_SPECIFIC_DATE = 'BEFORE_SPECIFIC_DATE'
}

export enum ConsultationModeFilters {
  ALL = 'ALL',
  TLC = 'TLC',
  PHYSICAL = 'PHYSICAL',
  HOME_VISIT = 'HOME_VISIT'
}

export enum ExtraFeeFilters {
  ALL = 'ALL',
  DISALLOW = 'DISALLOW'
}

export enum NewPatientFilters {
  ALL = 'ALL',
  ALLOW = 'ALLOW'
}

export interface AvailabilitiesQueryResponse {
  items: AvailabilitiesQueryResponseItem[];
  total: number;
}

interface Center {
  id: string;
  name: string;
  timeZone: string;
}

interface AvatarPicture {
  s3Id: string;
  thumbnailS3Id: string;
}

interface Address {
  number?: string;
  street: string;
  zipCode: string;
  city: string;
  country: string;
  longitude: number;
  latitude: number;
}

interface SpecialityCount {
  speciality: string;
  count: number;
}

interface Availability {
  date: string;
  firstAvailability?: string;
  lastAvailability?: string;
}

export interface AvailabilitiesQueryResponseItem {
  type: "PRACTITIONER" | "CENTER";
  center?: Center;
  practitioner?: { id: string; fullName: string };
  speciality: string;
  avatarPicture?: AvatarPicture;
  address: Address;
  sectors?: string[];
  specialityCounts: SpecialityCount[];
  allowNewPatient: boolean;
  client: boolean;
  demo: boolean;
  immediateTlc: boolean;
  nextAvailability?: string;
  availabilities: Availability[];
}