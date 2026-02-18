
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TableOfContents } from './components/TableOfContents';
import { ContentSection } from './components/ContentSection';
import { Footer } from './components/Footer';

const SECTIONS = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'collection', title: '2. Information We Collect' },
  { id: 'usage', title: '3. How We Use Your Information' },
  { id: 'security', title: '4. Data Storage & Security' },
  { id: 'sharing', title: '5. Sharing of Information' },
  { id: 'rights', title: '6. Your Rights' },
  { id: 'third-party', title: '7. Third-Party Services' },
  { id: 'children', title: '8. Children\'s Privacy' },
  { id: 'changes', title: '9. Changes to This Policy' },
  { id: 'contact', title: '10. Contact Information' },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = SECTIONS.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="Privacy Policy for WhatsApp – Odoo Integration" 
          lastUpdated="17 Feb 2026" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-4 lg:gap-12">
            {/* Sidebar TOC - Sticky */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents sections={SECTIONS} activeSection={activeSection} />
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              <ContentSection id="introduction" title="1. Introduction">
                <p>
                  This Privacy Policy describes how we collect, use, store, and protect information when you use our WhatsApp integration connected to Odoo (“Service”).
                </p>
                <p className="mt-4">
                  This Service uses Meta’s WhatsApp Business API and is connected to our Meta App on developers.facebook.com.
                </p>
                <p className="mt-4 font-medium text-slate-700">
                  By using the Service, you agree to the terms of this Privacy Policy.
                </p>
              </ContentSection>

              <ContentSection id="collection" title="2. Information We Collect">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">2.1 Information You Provide</h4>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600">
                      <li>Business name</li>
                      <li>Contact details (such as email or phone number)</li>
                      <li>WhatsApp Business phone number</li>
                      <li>Information entered into Odoo related to customers, orders, or messages</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">2.2 WhatsApp Message Data</h4>
                    <p className="mb-2 text-slate-600">Through the WhatsApp Business API, we may process:</p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600">
                      <li>Incoming messages</li>
                      <li>Outgoing messages</li>
                      <li>Attachments sent through WhatsApp</li>
                      <li>Message delivery and read status</li>
                    </ul>
                    <p className="mt-3 italic text-sm text-slate-500 bg-slate-100 p-3 rounded-md border-l-4 border-slate-300">
                      We do <strong>not</strong> have access to personal WhatsApp accounts—only the WhatsApp Business number you configure.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">2.3 System & Odoo Data</h4>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600">
                      <li>Logs</li>
                      <li>Integration configuration details</li>
                      <li>API usage data</li>
                    </ul>
                  </div>
                </div>
              </ContentSection>

              <ContentSection id="usage" title="3. How We Use Your Information">
                <p className="mb-4 text-slate-600">We use the collected data to:</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>Provide the WhatsApp–Odoo messaging functionality</li>
                  <li>Send automated or manual WhatsApp messages from Odoo</li>
                  <li>Support customer communication</li>
                  <li>Maintain the technical operation of the integration</li>
                  <li>Ensure compliance with Meta policies</li>
                  <li>Improve service performance and reliability</li>
                </ul>
                <p className="mt-6 font-semibold text-blue-600">
                  We do not use WhatsApp message content for analytics, marketing, or profiling.
                </p>
              </ContentSection>

              <ContentSection id="security" title="4. Data Storage & Security">
                <ul className="list-disc pl-5 space-y-3 text-slate-600">
                  <li>All data is stored securely within Odoo and/or your chosen hosting environment.</li>
                  <li>We use industry-standard security practices to protect data from unauthorized access.</li>
                  <li>We do <strong>not</strong> store WhatsApp messages outside of Odoo unless required for system logs.</li>
                </ul>
              </ContentSection>

              <ContentSection id="sharing" title="5. Sharing of Information">
                <p className="mb-4 text-slate-600">
                  We do <strong>not</strong> sell or share your information. Information may be shared only with:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>Meta (WhatsApp) as required for message delivery</li>
                  <li>Hosting providers for infrastructure</li>
                  <li>Legal authorities if required by law</li>
                </ul>
              </ContentSection>

              <ContentSection id="rights" title="6. Your Rights">
                <p className="mb-4 text-slate-600">Depending on your jurisdiction, you may request:</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 grid md:grid-cols-2">
                  <li>Access to your data</li>
                  <li>Correction or deletion of your data</li>
                  <li>Restriction of processing</li>
                  <li>Withdrawal of consent</li>
                </ul>
                <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="text-blue-800 font-medium">To request any of these, contact us at:</p>
                  <a href="mailto:liea.fadlie@jukesolutions.com" className="text-blue-600 hover:text-blue-700 font-bold block mt-1 break-all">
                    liea.fadlie@jukesolutions.com
                  </a>
                </div>
              </ContentSection>

              <ContentSection id="third-party" title="7. Third-Party Services">
                <p className="mb-4 text-slate-600">This integration uses:</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>WhatsApp Business API (Meta)</li>
                  <li>Odoo platform (Odoo S.A.)</li>
                </ul>
                <p className="mt-4 italic text-sm text-slate-500">Each service has its own privacy policy.</p>
              </ContentSection>

              <ContentSection id="children" title="8. Children's Privacy">
                <p className="text-slate-600">Our Service is not intended for individuals under 13 years old.</p>
              </ContentSection>

              <ContentSection id="changes" title="9. Changes to This Policy">
                <p className="text-slate-600">We may update this Privacy Policy from time to time. Updated versions will be posted on this page.</p>
              </ContentSection>

              <ContentSection id="contact" title="10. Contact Information">
                <p className="mb-4 text-slate-600">If you have any questions regarding this Privacy Policy or the WhatsApp integration, you may contact us at:</p>
                <div className="bg-white p-8 rounded-2xl card-shadow border border-slate-100">
                  <h5 className="text-xl font-bold text-slate-800 mb-4">PT Juke Solusi Teknologi</h5>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-slate-600">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:liea.fadlie@jukesolutions.com" className="hover:text-blue-600 transition-colors">liea.fadlie@jukesolutions.com</a>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-600">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <a href="http://www.jukesolutions.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">www.jukesolutions.com</a>
                    </div>
                  </div>
                </div>
              </ContentSection>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
