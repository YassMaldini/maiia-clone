export interface PractitionerQueryParams {
  practitionerId: string;
  rootCenterId: string;
}

export interface PractitionerQueryResponse {
  items: PractitionerQueryResponseItem[];
  total: number;
}

interface Speciality {
  id: string;
  code: string;
  name: string;
  shortName: string;
  isParamedical: boolean;
}

interface Professional {
  firstName: string;
  lastName: string;
  cpsId: string;
  sex: string;
  speciality: Speciality;
  practitionerId: string;
}

interface Center {
  id: string;
  name: string;
  speciality: Speciality;
  isDemo: boolean;
  isSecret: boolean;
  url: string;
  isVisibleOnline: boolean;
  publicInformation: {
    expertises: Expertise[];
    pricing: Pricing[];
    paymentMethods: string[];
    refundMethods: string[];
    conventionSectors: string[];
    officeDescription: string;
    externalLink: string;
    spokenLanguages: string[];
    curriculums: any[];
    address: Address;
    mainPicture: Picture;
    isAddressVisible: boolean;
    officeInformation: OfficeInformation;
  };
  isVaccinationPlace: boolean;
  isDefault: boolean;
  parentCenters: any[];
}

interface Expertise {
  name: string;
  creationDate: string;
  updateDate: string;
  id: string;
  shortName: string;
  statusDate: string;
  status: string;
  algoliaSynchronizedDate: string;
  type: {
    name: string;
    label: string;
  };
  synonyms?: any[];
  keywords?: string[];
  createdBy?: {
    userId: string;
    label: string;
  };
  lastModifiedBy?: {
    userId: string;
    label: string;
  };
}

interface Pricing {
  label: string;
  minPrice?: number;
  type: string;
  conventionedActId?: string;
  price?: number;
}

interface Address {
  id: string;
  number: string;
  street: string;
  zipCode: string;
  city: string;
  geocodedAddress: string;
  inseeCode: string;
  exactLocationGps: boolean;
  location: {
    x: number;
    y: number;
    coordinates: number[];
    type: string;
  };
  fullAddress: string;
  regionCode: string;
  departmentCode: string;
  locality: Locality;
  isCustomAddress: boolean;
}

interface Locality {
  id: string;
  name: string;
  shortName: string;
  code: string;
  type: string;
  location: {
    x: number;
    y: number;
    coordinates: number[];
    type: string;
  };
  departmentCode: string;
  departmentName: string;
  departmentShortName: string;
  regionCode: string;
  regionName: string;
  regionShortName: string;
  source: string;
  postCode: string;
  postCodes: string[];
  score: number;
  population: number;
}

interface Picture {
  s3Id: string;
  thumbnailS3Id: string;
}

interface OfficeInformation {
  phoneNumber: string;
  openingSchedules: {
    [key: string]: {
      schedules: {
        startTime: string;
        endTime: string;
        position: number;
      }[];
      isActive: boolean;
    };
  };
  officeAccessibility: {
    hasHandicapAccess: boolean;
    hasElevatorAccess: boolean;
    floor: string;
    parkingCode: string;
    digitalCode: string;
    interphone: string;
    meansOfTransport: string;
  };
  isCustom: boolean;
}

interface ConsultationReason {
  id: string;
  name: string;
  maximumAge?: number;
  position: number;
  consultationType: string;
  patientLimitation: string;
  allowAvailabilitiesXHoursBefore?: number;
  isVisibleOnline: boolean;
  isVisibleForProOnly: boolean;
  isAvailable: boolean;
}

interface Settings {
  isTeleconsultation: boolean;
  teleconsultationPatientLimitation: string;
  firstPhysicalFreeTimeslot: string;
  isVisibleOnline: boolean;
  isDemo: boolean;
  isSecret: boolean;
  isOnlineAppointment: boolean;
  onlineAvailabilityVisibilityLimit: number;
  denyAvailabilitiesXHoursBefore: number;
  permitCancellationXMinutesBefore: number;
  maxTeleconsultationPrice: number;
  clientDocavenue: boolean;
  agendaSettingsId: string;
  timeZone: string;
}

export interface PractitionerQueryResponseItem {
  id: string;
  professional: Professional;
  center: Center;
  specialityAndExpertiseIds: string[];
  url: string;
  settings: Settings;
  publicInformation: {
    expertises: Expertise[];
    pricing: Pricing[];
    paymentMethods: string[];
    refundMethods: string[];
    conventionSectors: string[];
    officeDescription: string;
    externalLink: string;
    spokenLanguages: string[];
    curriculums: any[];
    address: Address;
    mainPicture: Picture;
    officeInformation: OfficeInformation;
  };
  consultationReasons: ConsultationReason[];
  type: string;
  index: number;
  searchTermArray: string[];
}