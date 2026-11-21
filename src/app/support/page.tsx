
'use client';

import React from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MessageCircle,
  HelpCircle,
  UserRound,
  Building2,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';

export default function SupportPage() {
  const supportEmail = 'YOUR_SUPPORT_EMAIL';

  const topics = [
    {
      icon: UserRound,
      title: 'Candidate Support',
      description: 'Help with registration, profiles, resumes and job applications.'
    },
    {
      icon: Building2,
      title: 'Employer Support',
      description: 'Assistance with employer accounts, job postings and recruitment.'
    },
    {
      icon: ShieldCheck,
      title: 'Account & Privacy',
      description: 'Get help with account access, personal information and deletion.'
    },
    {
      icon: HelpCircle,
      title: 'Technical Support',
      description: 'Report app errors, login problems and technical difficulties.'
    }
  ];

  return (
    <main className="min-h-screen bg-[#f5f7fb] py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-blue-600 font-semibold text-xs tracking-[3px] uppercase">
            MYJOB SERVICES
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-[#14243a] mt-4">
            How Can We Help You?
          </h1>

          <p className="text-gray-500 mt-5 leading-7">
            We're here to help you with your job search, recruitment
            activities, account-related queries and technical issues.
            Contact our support team for assistance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {topics.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <Icon size={23} />
                </div>

                <h2 className="text-lg font-bold text-[#14243a] mb-2">
                  {item.title}
                </h2>

                <p className="text-sm text-gray-500 leading-6">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-[#14243a] rounded-2xl p-8 sm:p-10 text-white">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
              <Mail size={24} />
            </div>

            <h2 className="text-2xl font-bold mb-3">
              Email Support
            </h2>

            <p className="text-gray-300 text-sm leading-7 mb-6">
              Send us your questions or describe the issue you're
              experiencing. Our support team will assist you.
            </p>

            <a
              href={`mailto:${supportEmail}`}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-sm font-semibold transition"
            >
              Contact Support <ArrowUpRight size={17} />
            </a>

            <p className="text-xs text-gray-400 mt-5">
              {supportEmail}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <MessageCircle size={24} />
            </div>

            <h2 className="text-2xl font-bold text-[#14243a] mb-3">
              Account Assistance
            </h2>

            <p className="text-gray-500 text-sm leading-7 mb-6">
              Want to remove your account or personal information?
              Visit our account deletion page to submit a request.
            </p>

            <Link
              href="/delete-account"
              className="inline-flex items-center gap-2 bg-[#14243a] hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-semibold transition"
            >
              Delete Account <ArrowUpRight size={17} />
            </Link>
          </div>

        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            For more information, please read our{' '}
            <Link href="/privacy" className="text-blue-600 font-semibold hover:underline">
              Privacy Policy
            </Link>.
          </p>
        </div>

      </div>
    </main>
  );
}
