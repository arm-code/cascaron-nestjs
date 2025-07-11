import { Content, ContextPageSize } from "pdfmake/interfaces";

export const footerSection = (currentPage: number, pageCount: number, pageSize: ContextPageSize ): Content => {    

    return {
        text: `Page ${currentPage} of ${pageCount}`,
        alignment: 'right',
        margin: [0, 5, 20, 20],
        fontSize: 10,
        color: '#555',
        bold: true
    };
}