
'use client';

import React from 'react';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      title: '1. Introduction',
      paragraphs: [
        'Welcome to MyJob Services, operated by [Registered Company Name] ("we", "our", or "us"). MyJob Services is an online recruitment platform available through our website and mobile application.',
        'Our platform connects job seekers with employers and recruiters. This Privacy Policy explains how we collect, use, store, process, disclose and protect your personal information when you use our website, Android application and related services.',
        'By accessing or using MyJob Services, you acknowledge that you have read this Privacy Policy.'
      ]
    },
    {
      title: '2. Information We Collect',
      paragraphs: [
        'Depending on the features you use, we may collect the following information:'
      ],
      bullets: [
        'Personal Details: Name, mobile number, email address, date of birth and other profile details.',
        'Account Information: Username, login credentials, account type and account preferences.',
        'Professional Information: Educational qualifications, employment history, work experience, skills, certifications and career interests.',
        'Resume and Documents: CVs, profile photographs, certificates and other documents voluntarily uploaded by users.',
        'Job Application Information: Jobs applied for, application dates, application status, saved jobs and recruitment-related communication.',
        'Employer Information: Company name, business address, recruiter details, contact information and company profile.',
        'Job Posting Information: Job titles, descriptions, salary ranges, eligibility criteria and employment requirements.',
        'Device and Technical Information: Device model, operating system, browser information, IP address, application version, crash reports and diagnostic information.',
        'Usage Information: Features accessed, pages viewed, interactions and general application activity.'
      ]
    },
    {
      title: '3. Information Collected Through App Permissions',
      paragraphs: [
        'MyJob Services may request access to certain device features only when required for a specific application function. Permission requests will be presented to users when applicable.'
      ],
      bullets: [
        'Storage / File Access: To select and upload resumes, CVs, certificates and other documents.',
        'Camera: If enabled, to capture a profile photograph or upload relevant documents.',
        'Notifications: To send job alerts, application updates, account notifications and important service announcements.',
        'Internet Access: To connect to our servers and provide job search, registration, application and account services.'
      ],
      footer: 'The availability and actual use of these permissions depend on the features implemented in the application. We do not claim to access device features that are not used by our application.'
    },
    {
      title: '4. How We Use Your Information',
      paragraphs: [
        'We use your information for the following purposes:'
      ],
      bullets: [
        'To register and authenticate user accounts.',
        'To create and maintain candidate and employer profiles.',
        'To allow candidates to search and apply for job vacancies.',
        'To allow employers to post jobs and review candidate applications.',
        'To match candidates with relevant employment opportunities.',
        'To facilitate recruitment-related communication between candidates and employers.',
        'To send job alerts, application updates and account notifications.',
        'To provide customer support and respond to enquiries.',
        'To improve application functionality, performance and user experience.',
        'To detect fraudulent activities and maintain platform security.',
        'To comply with applicable legal and regulatory requirements.'
      ]
    },
    {
      title: '5. Candidate Information and Resume Sharing',
      paragraphs: [
        'Candidates may create profiles and upload resumes, qualifications, professional experience and other employment-related information.',
        'When a candidate applies for a job, the relevant application information and resume may be shared with the employer or recruiter responsible for that vacancy.',
        'Depending on the profile visibility and recruitment features available, employers may also access candidate information made available through the platform.',
        'Candidates should ensure that uploaded information is accurate and should avoid uploading sensitive information that is not necessary for recruitment purposes.'
      ]
    },
    {
      title: '6. Employer and Recruiter Information',
      paragraphs: [
        'Employers and recruiters may provide company details, business contact information, job descriptions and recruitment requirements.',
        'This information is used to create employer profiles, publish job vacancies, manage recruitment activities and facilitate communication with candidates.',
        'Employers and recruiters are expected to use candidate information only for legitimate recruitment purposes and in accordance with applicable privacy laws.'
      ]
    },
    {
      title: '7. Sharing of Information',
      paragraphs: [
        'We do not sell users’ personal information. We may share information in the following circumstances:'
      ],
      bullets: [
        'Employers and Recruiters: Candidate information may be shared when candidates apply for jobs or make their profiles available through the platform.',
        'Candidates: Relevant employer and job information may be displayed to candidates during the recruitment process.',
        'Service Providers: We may work with hosting providers, cloud infrastructure providers, analytics services, email providers and technical support providers.',
        'Legal Authorities: Information may be disclosed when required by law, court orders or lawful government requests.',
        'Security and Fraud Prevention: Information may be used or disclosed when reasonably necessary to investigate misuse, protect users or safeguard our services.'
      ]
    },
    {
      title: '8. Cookies and Analytics',
      paragraphs: [
        'Our website and application may use cookies, analytics tools and similar technologies to understand usage patterns, maintain sessions, improve functionality and analyse performance.',
        'Third-party analytics or diagnostic services, if integrated, may collect technical information according to their own privacy practices.',
        'Users can manage browser cookies through their browser settings. Some functionality may be affected if certain cookies are disabled.'
      ]
    },
    {
      title: '9. Data Storage and Security',
      paragraphs: [
        'We take reasonable technical and organisational measures to protect user information against unauthorized access, disclosure, alteration, loss and misuse.',
        'Depending on our infrastructure, security measures may include access restrictions, authentication mechanisms, secure network connections, system monitoring and appropriate backup procedures.',
        'Access to personal information is restricted to authorized personnel and service providers who require it for legitimate business purposes.',
        'Although we make reasonable efforts to protect your information, no electronic storage or transmission system can be guaranteed to be completely secure.'
      ]
    },
    {
      title: '10. Data Retention',
      paragraphs: [
        'We retain personal information for as long as necessary to provide our services, maintain user accounts, support recruitment activities and comply with applicable legal obligations.',
        'When information is no longer required, we will take appropriate steps to delete, anonymise or securely dispose of it, subject to applicable legal requirements.',
        'Certain information may be retained where necessary for legal compliance, dispute resolution, fraud prevention or security purposes. Any such retention will be limited to the applicable purpose and period.'
      ]
    },
    {
      title: '11. Account Deletion and Data Removal',
      paragraphs: [
        'Users may request deletion of their MyJob Services account and associated personal information.',
        'Users can initiate account deletion through the account settings or account deletion feature available within the application, where implemented.',
        'Users may also submit an external deletion request through our account deletion webpage or contact our privacy support team.',
        'Upon receiving a valid deletion request, we will process it and delete associated personal information in accordance with applicable laws and legitimate retention requirements.',
        'Certain information may be retained where legally required or necessary for security, fraud prevention or resolution of outstanding disputes. We will handle such retained information only for the permitted purpose.'
      ]
    },
    {
      title: '12. Third-Party Services',
      paragraphs: [
        'Our application may integrate third-party services to support hosting, analytics, crash reporting, notifications, payment processing and other application functionality.',
        'These service providers may process certain technical or personal information as required to provide their services.',
        'We encourage users to review the privacy policies of third-party services where applicable. Our use of third-party services will be reflected in our disclosures and Google Play Data Safety declaration.'
      ]
    },
    {
      title: '13. User Rights and Choices',
      paragraphs: [
        'Subject to applicable laws, users may have the right to:'
      ],
      bullets: [
        'Request access to their personal information.',
        'Request correction or updating of inaccurate information.',
        'Request deletion of their account and associated personal information.',
        'Withdraw consent where processing is based on consent.',
        'Manage notification preferences through available settings.',
        'Raise concerns or complaints regarding the processing of personal information.'
      ]
    },
    {
      title: '14. Children’s Privacy',
      paragraphs: [
        'MyJob Services is intended for individuals legally eligible to participate in employment and recruitment activities.',
        'We do not knowingly collect personal information from children in violation of applicable laws. If we become aware of such collection, we will take appropriate steps to address the information.'
      ]
    },
    {
      title: '15. Changes to This Privacy Policy',
      paragraphs: [
        'We may update this Privacy Policy from time to time to reflect changes in our application features, services, business practices, technologies or applicable laws.',
        'Any changes will be published on this page with an updated revision date. Users are encouraged to review this policy periodically.'
      ]
    },
    {
      title: '16. Contact and Grievance Support',
      paragraphs: [
        'If you have any questions, requests, concerns or complaints regarding this Privacy Policy or the handling of your personal information, please contact us:'
      ],
      bullets: [
        'Application Name: MyJob Services',
        'Website: https://www.myjobservices.in/',
        'Company / Developer: [Registered Company Name]',
        'Privacy Contact Email: [Your Official Privacy Email]',
        'Contact Number: [Official Contact Number]',
        'Registered Address: [Complete Registered Office Address]',
        'Grievance Contact: [Name or Designation of Grievance Officer]'
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-[#f5f7fb] py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em]">
            MyJob Services
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14243a] mt-3 mb-4">
            Privacy Policy
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-7">
            We value your trust. This policy explains how your personal
            information is collected, used, stored and protected when
            you use the MyJob Services mobile application and website.
          </p>

          <p className="text-gray-400 text-xs mt-5">
            Effective Date: 21 November 2026
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-5 sm:p-7 mb-7 shadow-sm">
          <h2 className="font-bold text-[#14243a] mb-2">
            Your Privacy Matters
          </h2>
          <p className="text-gray-600 text-sm leading-7">
            MyJob Services is committed to providing a secure and
            transparent recruitment platform for job seekers,
            employers and recruiters. We handle personal information
            responsibly and in accordance with applicable laws.
          </p>
        </div>

        <div className="space-y-5">
          {sections.map((section, index) => (
            <article
              key={index}
              className="bg-white rounded-xl border border-gray-100 p-5 sm:p-8 shadow-sm"
            >
              <h2 className="text-lg sm:text-xl font-bold text-[#14243a] mb-4">
                {section.title}
              </h2>

              <div className="space-y-3">
                {section.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-gray-600 text-sm sm:text-base leading-7"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.bullets && (
                <ul className="mt-4 space-y-3">
                  {section.bullets.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-600 text-sm sm:text-base leading-7"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <div className="mt-8 bg-[#14243a] rounded-xl p-7 sm:p-9 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Need Privacy Assistance?
          </h2>

          <p className="text-gray-300 text-sm leading-7 mb-6">
            Contact our team for questions about your personal data,
            account privacy or deletion requests.
          </p>

          <a
            href="mailto:YOUR_PRIVACY_EMAIL"
            className="inline-flex items-center px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-colors"
          >
            Contact Privacy Support
          </a>
        </div>

      </div>
    </section>
  );
};

export default PrivacyPolicy;
