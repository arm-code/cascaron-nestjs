import { Content } from 'pdfmake/interfaces';


const logoRight: Content = {
  image: 'src/assets/images/sed.png',
  width: 150,
    alignment: 'right',
};


const logoLeft: Content = {
  image: 'src/assets/images/spayt-png.png',
  width: 80,
  alignment: 'left',
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

  return {
    columns: [
      logoRight,
      headerDate,
      logoLeft,
    ],
  };
};
