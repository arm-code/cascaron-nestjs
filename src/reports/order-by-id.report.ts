import type { Content, StyleDictionary, TDocumentDefinitions } from "pdfmake/interfaces";
import { footerSection } from "./sections/footer.section";

const logo: Content = {
    image: 'src/assets/images/spayt.jpg',
    width: 150,    
    margin: [20, 20, 0, 0],
}

const styles: StyleDictionary = {
    header: {
        fontSize: 18,
        bold: true,
        margin: [0, 30, 0, 30],
    },
    subHeader: {
        fontSize: 14,
        bold: true,
        margin: [0, 10, 0, 10],
    }
}

export const orderByIdReport = (): TDocumentDefinitions => {
    return{
        styles: styles,
        header: logo,       
        footer: footerSection, 
        pageMargins: [40, 100, 40, 60],
        content: [
            {
                text: 'Reporte de Orden por ID',
                style: 'header',
            },
            {
                columns: [
                    { text: 'Av. 16 de septiembre 1232, \nCol. Partido Romero\nCiudad Juarez Ch.\nSPAYT', bold: true },
                    { text: 'Oficio No. 1231\n 2025-05-05\ntest', alignment: 'right' } // Placeholder for order ID, replace with dynamic data
                ]
            },

            // qr code placeholder
            {
                qr: 'https://www.spaytchihuahua.com', fit: 75, alignment: 'right'
            },

            // Placeholder for order details
            {
                text: 'Cobrar a: \n',                
                style: 'subHeader',
            },
            `Nombre del Cliente: Juan Perez
            Telefono: 1234567890
            Correo: cliente1@gmail.com`            
        ],        
    }
}