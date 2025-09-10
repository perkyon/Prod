import { createContext, useContext, useState, ReactNode, useCallback } from "react";

type Route = 'home' | 'project' | 'offer' | 'terms' | 'agreement';

interface RouterContextType {
  currentRoute: Route;
  projectId?: string;
  navigateTo: (route: Route, params?: { projectId?: string }) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');
  const [projectId, setProjectId] = useState<string | undefined>(undefined);

  const navigateTo = useCallback((route: Route, params?: { projectId?: string }) => {
    setCurrentRoute(route);
    setProjectId(params?.projectId);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const value = { currentRoute, projectId, navigateTo };

  return (
    <RouterContext.Provider value={value}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (context === undefined) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}