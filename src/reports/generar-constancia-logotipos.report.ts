
import { Content, TDocumentDefinitions } from "pdfmake/interfaces";



const logoLeft: Content = {
    image: 'src/assets/images/spayt.jpg',
    width: 150
}

const logoRight: Content = {
    image: 'src/assets/images/spayt.jpg',
    width: 150
}


export const getConstanciaConLogotipos = (body: any) => {
  const { studentName, studentID, program, institution, date } = body;
  const docDefinition: TDocumentDefinitions = {
    content: [
      // Encabezado con imágenes a la izquierda y derecha
      {
        columns: [
           logoLeft,
          {
            text: institution.toUpperCase(),
            style: 'header',
            alignment: 'center',
            margin: [0, 20, 0, 0],
          },
          logoRight,
        ],
      },

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
    styles: {
      header: { fontSize: 16, bold: true },
      subheader: { fontSize: 14, bold: true },
      bold: { bold: true },
    },
  };

  return docDefinition;
};
