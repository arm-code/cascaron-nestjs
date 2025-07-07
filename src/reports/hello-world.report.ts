import type { TDocumentDefinitions } from 'pdfmake/interfaces';


interface ReportOptions{
    name: string,
    age: number

}
export const getHelloWorldReport = ( options: ReportOptions ) => {
  
  const {name, age } = options;

    const docDefinition: TDocumentDefinitions = {
    content: [`Hola mundo ${ name }, tu edad es: ${ age }`],
  };

  return docDefinition;
};
