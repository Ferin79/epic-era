import { EntityReference, buildCollection, buildProperty } from 'firecms';

type Timeline = {
  yearsInCount: number;
  empires: EntityReference[];
};

export const TimelineCollection = buildCollection<Timeline>({
  path: 'timeline',
  name: 'Timelines',
  description:
    'Contains information about each year, empires reference and other data.',
  icon: 'HistoryToggleOff',
  properties: {
    yearsInCount: buildProperty({
      dataType: 'number',
      name: 'Years in count',
      validation: {
        required: true,
        unique: true,
        min: -3000,
        max: new Date().getFullYear(),
      },
      description: 'Ex: 500 BC is -500 & 758 AD is 758. 0 is not allowed',
    }),
    empires: buildProperty({
      dataType: 'array',
      name: 'Empires',
      of: {
        dataType: 'reference',
        path: 'empire',
      },
    }),
  },
});
