import React from 'react';
import AuthCard from '../components/layout/AuthCard';
import FormSection from '../components/layout/FormSection';

/**
 * The main login page of the application.
 * It utilizes a full-screen layout to center the authentication card.
 */
const IndexPage: React.FC = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-background">
      <AuthCard
        title="Welcome"
        footerText="Don't have an account?"
        footerLinkText="SignUp"
        footerLinkHref="#"
      >
        <FormSection />
      </AuthCard>
    </main>
  );
};

export default IndexPage;
