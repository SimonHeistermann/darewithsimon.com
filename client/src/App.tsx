import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/hooks/use-language";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import { 
  ROUTES, 
  shouldRedirect, 
  getRouteSuggestions,
  type RouteConfig 
} from "@/services/routingService";

function SmartRoute({ path, component: Component, ...props }: {
  path: string;
  component: React.ComponentType<any>;
  [key: string]: any;
}) {
  const [location, setLocation] = useLocation();
  useEffect(() => {
    const redirectPath = shouldRedirect(location);
    if (redirectPath) {
      setLocation(redirectPath);
    }
  }, [location, setLocation]);
  return <Route path={path} component={Component} {...props} />;
}

function NotFoundWithSuggestions() {
  const [location] = useLocation();
  const suggestions = getRouteSuggestions(location);
  return (
    <NotFound 
      currentPath={location}
      suggestions={suggestions}
    />
  );
}

function Router() {
  return (
    <Switch>
      {Object.entries(ROUTES).map(([routeName, route]: [string, RouteConfig]) =>
        route.paths.map((path: string) => (
          <SmartRoute
            key={`${routeName}-${path}`}
            path={path}
            component={route.component}
          />
        ))
      )}
      <Route component={ NotFoundWithSuggestions } />
    </Switch>
  );
}

// Route-Logging Service
function RouteLogger() {
  const [location] = useLocation();
  useEffect(() => {
    // Hier könntest du Analytics oder Logging hinzufügen
    // Optional: Google Analytics oder andere Tracking-Services
    // gtag('config', 'GA_MEASUREMENT_ID', {
    //   page_path: location
    // });
  }, [location]);
  
  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <RouteLogger />
          <Router />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;