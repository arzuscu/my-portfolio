module.exports = {
  siteTitle: 'Gatsby Starter Resume', // <title>
  manifestName: 'Resume',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-resume/`, // This path is subpath of your hosting https://domain/portfolio
  firstName: 'Arzu',
  lastName: 'Yildiz',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/anubhavsrivastava',
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://linkedin.com/in/theanubhav/',
    },
    {
      icon: 'fas fa-file-alt',
      name: 'File',
      url: `${__dirname}../../src/assets/file/ArzuYildizResume.pdf`,
    },
  ],
  email: 'anubhav.srivastava00@gmail.com',
  phone: '000-00000',
  address: '305 Del Sol, Sunnyvale, CA',
};
