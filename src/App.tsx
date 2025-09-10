import { RouterProvider, useRouter } from "./components/Router";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { ProjectDetail } from "./components/ProjectDetail";
import { TermsOfService } from "./components/TermsOfService";
import { PublicOffer } from "./components/PublicOffer";
import { UserAgreement } from "./components/UserAgreement";
import { Footer } from "./components/Footer";
import { Preloader } from "./components/Preloader";
import { ScrollProgress } from "./components/ScrollProgress";
import { useState } from "react";

function AppContent() {
  const { currentRoute } = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage />;
      case 'project':
        return <ProjectDetail />;
      case 'terms':
        return <TermsOfService />;
      case 'offer':
        return <PublicOffer />;
      case 'agreement':
        return <UserAgreement />;
      default:
        return <HomePage />;
    }
  };

  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main className="pt-16 md:pt-24">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}