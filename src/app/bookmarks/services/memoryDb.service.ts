import {InMemoryDbService} from 'angular-in-memory-web-api';


export class MemoryDbService implements InMemoryDbService {

  createDb() {
    const bookmarks = [
      { id: 1, title: 'Angular Framework Documentation', date: new Date() },
      { id: 2, title: 'RxJS Reactive Extensions', date: new Date(2024, 12, 2) },
      { id: 3, title: 'NgRx State Management Guide', date: this.randomDate() },
      { id: 4, title: 'TypeScript Handbook', date: this.randomDate() },
      { id: 5, title: 'JavaScript Info', date: this.randomDate() },
      { id: 6, title: 'React vs Angular Comparison', date: this.randomDate() },
      { id: 7, title: 'Understanding GraphQL', date: this.randomDate() },
      { id: 8, title: 'REST API Best Practices', date: this.randomDate() },
      { id: 9, title: 'Docker for Developers', date: this.randomDate() },
      { id: 10, title: 'Kubernetes Basics', date: this.randomDate() },
      { id: 11, title: 'Introduction to Machine Learning', date: this.randomDate() },
      { id: 12, title: 'Building Serverless Apps', date: this.randomDate() },
      { id: 13, title: 'Cloud Computing with AWS', date: this.randomDate() },
      { id: 14, title: 'Google Cloud Platform Guide', date: this.randomDate() },
      { id: 15, title: 'Azure DevOps Pipelines', date: this.randomDate() },
      { id: 16, title: 'CI/CD Best Practices', date: this.randomDate() },
      { id: 17, title: 'Introduction to Cybersecurity', date: this.randomDate() },
      { id: 18, title: 'Penetration Testing Basics', date: this.randomDate() },
      { id: 19, title: 'Next.js Framework Guide', date: this.randomDate() },
      { id: 20, title: 'Vue.js for Beginners', date: this.randomDate() },
      { id: 21, title: 'Deno vs Node.js', date: this.randomDate() },
      { id: 22, title: 'Building Progressive Web Apps', date: this.randomDate() },
      { id: 23, title: 'Electron for Desktop Apps', date: this.randomDate() },
      { id: 24, title: 'Python for Data Science', date: this.randomDate() },
      { id: 25, title: 'TensorFlow and PyTorch', date: this.randomDate() },
      { id: 26, title: 'AI and Ethics', date: this.randomDate() },
      { id: 27, title: 'Blockchain Basics', date: this.randomDate() },
      { id: 28, title: 'Solidity for Smart Contracts', date: this.randomDate() },
      { id: 29, title: 'Web3 Development', date: this.randomDate() },
      { id: 30, title: 'Rust Programming Language', date: this.randomDate() },
      { id: 31, title: 'GoLang vs Rust', date: this.randomDate() },
      { id: 32, title: 'Low-code Platforms Overview', date: this.randomDate() },
      { id: 33, title: 'Best Laptops for Developers 2024', date: this.randomDate() },
      { id: 34, title: 'Top Programming Keyboards', date: this.randomDate() },
      { id: 35, title: 'Monitors for Productivity', date: this.randomDate() },
      { id: 36, title: 'Mechanical Keyboards Guide', date: this.randomDate() },
      { id: 37, title: 'Wireless Earbuds Comparison', date: this.randomDate() },
      { id: 38, title: 'Smart Home Devices Guide', date: this.randomDate() },
      { id: 39, title: 'Best Smartphones for Developers', date: this.randomDate() },
      { id: 40, title: 'Virtual Reality Headsets 2024', date: this.randomDate() },
    ];
    return { bookmarks };
  }

  private randomDate(): Date {
    const start = new Date(2024, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }


}
