export interface AvailableTLCQueryResponse {
  items: AvailableTLCQueryResponseItem[];
  total: number;
}

interface Schedule {
  startTime: string;
  endTime: string;
  position: number;
}

interface DaySchedule {
  schedules: Schedule[];
  isActive: boolean;
}

interface OpeningSchedules {
  MONDAY: DaySchedule;
  TUESDAY: DaySchedule;
  WEDNESDAY: DaySchedule;
  THURSDAY: DaySchedule;
  FRIDAY: DaySchedule;
  SATURDAY: DaySchedule;
  SUNDAY: DaySchedule;
}

interface Location {
  x: number;
  y: number;
  coordinates: number[];
  type: string;
}

interface Address {
  number: string;
  street: string;
  zipCode: string;
  city: string;
  country: string;
  inseeCode: string;
  location: Location;
  fullAddress: string;
  regionCode: string;
  departmentCode: string;
}

interface Speciality {
  id: string;
  code: string;
  name: string;
  shortName: string;
  isParamedical: boolean;
}

interface Practitioner {
  firstName: string;
  lastName: string;
  cpsId: string;
  speciality: Speciality;
  practitionerId: string;
}

interface Center {
  id: string;
  name: string;
  speciality: Speciality;
  isDemo: boolean;
  isSecret: boolean;
  isVisibleOnline: boolean;
  publicInformation: {
    expertises: string[];
    pricing: string[];
    paymentMethods: string[];
    refundMethods: string[];
    conventionSectors: string[];
    officeDescription: string;
    externalLink: string;
    spokenLanguages: string[];
    curriculums: string[];
    address: Address;
    isCustomAddress: boolean;
    isAddressVisible: boolean;
    officeInformation: {
      phoneNumber: string;
      openingSchedules: OpeningSchedules;
      isCustom: boolean;
    };
  };
}

interface Settings {
  isTeleconsultation: boolean;
  teleconsultationAvailabilityStartTime: string;
  teleconsultationAvailabilityEndTime: string;
  isVisibleOnline: boolean;
  isDemo: boolean;
  isSecret: boolean;
  isOnlineAppointment: boolean;
  onlineAvailabilityVisibilityLimit: number;
  maxTeleconsultationPrice: number;
  clientDocavenue: boolean;
  timeZone: string;
}

interface Expertise {
  name: string;
  id: string;
  shortName: string;
  status: string;
  type: {
    name: string;
    label: string;
  };
}

interface PublicInformation {
  expertises: Expertise[];
  pricing: string[];
  paymentMethods: string[];
  refundMethods: string[];
  conventionSectors: string[];
  officeDescription: string;
  externalLink: string;
  spokenLanguages: string[];
  curriculums: {
    graduationDate: string;
    degree: string;
  }[];
  address: Address;
  isAddressVisible: boolean;
  officeInformation: {
    phoneNumber: string;
    openingSchedules: OpeningSchedules;
    isCustom: boolean;
  };
}

interface ConsultationReason {
  id: string;
  name: string;
  position: number;
  consultationType: string;
  isVisibleOnline: boolean;
  isAvailable: boolean;
}

export interface AvailableTLCQueryResponseItem {
  id: string;
  professional: Practitioner;
  center: Center;
  specialityAndExpertiseIds: string[];
  url: string;
  urlHistory: string[];
  settings: Settings;
  publicInformation: PublicInformation;
  consultationReasons: ConsultationReason[];
  waitingRoomPatientNumber?: number;
  type: string;
}
