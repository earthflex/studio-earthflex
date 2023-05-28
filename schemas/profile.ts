import { defineField, defineType } from 'sanity'
const currentYear = new Date().getFullYear();
const yearList = [];

for (let i = currentYear; i >= currentYear - 20; i--) {
    yearList.push({ title: `${i}`, value: `${i}` });
}

const yearField = {
    name: 'year',
    title: 'Year',
    type: 'string',
    options: {
        list: yearList,
    },
};

export default defineType({
    name: 'profile',
    title: 'Profile Skill',
    type: 'document',
    fields: [
        defineField({
            name: 'status',
            title: 'Employment types',
            description: 'Status your work',
            type: 'string',
            options: {
                list: ['Full-time', 'Freelancers', 'Finding a new job'],
            },
        }),
        defineField({
            name: 'fullname',
            title: 'Fullname',
            type: 'string',
        }),
        defineField({
            name: 'position',
            title: 'Position',
            type: 'string',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'code',
            title: 'Code',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'tools',
            title: 'Tools',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        {
            name: 'educations',
            title: 'Educations',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'school',
                        title: 'School',
                        type: 'string',
                    },
                    {
                        name: 'fieldofStudy',
                        title: 'Field of Study',
                        type: 'string',
                    },
                    {
                        name: "startMonth",
                        title: "Start Month",
                        type: "string",
                        options: {
                            list: [
                                { "title": "Jan", "value": "Jan " },
                                { "title": "Feb", "value": "Feb" },
                                { "title": "Mar", "value": "Mar" },
                                { "title": "Apr", "value": "Apr" },
                                { "title": "May", "value": "May" },
                                { "title": "Jun", "value": "Jun" },
                                { "title": "Jul", "value": "Jul" },
                                { "title": "Aug", "value": "Aug" },
                                { "title": "Sep", "value": "Sep" },
                                { "title": "Oct", "value": "Oct" },
                                { "title": "Nov", "value": "Nov" },
                                { "title": "Dec", "value": "Dec" }
                            ]
                        }
                    },
                    {
                        name: 'startYear',
                        title: 'Start Year',
                        type: 'string',
                        options: {
                            list: yearList,
                        },

                    },
                    {
                        name: "endMonth",
                        title: "End Month",
                        type: "string",
                        options: {
                            list: [
                                { "title": "Jan", "value": "Jan " },
                                { "title": "Feb", "value": "Feb" },
                                { "title": "Mar", "value": "Mar" },
                                { "title": "Apr", "value": "Apr" },
                                { "title": "May", "value": "May" },
                                { "title": "Jun", "value": "Jun" },
                                { "title": "Jul", "value": "Jul" },
                                { "title": "Aug", "value": "Aug" },
                                { "title": "Sep", "value": "Sep" },
                                { "title": "Oct", "value": "Oct" },
                                { "title": "Nov", "value": "Nov" },
                                { "title": "Dec", "value": "Dec" }
                            ]
                        }
                    },
                    {
                        name: 'endYear',
                        title: 'End Year',
                        type: 'string',
                        options: {
                            list: yearList,
                        },
                    }
                ],
            }],
        },
        {
            name: 'contact',
            title: 'Contact',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'type',
                        title: 'Type Contact',
                        type: 'string',
                    },
                    {
                        name: 'icon',
                        title: 'Icon',
                        type: 'image',
                        options: {
                            hotspot: true,
                        }
                    },
                    {
                        name: 'color',
                        title: 'Background Icon',
                        type: 'color',
                        options: {
                            disableAlpha: true,
                        }
                    },
                    {
                        name: 'detail',
                        title: 'Detail',
                        type: 'string',
                    },
                    {
                        name: 'href',
                        title: 'Link',
                        type: 'string',
                    },
                    {
                        name: 'newtab',
                        title: 'Open Link New Tab',
                        type: 'boolean',
                    },
                ],
            }],
        },
        defineField({
            name: 'profileImg',
            title: 'Profile Image',
            type: 'image',
        }),
        defineField({
            name: 'pdf',
            title: 'Resume PDF File',
            type: 'file',
            description: 'Upload PDF files.',
            options: {
                accept: '.pdf',
                storeOriginalFilename: true,
            }
        })
    ],
    preview: {
        prepare() {
            return {
                title: 'Profile',
            }
        },
    },
})
