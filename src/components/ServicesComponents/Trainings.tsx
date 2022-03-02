import DiscoverCard from '../HomePageComponents/DiscoverCard'
import Webdev from '../../assets/discover/webdev.jpg'

interface TrainingsInterface {
  bgColor?: string,
  cardBg?: string
}

const Trainings = ({ bgColor='bg-neutral-200', cardBg='bg-white' }: TrainingsInterface) => {
  return (
    <section className={`${bgColor} flex flex-col pb-20 pt-20 sm:pb-24 sm:pt-24 px-5 sm:px-14 md:px-18 lg:px-32 xl:px-44`}>
      <h1 className='w-full text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-sans'>Trainings</h1>
      <div className='flex flex-col  md:flex-row flex-wrap w-full justify-between'>
        <DiscoverCard
          title='Python'
          info='We have courses for learning the basics of python to advanced libraries like django.'
          image={
            <img src={Webdev} alt='Python'/>
          }
          isTraining
          modalTitle='Syllabus for Python 101'
          bgColor={cardBg}
          modalContent={
            <ul className='px-6 sm:px-10 flex flex-col space-y-2'>
              <li>Fundamentals of Python</li>
              <li>Object Oriented Programming</li>
              <li>Data Structures and Algorithms</li>
              <li>Network programming with Python</li>
              <li>Databases (MySQL)</li>
              <li>CGI programming with Python</li>
              <li>Numpy</li>
              <li>Pandas</li>
              <li>GUI programming with Python-Tkinter</li>
              <li>Introduction to web development</li>
              <li>Django Web Framework</li>
              <li>Restful APIs</li>
              <li>DevOps</li>
            </ul>
          }
          downloadLink='https://www.google.com'
          />
        <DiscoverCard
          title='Mobile Development'
          info="Learn mobile app development for both android and ios devices."
          image={
            <img src={Webdev} alt='Mobile Development'/>
          }
          isTraining
          bgColor={cardBg}
          modalTitle='Syllabus for Mobile Development 101'
          modalContent={
            <ul className='px-6 sm:px-10 flex flex-col space-y-2'>
              <li>Introduction to Android/iOS/Flutter</li>
              <li>Android/iOS/Flutter System Overview</li>
              <li>Android/iOS/Flutter User Interface (UI)</li>
              <li>More UI Elements</li>
              <li>Media Handling</li>
              <li>Data Handling and Content Providers</li>
              <li>Services, Broadcast Receivers, and Intent Filters</li>
              <li>Google API</li>
              <li>Web Services in Android/iOS/Flutter</li>
              <li>Wireless and Networking, Telephony, SMS, and VoIP</li>
              <li>Sensors</li>
              <li>Google Playstore and the App Store</li>
              <li>Material Design</li>
              <li>Android/iOS/Flutter Interface Defin ition Language</li>
            </ul>
          }
          downloadLink='https://www.google.com'
          />
        <DiscoverCard
          title='Java'
          info='We can teach you modern java frameworks like hibernate and spring.'
          image={
            <img src={Webdev} alt='Web Development'/>
          }
          bgColor={cardBg}
          isTraining
          modalTitle='Syllabus for Java 101'
          modalContent={
            <ul className='px-6 sm:px-10 flex flex-col space-y-2'>
              <b>Fundamentals of Java</b>
              <li>OOP in Java</li>
              <li>Object Design and Programming</li>
              <li>String Object and Regular Expressions</li>
              <li>Interfaces in Java</li>
              <li>Java Exception on Handling</li>
              <li>Java Collection ons API</li>
              <li>Java Date and Time API</li>
              <li>Design Pattern</li>
              <li>Threads in Java</li>

              <b>Spring Framework</b>
              <li>Introduction on to Spring Framework</li>
              <li>Advantage of using Spring framework</li>
              <li>Dependency Injection</li>
              <li>Spring Configurations(XML)</li>
              <li>Spring Annotations</li>
              <li>Model, View, Controller</li>
              <li>RequestParam, RequestMapping</li>
              <li>Methods : GET, POST, UPDATE, DELETE</li>

              <b>Spring REST</b>
              <li>Overview</li>
              <li>JSON Data Binding</li>
              <li>Rest Controller</li>
              <li>POJO integration JSON</li>
              <li>Spring REST Database Project</li>
              <li>Spring AOP</li>
              <li>Introduction, Scope</li>
              <li>Aspect, Join Point, Pointcut</li>

            </ul>
          }
          downloadLink='https://www.google.com'
          />
        <DiscoverCard
          title='.Net and/or PHP'
          info='We have courses available for PHP, and the MERN stack, and the .NET framework'
          image={
            <img src={Webdev} alt='Web Development'/>
          }
          isTraining
          bgColor={cardBg}
          modalTitle='Syllabus for Web Development'
          modalContent={
            <ul className='px-6 sm:px-10 flex flex-col space-y-2'>
              <b>PHP</b>
              <li>The PHP programming language</li>
              <li>What is programming?</li>
              <li>Variables, Syntax and expressions</li>
              <li>Data Structure - Array</li>
              <li>Restful Api</li>
              <li>Loop</li>
              <li>Functions</li>
              <li>Some useful Built-in functions</li>
              <li>Object Oriented Concept in PHP</li>
              <li>Examples of Popular Framework and how they works</li>
              <li>What is API and how to handle it?</li>
              <li>Git</li>
              <li>GitHub and Git (Differences and Usage)</li>

              <b>.Net</b>
              <b>Module 1: Object Oriented Programming Concepts</b>
              <li>Introduction to Object-Oriented Programming</li>
              <li>Object-oriented Design</li>
              <li>Classes and Methods</li>
              <li>Abstraction and Inheritance</li>
              <li>Multiple Inheritance and Interfaces</li>
              <li>Polymorphism</li>
              <li>Overloading</li>
              <li>Overriding</li>
              <li>Polymorphic Variable</li>
              <li>Generics</li>
              <li>Frameworks and Reflection</li>
              <li>Patterns</li>

              <b>Module 2: Application Programming (C#)</b>
              <li>Getting Started with C#</li>
              <li>Variables and Data Types in C#</li>
              <li>Statements and Operators</li>
              <li>C# Programming Constructs</li>
              <li>Arrays</li>
              <li>Classes and Methods</li>
              <li>Inheritance and Polymorphism</li>
              <li>Abstract Classes and Interfaces</li>
              <li>Properties and Indexers</li>
              <li>Namespaces</li>
              <li>Exception Handling</li>
              <li>Events, Delegates, and Collections</li>
              <li>Generics and Iterators</li>
              <li>Advanced Methods and Types</li>
              <li>Advanced Concepts in C#</li>
              <li>Encrypting and Decrypting Data</li>

              <b>Module 3: Web Programming using ASP .NET MVC</b>
              <li>Introduction to ASP.NET MVC</li>
              <li>Controllers in ASP.NET MVC</li>
              <li>Views in ASP.NET MVC</li>
              <li>Models in ASP.NET MVC</li>
              <li>Data Validation and Annotation</li>
              <li>Data Access</li>
              <li>Consistent Styles and Layouts</li>
              <li>Responsive Pages</li>
              <li>State Management and Optimization</li>
              <li>Authentication and Authorization</li>
              <li>Security</li>
              <li>Globalization</li>
              <li>Debugging and Monitoring</li>
              <li>Advanced Concepts of ASP.NET MVC</li>
              <li>Testing and Deploying</li>

              <b>Module 4: Agile System Development Life Cycle for Software Projects</b>
              <li>Software Characteristics</li>
              <li>Software Development Life Cycle</li>
              <li>Linear Process Models</li>
              <li>Iterative Process Models</li>
              <li>Specialized Process Models</li>
              <li>Agile Software Development - I</li>
              <li>Agile Software Development - II</li>
              <li>Extreme Programming</li>
              <li>Scrum</li>
              <li>Agile Process Models - I</li>
              <li>Agile Process Models - II</li>
              <li>Comparing Agile with Traditional Models</li>
              <li>Introduction to DevOps and Configuration Management</li>
              <li>Continuous Integration and Delivery in DevOps</li>

            </ul>
          }
          downloadLink='https://www.google.com'
          />
        <DiscoverCard
          title='Oracle'
          info='Learn databases with us today.'
          image={
            <img src={Webdev} alt='Oracle'/>
          }
          isTraining
          modalTitle='Syllabus for Databases 101'
          bgColor={cardBg}
          modalContent={
            <div className='w-full text-center'>
              Syllabus will be provided upon request
            </div>
          }
          downloadLink='https://www.google.com'
          />
        <DiscoverCard
          title='Digital Marketing'
          info='We have courses available for learning digital marketing.'
          image={
            <img src={Webdev} alt='Digital Marketing'/>
          }
          isTraining
          bgColor={cardBg}
          modalTitle='Syllabus for Digital Marketing 101'
          modalContent={
            <ul className='px-6 sm:px-10 flex flex-col space-y-2'>
              <b>
                Mind Risers Digital Marketing Advance Course contents
              </b>
              <li>Introduction</li>
              <li>Domain hosting</li>
              <li>Digital Marketing Basic</li>
              <b>SEO</b>
              <li>Overview (Algorithm & Principles)</li>
              <li>On-page SEO</li>
              <li>Technical SEO</li>
              <li>Off-page SEO</li>
              <li>Infographic Design with Canva</li>
              <li>Data reading</li>
              <b>Search Engine Marketing(SEM)</b>
              <li>Overviews</li>
              <li>Google Ads</li>
              <li>Campaign Management (search, display, video and app campaigns)</li>
              <li>Ads tracking and conversion Tracking & Remarketing</li>
              <li>Advance Data Reading</li>
              <li>Conversion tracking</li>
              <b>Social Media Marketing (Facebook, Instagram,Youtube, Twitter)</b>
              <li>Overviews and principle</li>
              <li>Accounts Management</li>
              <li>Detailed targeting and remarketing</li>
              <li>Setup pixel, track website visitor and target on social media</li>
              <li>Conversion tracking and data reading</li>
              <li>Data analysis and ads improvement</li>
              <b>Email Marketing</b>
              <li>Overview and principle</li>
              <li>Email design</li>
              <li>Lead generation Method</li>
              <li>Bulk email Tool</li>
              <li>Email tracking</li>
              <b>Analytics and Conversion Rate Optimization</b>
              <li>Analytics</li>
              <li>Set up Google analytics and component details</li>
              <li>Event Tracking</li>
              <li>Learning funnel and how to setl</li>
              <li>Conversion tracking</li>
            </ul>
          }
          downloadLink='https://www.google.com'
        />
      </div>
    </section>
  )
}

export default Trainings
