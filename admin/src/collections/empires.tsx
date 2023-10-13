import { buildCollection, buildProperty } from 'firecms';

type Empire = {
  name: string;
  otherNames: string[];
  description: string;
  flag: string;
  mapColor: string;
  moreInfoLinks: string[];
  startYear: number;
  endYear: number;
  capitals: string[];
  languages: string[];
  religions: string[];
};

export const EmpireCollection = buildCollection<Empire>({
  path: 'empire',
  name: 'Empires',
  description: 'Details about each empire including flag and other links',
  icon: 'Landscape',
  properties: {
    name: buildProperty({
      dataType: 'string',
      name: 'Name',
      validation: { required: true },
    }),
    otherNames: buildProperty({
      dataType: 'array',
      name: 'Other names',
      of: {
        dataType: 'string',
      },
    }),
    description: buildProperty({
      dataType: 'string',
      name: 'Description',
      validation: { required: true },
    }),
    flag: buildProperty({
      dataType: 'string',
      name: 'Flag',
      storage: {
        mediaType: 'image',
        storagePath: 'flags',
        acceptedFiles: ['image/*'],
      },
    }),
    mapColor: buildProperty({
      dataType: 'string',
      name: 'Map Color',
      validation: { required: true },
      description: 'Color in HEX. Example: #0AF',
    }),
    moreInfoLinks: buildProperty({
      dataType: 'array',
      name: 'More info links',
      of: {
        dataType: 'string',
      },
    }),
    startYear: buildProperty({
      dataType: 'number',
      name: 'Start Year',
      validation: {
        required: true,
        unique: true,
        min: -3000,
        max: new Date().getFullYear(),
      },
      description: 'Ex: 500 BC is -500 & 758 AD is 758. 0 is not allowed',
    }),
    endYear: buildProperty({
      dataType: 'number',
      name: 'End Year',
      validation: {
        required: true,
        unique: true,
        min: -3000,
        max: new Date().getFullYear(),
      },
      description: 'Ex: 500 BC is -500 & 758 AD is 758. 0 is not allowed',
    }),
    capitals: buildProperty({
      dataType: 'array',
      name: 'Capitals',
      of: {
        dataType: 'string',
      },
    }),
    languages: buildProperty({
      dataType: 'array',
      name: 'Languages',
      of: {
        dataType: 'string',
      },
    }),
    religions: buildProperty({
      dataType: 'array',
      name: 'Religion',
      of: {
        dataType: 'string',
      },
    }),
  },
});
