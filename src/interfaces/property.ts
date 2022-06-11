
export interface PropertyImage {
  originalname: string | undefined;
  path: string | undefined;
  id: string;

  property: Property;

  url: string;

  width: number;

  height: number;

  createdDate: Date;

  updatedDate: Date;
}

export interface PropertyChangeRequest {
  id: string;

  property: Property;

  propertyChange: PropertyChange;

  propertyChangeRequestMessages: PropertyChangeRequestmessage[];

  title: string;

  description: string;

  done: boolean;

  createdDate: Date;

  updatedDate: Date;
}

export interface PropertyChangeRequestmessage {
  id: string;

  propertyChangeRequest: PropertyChangeRequest;

  message: string;

  createdDate: Date;

  updatedDate: Date;
}

export interface PropertyMilestone {
  id: string;

  property: Property;

  tile: string;

  description: string;

  percentage: number;

  createdDate: Date;

  updatedDate: Date;
}

export interface PropertyChange {
  id: string;

  property: Property;

  propertyChangeRequests: PropertyChangeRequest[];

  name: string;

  address: string;

  state: string;

  bannerUrl: string;

  description: string;

  threeDUrl: string;

  videoUrl: string;

  floorPlanUrl: string;

  longitude: string;

  latitude: string;

  canBuy: boolean;

  canRent: boolean;

  price: number;

  rentPrice: number;

  canPayFull: boolean;

  canPayInstallment: boolean;

  canMortgage: boolean;

  category: string;


  createdDate: Date;

  updatedDate: Date;
}

export interface Property {
  id: string;

  type: string;

  propertyOwner: string;

  images: PropertyImage[];

  address: string;

  description: string;

  bathroom: number;

  bedroom: number;

  kitchen: number;

  toilet: number;

  sittingRoom: number;
}
