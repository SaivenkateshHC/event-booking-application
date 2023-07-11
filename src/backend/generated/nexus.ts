/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type {  } from "./../context.js"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  EventCreateInput: { // input type
    creator: string; // String!
    date: string; // String!
    description: string; // String!
    imageUrl?: string | null; // String
    places: string; // String!
    price: number; // Int!
    tickets: number; // Int!
    title: string; // String!
  }
  EventDeleteInput: { // input type
    id: string; // String!
  }
  UserCreateInput: { // input type
    company?: string | null; // String
    email: string; // String!
    event: NexusGenInputs['EventCreateInput']; // EventCreateInput!
    name?: string | null; // String
    password: string; // String!
    role: string; // String!
  }
  UserLoginInput: { // input type
    email: string; // String!
    password: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  AllEvent: { // root type
    date?: string | null; // String
    description?: string | null; // String
    id?: number | null; // Int
    imageUrl?: string | null; // String
    places?: string | null; // String
    price?: number | null; // Int
    tickets?: number | null; // Int
    title?: string | null; // String
  }
  DeleteEvent: { // root type
    message?: string | null; // String
  }
  Event: { // root type
    date?: string | null; // String
    description?: string | null; // String
    id?: number | null; // Int
    imageUrl?: string | null; // String
    places?: string | null; // String
    price?: number | null; // Int
    tickets?: number | null; // Int
    title?: string | null; // String
  }
  LoginData: { // root type
    message?: string | null; // String
    token?: string | null; // String
  }
  Mutation: {};
  Query: {};
  User: { // root type
    company?: string | null; // String
    email: string; // String!
    id: number; // Int!
    name?: string | null; // String
    password?: string | null; // String
    role?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AllEvent: { // field return type
    creator: string | null; // String
    date: string | null; // String
    description: string | null; // String
    id: number | null; // Int
    imageUrl: string | null; // String
    places: string | null; // String
    price: number | null; // Int
    tickets: number | null; // Int
    title: string | null; // String
  }
  DeleteEvent: { // field return type
    message: string | null; // String
  }
  Event: { // field return type
    creator: NexusGenRootTypes['User'] | null; // User
    date: string | null; // String
    description: string | null; // String
    id: number | null; // Int
    imageUrl: string | null; // String
    places: string | null; // String
    price: number | null; // Int
    tickets: number | null; // Int
    title: string | null; // String
  }
  LoginData: { // field return type
    message: string | null; // String
    token: string | null; // String
  }
  Mutation: { // field return type
    createEvent: NexusGenRootTypes['Event'] | null; // Event
    createUser: NexusGenRootTypes['User']; // User!
    deleteEventMutation: NexusGenRootTypes['DeleteEvent'] | null; // DeleteEvent
    login: NexusGenRootTypes['LoginData'] | null; // LoginData
    logout: NexusGenRootTypes['User']; // User!
  }
  Query: { // field return type
    allEvents: Array<NexusGenRootTypes['AllEvent'] | null> | null; // [AllEvent]
  }
  User: { // field return type
    bookedEvents: NexusGenRootTypes['Event'][]; // [Event!]!
    company: string | null; // String
    createdEvents: NexusGenRootTypes['Event'][]; // [Event!]!
    email: string; // String!
    id: number; // Int!
    name: string | null; // String
    password: string | null; // String
    role: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  AllEvent: { // field return type name
    creator: 'String'
    date: 'String'
    description: 'String'
    id: 'Int'
    imageUrl: 'String'
    places: 'String'
    price: 'Int'
    tickets: 'Int'
    title: 'String'
  }
  DeleteEvent: { // field return type name
    message: 'String'
  }
  Event: { // field return type name
    creator: 'User'
    date: 'String'
    description: 'String'
    id: 'Int'
    imageUrl: 'String'
    places: 'String'
    price: 'Int'
    tickets: 'Int'
    title: 'String'
  }
  LoginData: { // field return type name
    message: 'String'
    token: 'String'
  }
  Mutation: { // field return type name
    createEvent: 'Event'
    createUser: 'User'
    deleteEventMutation: 'DeleteEvent'
    login: 'LoginData'
    logout: 'User'
  }
  Query: { // field return type name
    allEvents: 'AllEvent'
  }
  User: { // field return type name
    bookedEvents: 'Event'
    company: 'String'
    createdEvents: 'Event'
    email: 'String'
    id: 'Int'
    name: 'String'
    password: 'String'
    role: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createEvent: { // args
      data: NexusGenInputs['EventCreateInput']; // EventCreateInput!
    }
    createUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
    deleteEventMutation: { // args
      data: NexusGenInputs['EventDeleteInput']; // EventDeleteInput!
    }
    login: { // args
      data?: NexusGenInputs['UserLoginInput'] | null; // UserLoginInput
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}