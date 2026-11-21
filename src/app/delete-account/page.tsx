
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Trash2,
  ShieldCheck,
  AlertTriangle,
  Mail,
  ArrowLeft
} from 'lucide-react';

export default function DeleteAccountPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [accountType, setAccountType] = useState('Candidate');
  const [reason, setReason] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const supportEmail = 'YOUR_SUPPORT_EMAIL';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!confirmed) {
      alert('Please confirm your account deletion request.');
      return;
    }

    const subject = encodeURIComponent(
      'MyJob Services - Account Deletion Request'
    );

    const body = encodeURIComponent(
      `Account Deletion Request

Name: ${name}
Registered Email: ${email}
Mobile Number: ${phone}
Account Type: ${accountType}
Reason: ${reason || 'Not specified'}

I confirm that I am requesting deletion of my MyJob Services account and associated personal information.`
    );

    window.location.href =
      `mailto:${supportEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-[#f5f7fb] py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">

        <Link
          href="/support"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 mb-8"
        >
          <ArrowLeft size={17} /> Back to Support
        </Link>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

          <div className="bg-[#14243a] px-6 py-9 sm:px-10 text-center text-white">
            <div className="w-14 h-14 bg-red-500/15 text-red-400 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Trash2 size={27} />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold">
              Delete Your Account
            </h1>

            <p className="text-gray-300 text-sm leading-7 mt-4 max-w-lg mx-auto">
              We're sorry to see you go. Submit a request to delete
              your MyJob Services account and associated personal data.
            </p>
          </div>

          <div className="p-6 sm:p-10">

            <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 mb-8">
              <div className="flex gap-3 items-start">
                <AlertTriangle className="text-amber-600 shrink-0 mt-1" size={20} />
                <div>
                  <h2 className="font-bold text-amber-900 text-sm mb-2">
                    Important Information
                  </h2>
                  <p className="text-amber-800 text-sm leading-6">
                    Account deletion is intended to be permanent.
                    Your profile, resumes, job applications and
                    associated personal information will be handled
                    according to our data deletion policy.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-sm font-semibold text-[#14243a] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your registered name"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#14243a] mb-2">
                  Registered Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your registered email"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#14243a] mb-2">
                  Registered Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your registered mobile number"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#14243a] mb-2">
                  Account Type *
                </label>
                <select
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500 text-sm bg-white"
                >
                  <option value="Candidate">Candidate / Job Seeker</option>
                  <option value="Employer">Employer / Recruiter</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#14243a] mb-2">
                  Reason for Deletion (Optional)
                </label>
                <textarea
                  rows={4}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Please tell us why you want to delete your account..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-blue-500 text-sm resize-none"
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={confirmed}
                    onChange={(e) => setConfirmed(e.target.checked)}
                    className="mt-1 accent-blue-600"
                    required
                  />
                  <span className="text-sm text-gray-600 leading-6">
                    I confirm that I am requesting deletion of my
                    MyJob Services account and understand that my
                    account and associated personal data will be
                    deleted, subject to applicable legal retention
                    requirements.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={!confirmed}
                className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition"
              >
                <Trash2 size={18} />
                Submit Account Deletion Request
              </button>

            </form>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-blue-600 shrink-0" size={21} />
                <p className="text-xs text-gray-500 leading-6">
                  Your request will be sent to our support team.
                  We may contact you to verify account ownership
                  before processing your request. For details about
                  data retention, please read our{' '}
                  <Link href="/privacy" className="text-blue-600 font-semibold">
                    Privacy Policy
                  </Link>.
                </p>
              </div>

              <p className="text-center text-xs text-gray-400 mt-6">
                Need help? Contact our{' '}
                <Link href="/support" className="text-blue-600 font-semibold">
                  Support Team
                </Link>.
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
