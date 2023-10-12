import { buildCollection, buildProperty } from 'firecms';

type History = {
  yearsInCount: number;
};

export const HistoryCollection = buildCollection<History>({
  path: 'history',
  name: 'Histories',
  description:
    'Contains information about each year, important empires and other data.',
  properties: {
    yearsInCount: buildProperty({
      dataType: 'number',
      name: 'Years in count',
      validation: { required: true, unique: true },
      description: 'Ex: 500 BC is -500 & 758 AD is 758. 0 is not allowed',
    }),
  },
  icon: 'HistoryToggleOff',
  group: 'Main',
});
