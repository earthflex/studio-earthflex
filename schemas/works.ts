import { defineType, defineField } from "sanity";
export default defineType({
    name: 'WORKS_ITEMS',
    type: 'document',
    title: 'Works',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            // validation: Rule => [
            //     Rule.required().min(10).error('A title of min. 10 characters is required'),
            //     Rule.max(50).warning('Shorter titles are usually better')
            // ]
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'mediaType',
            type: 'string',
            title: 'Media Type',
            options: {
                list: ['img'],
            },
            initialValue: 'img'
        }),
        defineField({
            name: 'workType',
            title: 'Work Type',
            type: 'string',
            options: {
                list: ['Web App', 'Website', 'Graphic', 'Motion', 'Collage'],
            },
        }),
        defineField({
            name: 'themeColor',
            title: 'Theme color',
            type: 'color',
            options: {
                disableAlpha: true,
                colorList: [
                    'white',
                    'black',
                ]
            }
        }),
        defineField({
            name: 'textColor',
            title: 'Text color',
            type: 'color',
            options: {
                disableAlpha: true,
                colorList: [
                    'white',
                    'black',
                ]
            }
        }),
        defineField({
            name: 'coverimage',
            type: 'image',
            title: 'Cover Image (size : 752x848px)',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'attribution',
                    type: 'string',
                    title: 'Attribution',
                }
            ]
        })
    ],
})
