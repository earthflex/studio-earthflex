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
                        name: 'fieldofstudy',
                        title: 'Field of Study',
                        type: 'string',
                    },
                    {
                        name: "startmonth",
                        title: "Start Month",
                        type: "string",
                        options: {
                            list: [
                                { "title": "Jan", "value": "January" },
                                { "title": "Feb", "value": "February" },
                                { "title": "Mar", "value": "March" },
                                { "title": "Apr", "value": "April" },
                                { "title": "May", "value": "May" },
                                { "title": "Jun", "value": "June" },
                                { "title": "Jul", "value": "July" },
                                { "title": "Aug", "value": "August" },
                                { "title": "Sep", "value": "September" },
                                { "title": "Oct", "value": "October" },
                                { "title": "Nov", "value": "November" },
                                { "title": "Dec", "value": "December" }
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
                        name: "endmonth",
                        title: "End Month",
                        type: "string",
                        options: {
                            list: [
                                { "title": "Jan", "value": "January" },
                                { "title": "Feb", "value": "February" },
                                { "title": "Mar", "value": "March" },
                                { "title": "Apr", "value": "April" },
                                { "title": "May", "value": "May" },
                                { "title": "Jun", "value": "June" },
                                { "title": "Jul", "value": "July" },
                                { "title": "Aug", "value": "August" },
                                { "title": "Sep", "value": "September" },
                                { "title": "Oct", "value": "October" },
                                { "title": "Nov", "value": "November" },
                                { "title": "Dec", "value": "December" }
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
                        name: 'icon',
                        title: 'Icon',
                        type: 'image',
                        options: {
                            hotspot: true,
                        }
                    },
                    {
                        name: 'title',
                        title: 'Title',
                        type: 'string',
                    },
                    {
                        name: 'href',
                        title: 'Link',
                        type: 'string',
                    },
                ],
            }],
        },
        defineField({
            name: 'pdf',
            title: 'Resume PDF File',
            type: 'file',
            description: 'Upload PDF files.',
            options: {
                accept: '.pdf'
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
