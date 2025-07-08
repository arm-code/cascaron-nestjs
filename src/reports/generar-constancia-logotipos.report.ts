
import { Content, StyleDictionary, TDocumentDefinitions } from "pdfmake/interfaces";
import { headerSection } from "./sections/header.section";



const logoLeft: Content = {
    image: 'src/assets/images/sed.png',
    width: 150,    
    alignment: 'left'
}

const logoRight: Content = {
    image: 'src/assets/images/spayt-png.png',
    width: 150,
    alignment: 'left'
    
}

// const styles: StyleDictionary = {
//   header: {
//     fontSize: 16,
//     bold: true,
//     alignment: 'center',
//     margin: [0, 20, 0, 0],
//   },  
//   subheader: { 
//     fontSize: 14, 
//     bold: true 
//   },
//   bold: { 
//     bold: true 
//   },

// }

export const getConstanciaConLogotipos = (body: any) => {
  
  const { studentName, studentID, program, institution, date } = body;

  const docDefinition: TDocumentDefinitions = {
    
    // Aqui se manda a llamar al dictionary de estilos que se definen arriba 
    //styles: styles,
    //pageMargins: [20,20,20,20],

    // Aqui el header
    header: headerSection({ showLogo: true }),     
    
    // Aqui va todo el contenido del reporte
    content: [                 
      {
        text: 'CONSTANCIA DE ESTUDIOS',
        style: 'subheader',
        alignment: 'center',
        margin: [0, 10, 0, 20],
      },

      { text: 'A QUIEN CORRESPONDA:', style: 'bold' },

      {
        text: [
          'Por medio de la presente, se hace constar que el(la) estudiante ',
          { text: studentName, bold: true },
          ', con número de identificación ',
          { text: studentID, bold: true },
          ', está inscrito(a) en el programa de estudios ',
          { text: program, bold: true },
          ' en esta institución.',
        ],
        margin: [0, 10, 0, 10],
        alignment: 'justify',
      },

      {
        text: 'Detalles del estudiante:',
        style: 'bold',
        margin: [0, 10, 0, 5],
      },
      {
        table: {
          widths: ['30%', '70%'],
          body: [
            [{ text: 'Nombre:', bold: true }, studentName],
            [{ text: 'Número de ID:', bold: true }, studentID],
            [{ text: 'Programa:', bold: true }, program],
            [{ text: 'Fecha de emisión:', bold: true }, date],
          ],
        },
        margin: [0, 5, 0, 10],
      },

      {
        text: 'Esta constancia se expide a petición del interesado para los fines que estime convenientes.',
        margin: [0, 20, 0, 10],
      },

      { text: 'Atentamente,', margin: [0, 30, 0, 5] },
      { text: institution, bold: true },
      { text: '_____________________________', margin: [0, 20, 0, 5] },
      { text: 'Firma del responsable', italics: true },
    ],    
    
  };

  return docDefinition;
};
