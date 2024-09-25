import type { CollectionConfig, Field } from 'payload'

const testFields: Field[] = [
  {
    name: 'text',
    type: 'text',
    admin: { style: { flex: 1 } },
  },
  {
    name: 'textarea',
    type: 'textarea',
    admin: { style: { flex: 1 } },
  },
  {
    name: 'number',
    type: 'number',
    admin: { style: { flex: 1 } },
  },
  {
    name: 'checkbox',
    type: 'checkbox',
    admin: { style: { flex: 1 } },
  },
  {
    name: 'date',
    type: 'date',
    admin: { style: { flex: 1 } },
  },
  {
    name: 'select',
    type: 'select',
    options: ['one', 'two', 'three'],
    admin: { style: { flex: 1 } },
  },
];

export const Tests: CollectionConfig = {
  slug: 'tests',
  fields: [
    {
      name: 'localizedGroup',
      type: 'group',
      localized: true,
      fields: [
        {
          type: 'row',
          fields: testFields
        }

      ]
    },
    {
      name: 'nonLocalizedGroup',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: testFields
        }

      ]
    },
  ],
}
