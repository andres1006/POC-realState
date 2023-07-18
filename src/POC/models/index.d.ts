import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerProperty = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Property, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly streetName?: string | null;
  readonly address?: string | null;
  readonly bedsQuality?: number | null;
  readonly bathroomsQuelity?: number | null;
  readonly urlImage?: string | null;
  readonly longitud?: number | null;
  readonly latitude?: number | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProperty = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Property, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly streetName?: string | null;
  readonly address?: string | null;
  readonly bedsQuality?: number | null;
  readonly bathroomsQuelity?: number | null;
  readonly urlImage?: string | null;
  readonly longitud?: number | null;
  readonly latitude?: number | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Property = LazyLoading extends LazyLoadingDisabled ? EagerProperty : LazyProperty

export declare const Property: (new (init: ModelInit<Property>) => Property) & {
  copyOf(source: Property, mutator: (draft: MutableModel<Property>) => MutableModel<Property> | void): Property;
}