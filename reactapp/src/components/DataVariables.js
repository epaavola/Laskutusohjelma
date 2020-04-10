
const alvKannat = [
    {
        value: '0',
        label: '0 %'
    },
    {
        value: '10',
        label: '10 %'
    },
    {
        value: '14',
        label: '14 %'
    },
    {
        value: '24',
        label: '24 %'
    }
]

const pankit = [
    {
        value: 'Aktia',
        label: 'Aktia Pankki'
    },
    {
        value: 'Danske',
        label: 'Danske Bank'
    },
    {
        value: 'Handelsbanken',
        label: 'Handelsbanken'
    },
    {
        value: 'Nordea',
        label: 'Nordea'
    },
    {
        value: 'OP',
        label: 'Osuuspankki'
    },
    {
        value: 'S-Pankki',
        label: 'S-Pankki'
    },
    {
        value: 'Säästöpankki',
        label: 'Säästöpankki'
    }
]

export const getBankData = () => {
    return pankit
}

export const getALVdata = () => {
    return alvKannat
}