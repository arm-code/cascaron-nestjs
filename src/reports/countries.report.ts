import { TDocumentDefinitions } from "pdfmake/interfaces"
import { headerSection } from "./sections/header.section"

export const getCountries = (): TDocumentDefinitions => {
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
                    widths: ['*', 'auto', 100, '*'],
                    body: [
                        ['First Name', 'Last Name', 'Country', 'City'],
                        ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
                        [{ text: 'Value 5', italics: true }, 'Value 6', 'Value 7', 'Value 8'],
                    ]
                }
            }
        ]
    }
}