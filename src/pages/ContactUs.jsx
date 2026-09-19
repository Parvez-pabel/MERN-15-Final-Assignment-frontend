import React from "react";
import { useAuthStore } from "../store/useAuthStore";

const ContactUs = () => {

  const { contactUs, isSuccess, error, isLoading, setContactFormField, contactFormData } = useAuthStore();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await contactUs();
    if (response) {

      alert("Message sent to editorial team!");

    }
  };

  return (
    <div className="bg-base-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-3 mb-12">
        <span className="badge badge-primary badge-outline text-xs tracking-widest uppercase">
          Newsroom & Support
        </span>
        <h1 className="text-4xl font-extrabold text-primary sm:text-5xl">
          Contact IceCream News
        </h1>
        <p className="text-base-content/80 text-lg">
          Have a news tip, press release, feedback, or media inquiry? Reach out
          to our newsroom.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information & News Desk Details */}
        <div className="bg-base-200 p-8 rounded-2xl shadow-xs space-y-6">
          <h2 className="text-2xl font-bold text-base-content">
            Editorial Desk Info
          </h2>
          <p className="text-base-content/70">
            For urgent story tips or general questions, connect directly with
            our journalism team.
          </p>

          <div className="space-y-5 pt-2">
            <div className="flex items-start space-x-4">
              <span className="text-2xl">📰</span>
              <div>
                <h4 className="font-semibold text-base-content">
                  Newsroom Address
                </h4>
                <p className="text-sm text-base-content/70">
                  IceCream Media Tower, Level 8<br />
                  78 Journalist Avenue, Media City
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-2xl">💡</span>
              <div>
                <h4 className="font-semibold text-base-content">
                  Anonymous News Tips
                </h4>
                <p className="text-sm text-base-content/70">
                  tips@icecreamnews.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-2xl">📧</span>
              <div>
                <h4 className="font-semibold text-base-content">
                  Editorial & Press Inquiries
                </h4>
                <p className="text-sm text-base-content/70">
                  editor@icecreamnews.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-2xl">📞</span>
              <div>
                <h4 className="font-semibold text-base-content">
                  Desk Helpline
                </h4>
                <p className="text-sm text-base-content/70">
                  +1 (555) 019-2834 (24/7 Coverage)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Container */}
        <div className="bg-base-200 p-8 rounded-2xl shadow-xs">
          <h2 className="text-2xl font-bold text-base-content mb-6">
            Send Us a Message
          </h2>

          {error && (<div className="alert alert-error mb-4 text-sm">
            <span>{error}</span>
          </div>
          )}
          {isSuccess && (<div className="alert alert-success mb-4 text-sm">
            <span>Message sent successfully!</span>
          </div>
          )}


          {/* Form UI */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text font-medium">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full"
                value={contactFormData.name}
                onChange={(e) => setContactFormField("name", e.target.value)}
                disabled={isLoading}
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="input input-bordered w-full"
                value={contactFormData.email}
                onChange={(e) => setContactFormField("email", e.target.value)}
                disabled={isLoading}
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Story headline or inquiry topic"
                className="input input-bordered w-full"
                value={contactFormData.subject}
                onChange={(e) => setContactFormField("subject", e.target.value)}
                disabled={isLoading}
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">
                  Message / Details
                </span>
              </label>
              <textarea
                placeholder="Provide details, facts, or press release info here..."
                className="textarea textarea-bordered w-full h-32"
                value={contactFormData.message}
                onChange={(e) => setContactFormField("message", e.target.value)}
                disabled={isLoading}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full mt-2">
              {isLoading ? "Sending message..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
