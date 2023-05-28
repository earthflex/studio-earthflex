import { defineType, defineField } from "sanity";
import { RxBackpack } from "react-icons/rx";

export default defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    icon: RxBackpack,
    fields: [
        defineField({
            name: 'current',
            title: 'Currently working',
            type: 'boolean',
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
        }),
        defineField({
            name: 'city',
            title: 'City',
            type: 'string',
        }),
        {
            name: 'roles',
            title: 'Roles',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'position',
                        title: 'Position',
                        type: 'string',
                    },
                    {
                        name: 'detailRole',
                        title: 'Detail',
                        type: 'array',
                        of: [{
                            type: 'string',
                        }],
                    },
                    {
                        name: 'startDate',
                        title: 'Start Date',
                        type: 'date',
                        options: {
                            dateFormat: 'DD/MM/YYYY',
                            calendarTodayLabel: 'Today'
                        },
                    },
                    defineField({
                        name: 'present',
                        title: 'Present',
                        type: 'boolean',
                    }),
                    {
                        name: 'endDate',
                        title: 'End Date',
                        type: 'date',
                        options: {
                            dateFormat: 'DD/MM/YYYY',
                            calendarTodayLabel: 'Today'
                        },
                        hidden: ({ parent }) => parent.present === true,
                    },
                ],
            }],
        },
        defineField({
            name: 'logocompany',
            type: 'image',
            title: 'Logo Company ',
            options: {
                hotspot: true,
            }
        })

    ],
    // preview: {
    //     select: {
    //         company: 'company',
    //         roles: 'roles',
    //         logocompany: 'logocompany'
    //     },
    //     prepare({ company, roles, logocompany }) {
    //         const position = roles && roles[0] && roles[0].position;
    //         const startDate = roles && roles[0] && roles[0].startDate;
    //         const endDate = roles && roles[0] && roles[0].endDate;

    //         const formattedStartDate = new Date(startDate).toLocaleDateString('en-US', {
    //             year: 'numeric',
    //             month: 'short',
    //         });
    //         const formattedEndDate = endDate
    //             ? new Date(endDate).toLocaleDateString('en-US', {
    //                 year: 'numeric',
    //                 month: 'short',
    //             })
    //             : 'Present';

    //         return {
    //             title: company,
    //             subtitle: position ? `${position} | ${formattedStartDate} - ${formattedEndDate}` : '',
    //         };
    //     },
    // },
});