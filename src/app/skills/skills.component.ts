import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills: {
    name: string;
    progress: number;
    logo: string;
    description: string;
    documentationLink: string;
  }[] = [
    {
      name: 'HTML',
      progress: 90,
      logo: 'assets/html-1.svg',
      description:
        'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.',
      documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      name: 'CSS',
      progress: 85,
      logo: 'assets/css-3.svg',
      description:
        'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in HTML.',
      documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      name: 'JavaScript',
      progress: 80,
      logo: 'assets/javascript-1.svg',
      description:
        'JavaScript is a high-level, interpreted programming language that is widely used for web development. It allows developers to create interactive and dynamic content on web pages.',
      documentationLink:
        ' https://www.javascript.com/',
    },
    {
      name: 'Angular',
      progress: 70,
      logo: 'assets/angular-icon-1.svg',
      description:
        'Angular is a TypeScript-based open-source web application framework maintained by Google. It is used for building dynamic, data-driven web applications and supports features like two-way data binding and dependency injection.',
      documentationLink: 'https://angular.io/docs',
    },
    
    {
      name: 'Java',
      progress: 85,
      logo: 'assets/java-4.svg',
      description:
        'Java is a popular and widely-used programming language for building cross-platform applications. It is known for its portability, reliability, and object-oriented programming features.      ',
      documentationLink: 'https://docs.oracle.com/en/java/',
    },
   
    {
      name: 'Node.js',
      progress: 60,
      logo: 'assets/nodejs-2.svg',
      description:
        'Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code on the server-side. It is designed to create scalable and high-performance applications.',
      documentationLink: 'https://nodejs.org/en/docs/',
    },
    {
      name: 'Python',
      progress: 76,
      logo: 'assets/python-5.svg',
      description:
        'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation via the off-side rule. Python is dynamically typed and garbage-collected.',
      documentationLink: 'https://www.python.org/',
    },
   
    
    {
      name: 'mySQL',
      progress: 80,
      logo: 'assets/mysql-6.svg',
      description:
        'MySQL is an open-source relational database management system. It is widely used for storing and managing data in web applications and other software systems.',
      documentationLink: 'https://dev.mysql.com/doc/',
    },

  ];
}
