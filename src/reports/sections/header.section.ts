import { Content } from 'pdfmake/interfaces';


const logoLeft: Content = {
  image: 'src/assets/images/sed.png',
  width: 150,
  alignment: 'left',
  margin: [20, 20, 0, 0],
};


const logoRight: Content = {
  image: 'src/assets/images/spayt-png.png',
  width: 80,
  margin: [0, 20, 20, 0],
  alignment: 'right',
};



interface HeaderOptions {
  title?: string;
  subTitle?: string;
  showLogo?: boolean;
  showDate?: boolean;
}

export const headerSection = (options: HeaderOptions): Content => {
  
  const { title, subTitle, showLogo = true, showDate= true } = options;

  const headerLogo: Content = showLogo ? logoLeft : '';
  const headerDate: Content = showDate ? {
    text: new Date().toLocaleDateString(),
    alignment: 'center',
    margin: [0, 0, 20, 0],
  } : '';

  const headerSubTitle: Content  = subTitle ? {
    text: subTitle,
    alignment: 'center',
    margin: [0, 5, 0, 0],
    style: {
      fontSize: 14,
      bold: true,
    },
  } : '';

  const headerTitle: Content = title ? {
    stack: [
      {
        text: title,
        alignment: 'center',
        margin: [0, 15, 0, 0],
        style: {
          bold: true,
          fontSize: 22,
        }
      },
      headerSubTitle
    ]
  } : '';

  return {
    columns: [
      logoLeft,      
      headerTitle,
      logoRight,
      
    ],
  };
};
