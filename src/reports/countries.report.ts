import { TDocumentDefinitions } from "pdfmake/interfaces"
import { headerSection } from "./sections/header.section"
import { Country } from "src/countries/entities/countries.entity";


interface ReportOptions {
    title?: string,
    subTitle?: string,
    countries: Country[]
}

export const getCountries = ( opcions: ReportOptions ): TDocumentDefinitions => {

const { title, subTitle, countries } = opcions;
console.log(countries);

    return {
        pageOrientation: 'landscape',
        header: headerSection({
            title: 'Countries Report',
            subTitle: 'A report on various countries',            
        }),
        pageMargins: [40, 100, 40, 60],
        content: [
            {
                layout: 'lightHorizontalLines',
                table: {
                    headerRows: 1,
                    widths: [50, 50, 50, '*', 'auto', '*'],
                    body: [
                        ['Id', 'Iso2', 'Iso3', 'Name', 'Continent', 'Local Name'],
                        ...countries.map( country => [
                            country.id,
                            country.iso2,
                            country.iso3,
                            { text: country.name, bold: true},
                            country.continent,
                            country.localName || 'N/A'
                        ])
                        
                    ]
                }
            }
        ]
    }
}