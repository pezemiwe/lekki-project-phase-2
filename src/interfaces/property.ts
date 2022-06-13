
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

export interface AddProperty {

  propertyOwner: string;

  address: string;

  description: string;

  type: string;

  bathroom: number;

  bedroom: number;

  kitchen: number;

  toilet: number;

  sittingRoom: number;

  validFrom: Date;

  validTo: Date;
  
  images: PropertyImage[];
}


export interface Property {

  _id: string;

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
